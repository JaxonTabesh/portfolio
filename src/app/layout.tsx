import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { TooltipProvider } from '@/components/ui/tooltip';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Jaxon Tabesh | Portfolio',
  description:
    'Software engineering portfolio showcasing projects, leadership experience, and technical skills.',
  icons: {
    icon: [
      { url: '/favicons/light/favicon.ico', media: '(prefers-color-scheme: light)' },
      { url: '/favicons/dark/favicon.ico', media: '(prefers-color-scheme: dark)' },
    ],
  },
  manifest: '/favicons/light/site.webmanifest',
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
      <body
        className={`overflow-x-hidden bg-gray-200 dark:bg-gray-900 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
