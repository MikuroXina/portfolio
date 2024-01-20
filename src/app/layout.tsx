import { Metadata, Viewport } from 'next';
import { roboto } from './fonts';
import './root.css';

const siteImage = 'https://github.com/MikuroXina.png';
const siteName = "MikuroXina's station";

export const viewport: Viewport = {
  themeColor: '#70f6f8',
};

export const metadata: Metadata = {
  icons: [siteImage],
  description:
    'MikuroXina is not only a programmer but also does something more...',
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  openGraph: {
    type: 'website',
    title: siteName,
    siteName: siteName,
    images: [siteImage],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: siteName,
    images: [siteImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
