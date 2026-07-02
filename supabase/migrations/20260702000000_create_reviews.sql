-- Reviews table: referenced by /api/reviews/* since SAN-era code but never
-- created in the production database (list endpoint 500'd on every place
-- page until 2026-07-02, when the API was patched to degrade gracefully).
-- Apply when public accounts/reviews are re-enabled.
create table if not exists public.reviews (
    id uuid default gen_random_uuid() primary key,
    place_id uuid not null references public.places(id) on delete cascade,
    user_id uuid references auth.users(id) on delete set null,
    rating smallint not null check (rating between 1 and 5),
    comment text not null check (char_length(comment) between 10 and 5000),
    author_name text,
    created_at timestamptz not null default now()
);

create index if not exists reviews_place_id_idx on public.reviews(place_id);

alter table public.reviews enable row level security;

create policy "reviews are publicly readable"
    on public.reviews for select using (true);

create policy "authenticated users can create reviews"
    on public.reviews for insert to authenticated with check (auth.uid() = user_id);
