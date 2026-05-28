"use client";

import { useState } from "react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { NavLinks } from "@/presentation/components/molecules/NavLinks";
import { LangSwitcher } from "@/presentation/components/molecules/LangSwitcher";
import { useI18n } from "@/presentation/hooks/useI18n";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useI18n();

  const links = [
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur-md dark:border-gray-700/80 dark:bg-gray-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight text-red-600"
        >
          S74RK1113R
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-4 md:flex">
          <NavLinks links={links} />
          <LangSwitcher />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-red-600 md:hidden dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-red-400"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <Cross1Icon className="h-5 w-5" />
          ) : (
            <HamburgerMenuIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 md:hidden dark:border-gray-700 dark:bg-gray-900">
          <div className="flex flex-col gap-4">
            <NavLinks links={links} onLinkClick={closeMenu} />
            <div className="flex justify-start">
              <LangSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
