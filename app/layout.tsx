import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "S74RK1113R - Frontend Developer",
  description:
    "Frontend developer focused on creating attractive and scalable websites with React.",
  alternates: {
    languages: {
      es: "/es",
      en: "/en",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
