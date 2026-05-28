interface NavLink {
  label: string;
  href: string;
}

interface NavLinksProps {
  links: NavLink[];
  onLinkClick?: () => void;
}

export function NavLinks({ links, onLinkClick }: NavLinksProps) {
  return (
    <nav aria-label="Main navigation" className="flex items-center">
      <ul className="flex flex-col gap-4 md:flex-row md:gap-6">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={onLinkClick}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
