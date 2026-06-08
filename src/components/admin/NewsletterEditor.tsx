import React, { useState, useEffect, useMemo } from 'react';
import NewsletterChatPanel, { ChatScope } from './NewsletterChatPanel';
import { parseSections, NewsletterSection } from '@/lib/newsletter-section-parser';

interface NewsletterEditorProps {
  htmlContent: string;
  subject: string;
  adminKey: string;
  onSave: (html: string) => void;
  onExport: (html: string, subject: string) => void;
  onClose: () => void;
}

export default function NewsletterEditor({
  htmlContent,
  subject,
  adminKey,
  onSave,
  onExport,
  onClose
}: NewsletterEditorProps) {
  const [sections, setSections] = useState<NewsletterSection[]>([]);
  const [fullHtml, setFullHtml] = useState(htmlContent);
  const [regenerating, setRegenerating] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatTargetId, setChatTargetId] = useState<string | null>(null);

  useEffect(() => {
    const parsed = parseSections(htmlContent);
    setSections(parsed);
  }, [htmlContent]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const handleRegenerateSection = async (section: NewsletterSection) => {
    setRegenerating(section.id);
    try {
      const res = await fetch('/api/newsletter/regenerate-section', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': adminKey
        },
        body: JSON.stringify({
          sectionType: section.type,
          sectionId: section.id,
          currentHtml: section.html
        })
      });

      const data = await res.json();
      if (data.success && data.html) {
        // Update the section
        const updatedSections = sections.map(s =>
          s.id === section.id ? { ...s, html: data.html } : s
        );
        setSections(updatedSections);

        // Update full HTML
        const newFullHtml = fullHtml.replace(section.html, data.html);
        setFullHtml(newFullHtml);
      } else {
        alert('Failed to regenerate section: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      alert('Error regenerating section');
      console.error(error);
    }
    setRegenerating(null);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      onSave(fullHtml);
    } finally {
      setSaving(false);
    }
  };

  const getPreviewText = (html: string): string => {
    // Strip HTML tags and get first 150 chars
    const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    return text.substring(0, 150) + (text.length > 150 ? '...' : '');
  };

  const chatTargetSection = useMemo(
    () => (chatTargetId ? sections.find((s) => s.id === chatTargetId) : undefined),
    [chatTargetId, sections],
  );

  const chatScope: ChatScope = chatTargetSection
    ? {
        scope: 'section',
        sectionId: chatTargetSection.id,
        sectionName: chatTargetSection.name,
        sectionType: chatTargetSection.type,
        html: chatTargetSection.html,
      }
    : { scope: 'newsletter', html: fullHtml };

  const handleChatApply = (newHtml: string) => {
    if (chatTargetSection) {
      const before = chatTargetSection.html;
      const updatedSections = sections.map((s) =>
        s.id === chatTargetSection.id ? { ...s, html: newHtml } : s,
      );
      setSections(updatedSections);
      // Best-effort substitution; if the section HTML wasn't found verbatim
      // (rare — e.g. whitespace drift), fall back to leaving the full HTML
      // alone so the user can re-trigger a save manually.
      setFullHtml((prev) => (prev.includes(before) ? prev.replace(before, newHtml) : prev));
    } else {
      setFullHtml(newHtml);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-xl max-w-5xl w-full max-h-[95vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4 border-b bg-gradient-to-r from-terracotta to-terracotta/80 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">Newsletter Editor</h2>
              <p className="text-sm opacity-90">{subject}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setChatTargetId(null);
                  setChatOpen((v) => !v);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  chatOpen
                    ? 'bg-indigo-500 text-white hover:bg-indigo-400'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {chatOpen ? '💬 Chat abierto' : '💬 Chat con IA'}
              </button>
              <button
                onClick={() => onExport(fullHtml, subject)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium"
              >
                ⬇ Export HTML
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="px-4 py-2 bg-white text-terracotta rounded-lg hover:bg-gray-100 text-sm font-medium disabled:opacity-50"
              >
                {saving ? 'Saving...' : '💾 Save Draft'}
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 text-sm"
              >
                ✕ Close
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden flex">
          {/* Sections List */}
          <div className={`${chatOpen ? 'w-1/3' : 'w-1/2'} border-r overflow-y-auto p-4 space-y-3`}>
            <p className="text-sm text-gray-500 mb-4">
              Click on a section to expand it. Use "Regenerate" to create new content for that section.
            </p>

            {sections.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <p>No sections detected.</p>
                <p className="text-sm mt-2">The newsletter may use a different format.</p>
              </div>
            ) : (
              sections.map((section) => (
                <div
                  key={section.id}
                  className={`border rounded-lg overflow-hidden transition-all ${
                    expandedSection === section.id ? 'ring-2 ring-terracotta' : ''
                  }`}
                >
                  <div
                    className="p-3 bg-gray-50 flex items-center justify-between cursor-pointer hover:bg-gray-100"
                    onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{section.name.split(' ')[0]}</span>
                      <span className="font-medium text-gray-700">{section.name.substring(2)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {section.editable && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setChatTargetId(section.id);
                              setChatOpen(true);
                            }}
                            title="Pídele al editor IA cambios específicos a esta sección"
                            className={`px-3 py-1 text-xs rounded-full font-medium ${
                              chatOpen && chatTargetId === section.id
                                ? 'bg-indigo-600 text-white'
                                : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                            }`}
                          >
                            💬 Chat
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRegenerateSection(section);
                            }}
                            disabled={regenerating === section.id}
                            className={`px-3 py-1 text-xs rounded-full font-medium ${
                              regenerating === section.id
                                ? 'bg-gray-200 text-gray-500'
                                : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                            }`}
                          >
                            {regenerating === section.id ? '⟳ Regenerating...' : '🔄 Regenerate'}
                          </button>
                        </>
                      )}
                      <span className="text-gray-400">
                        {expandedSection === section.id ? '▼' : '▶'}
                      </span>
                    </div>
                  </div>

                  {expandedSection === section.id && (
                    <div className="p-3 bg-white border-t">
                      <p className="text-sm text-gray-600 mb-2">Preview:</p>
                      <p className="text-sm text-gray-800 bg-gray-50 p-2 rounded">
                        {getPreviewText(section.html)}
                      </p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Chat Panel (toggleable) */}
          {chatOpen && (
            <div className="w-1/3 border-r">
              <NewsletterChatPanel
                adminKey={adminKey}
                scope={chatScope}
                onApply={handleChatApply}
                onClose={() => setChatOpen(false)}
              />
            </div>
          )}

          {/* Preview Panel */}
          <div className={`${chatOpen ? 'w-1/3' : 'w-1/2'} overflow-y-auto bg-gray-100`}>
            <div className="p-4">
              <h3 className="font-medium text-gray-700 mb-3">Live Preview</h3>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <iframe
                  srcDoc={fullHtml}
                  className="w-full h-[600px] border-0"
                  title="Newsletter Preview"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
