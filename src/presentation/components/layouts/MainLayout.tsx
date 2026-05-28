import type { ReactNode } from "react";
import { NavBar } from "@/presentation/components/organisms/NavBar";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <NavBar />
      <main>{children}</main>
      <footer className="border-t border-gray-200 py-6 text-center dark:border-gray-800">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} S74RK1113R. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
