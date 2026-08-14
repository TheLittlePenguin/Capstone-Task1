import Link from 'next/link'

const navItems = [
  { href: '/dashboard', label: 'Dashboard'},
  { href: '/notes', label: 'Notes'},
  { href: '/profile', label: 'Profile'},
  { href: '/team-page', label: 'Team Page'},
  { href: '/settings', label: 'Settings'},
]

export function Sidebar() {
  return (
    <aside className="hidden w-60 flex-col border-r border-zinc-200 bg-white lg:flex dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex h-14 items-center border-b border-zinc-200 px-4 dark:border-zinc-800">
        <span className="text-sm font-semibold">{process.env.NEXT_PUBLIC_APP_NAME ?? 'App'}</span>
      </div>
      <nav className="flex-1 space-y-1 p-3">
        {navItems.map(({ href, label,}) => (
          <Link
            key={href}
            href={href}
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
