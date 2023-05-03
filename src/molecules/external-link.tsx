import type { ReactNode } from 'react';

export interface ExternalLinkProps {
  children: ReactNode;
  href: string;
}

export const ExternalLink = ({ children, href }: ExternalLinkProps) => (
  <a
    href={href}
    referrerPolicy="no-referrer"
    rel="external noreferrer"
    target="_blank"
  >
    {children}
  </a>
);
