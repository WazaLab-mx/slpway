import React, { useEffect, useRef, useState } from 'react';

export interface ChatScope {
  scope: 'section' | 'newsletter';
  sectionId?: string;
  sectionName?: string;
  sectionType?: string;
  html: string;
}

interface ChatTurn {
  role: 'user' | 'assistant';
  content: string;
  resultingHtml?: string;
}

interface NewsletterChatPanelProps {
  adminKey: string;
  scope: ChatScope;
  onApply: (newHtml: string) => void;
  onClose?: () => void;
}

const QUICK_PROMPTS = [
  'Hazlo más corto',
  'Hazlo más amigable',
  'Quita el último párrafo',
  'Agrega un emoji al inicio',
  'Traduce a inglés',
];

export default function NewsletterChatPanel({
  adminKey,
  scope,
  onApply,
  onClose,
}: NewsletterChatPanelProps) {
  const [messages, setMessages] = useState<ChatTurn[]>([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previousHtml, setPreviousHtml] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, sending]);

  const scopeLabel =
    scope.scope === 'section'
      ? `Editando: ${scope.sectionName ?? scope.sectionType ?? 'sección'}`
      : 'Editando: newsletter completo';

  const handleSend = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || sending) return;

    setError(null);
    setSending(true);
    const turn: ChatTurn = { role: 'user', content: trimmed };
    setMessages((prev) => [...prev, turn]);
    setInput('');

    try {
      const history = messages.map((m) => ({ role: m.role, content: m.content }));
      const res = await fetch('/api/newsletter/chat-edit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': adminKey,
        },
        body: JSON.stringify({
          message: trimmed,
          currentHtml: scope.html,
          scope: scope.scope,
          sectionName: scope.sectionName,
          sectionType: scope.sectionType,
          history,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || data.error || `Request failed (${res.status})`);
      }

      const assistantTurn: ChatTurn = {
        role: 'assistant',
        content: data.reply || 'Listo.',
        resultingHtml: data.html,
      };
      setMessages((prev) => [...prev, assistantTurn]);

      if (data.html && data.html !== scope.html) {
        setPreviousHtml(scope.html);
        onApply(data.html);
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      setError(msg);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: `⚠️ ${msg}` },
      ]);
    } finally {
      setSending(false);
    }
  };

  const handleUndo = () => {
    if (!previousHtml) return;
    onApply(previousHtml);
    setPreviousHtml(null);
    setMessages((prev) => [
      ...prev,
      { role: 'assistant', content: '↩️ Cambio revertido.' },
    ]);
  };

  const handleClear = () => {
    setMessages([]);
    setError(null);
    setPreviousHtml(null);
  };

  return (
    <div className="flex flex-col h-full bg-white border-l">
      <div className="px-4 py-3 border-b bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-between">
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-wider opacity-80">Chat con el editor IA</p>
          <p className="font-semibold truncate">{scopeLabel}</p>
        </div>
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={handleUndo}
            disabled={!previousHtml}
            title="Revertir último cambio"
            className="px-2.5 py-1 text-xs rounded-md bg-white/20 hover:bg-white/30 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ↩️ Undo
          </button>
          <button
            type="button"
            onClick={handleClear}
            disabled={messages.length === 0}
            title="Limpiar conversación"
            className="px-2.5 py-1 text-xs rounded-md bg-white/20 hover:bg-white/30 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Limpiar
          </button>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              title="Cerrar chat"
              className="px-2.5 py-1 text-xs rounded-md bg-white/20 hover:bg-white/30"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div
        ref={listRef}
        className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50"
      >
        {messages.length === 0 && (
          <div className="text-center text-gray-500 text-sm py-6">
            <p className="font-medium mb-1">💬 Pídele cambios al editor IA</p>
            <p className="text-xs">
              Ejemplo:{' '}
              <em>
                &quot;Reescribe el opening en tono más casual y menciona que es jueves
                de mercado&quot;
              </em>
            </p>
          </div>
        )}
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] px-3 py-2 rounded-lg text-sm shadow-sm whitespace-pre-wrap ${
                m.role === 'user'
                  ? 'bg-indigo-600 text-white rounded-br-sm'
                  : 'bg-white text-gray-800 border rounded-bl-sm'
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {sending && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-500 border px-3 py-2 rounded-lg rounded-bl-sm text-sm shadow-sm">
              <span className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
              <span className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-bounce ml-1" style={{ animationDelay: '0.15s' }} />
              <span className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-bounce ml-1" style={{ animationDelay: '0.3s' }} />
              <span className="ml-2 text-xs">Escribiendo…</span>
            </div>
          </div>
        )}
      </div>

      {messages.length === 0 && (
        <div className="px-4 py-2 border-t bg-white">
          <p className="text-xs text-gray-500 mb-2">Sugerencias rápidas:</p>
          <div className="flex flex-wrap gap-1.5">
            {QUICK_PROMPTS.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => handleSend(q)}
                className="px-2.5 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend(input);
        }}
        className="border-t p-3 bg-white"
      >
        {error && (
          <p className="text-xs text-red-600 mb-2">{error}</p>
        )}
        <div className="flex gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend(input);
              }
            }}
            placeholder="Pídele un cambio… (Enter = enviar, Shift+Enter = nueva línea)"
            rows={2}
            className="flex-1 px-3 py-2 border rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={sending}
          />
          <button
            type="submit"
            disabled={sending || !input.trim()}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sending ? '…' : 'Enviar'}
          </button>
        </div>
      </form>
    </div>
  );
}
