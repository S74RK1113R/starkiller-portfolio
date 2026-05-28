"use client";

import {
  ChatBubbleIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { Heading } from "@/presentation/components/atoms/Heading";
import { ContactLink } from "@/presentation/components/molecules/ContactLink";
import { useI18n } from "@/presentation/hooks/useI18n";

export function ContactSection() {
  const t = useI18n();

  const contacts = [
    {
      href: t.contact.whatsapp,
      icon: <ChatBubbleIcon className="h-5 w-5" />,
      label: "WhatsApp",
    },
    {
      href: t.contact.github,
      icon: <GitHubLogoIcon className="h-5 w-5" />,
      label: "GitHub",
    },
    {
      href: t.contact.linkedin,
      icon: <LinkedInLogoIcon className="h-5 w-5" />,
      label: "LinkedIn",
    },
    {
      href: `mailto:${t.contact.email}`,
      icon: <EnvelopeClosedIcon className="h-5 w-5" />,
      label: "Gmail",
    },
  ];

  return (
    <section
      id="contact"
      className="mx-auto max-w-3xl px-4 py-20 sm:px-6"
    >
      <Heading level={2} className="mb-4 text-center">
        {t.sectionTitles.contact}
      </Heading>

      <p className="mb-8 text-center text-base text-gray-500 dark:text-gray-400">
        {t.contact.information}
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {contacts.map((contact) => (
          <ContactLink
            key={contact.label}
            href={contact.href}
            icon={contact.icon}
            label={contact.label}
          />
        ))}
      </div>
    </section>
  );
}
