-- Create generations table
create table if not exists public.generations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  project_id uuid references public.projects(id) on delete cascade,
  prompt text not null,
  generated_code text not null,
  framework text not null default 'react',
  language text not null default 'typescript',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.generations enable row level security;

-- Create policies
create policy "Users can view their own generations"
  on public.generations for select
  using (auth.uid() = user_id);

create policy "Users can insert their own generations"
  on public.generations for insert
  with check (auth.uid() = user_id);

create policy "Users can delete their own generations"
  on public.generations for delete
  using (auth.uid() = user_id);

-- Create indexes for faster queries
create index if not exists generations_user_id_idx on public.generations(user_id);
create index if not exists generations_project_id_idx on public.generations(project_id);
create index if not exists generations_created_at_idx on public.generations(created_at desc);
