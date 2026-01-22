import type { Metadata } from 'next';
import './globals.css';
import { TooltipProvider } from '@/components/ui/tooltip';

export const metadata: Metadata = {
  title: 'Jaxon Tabesh | Portfolio',
  description:
    'Software engineering portfolio showcasing projects, leadership experience, and technical skills.',
  icons: {
    icon: [
      { url: './favicons/light/favicon.ico', media: '(prefers-color-scheme: light)' },
      { url: './favicons/dark/favicon.ico', media: '(prefers-color-scheme: dark)' },
    ],
  },
  manifest: './favicons/light/site.webmanifest',
  other: {
    'darkreader-lock': 'true',
    darkreader: 'enabled',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=JetBrains+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <body className={`overflow-x-hidden bg-neutral-200 antialiased dark:bg-neutral-900`}>
        {children}
      </body>
    </html>
  );
}
