import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

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
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Light mode favicons */}
                <link
                    rel="icon"
                    href="/favicons/light/favicon.ico"
                    media="(prefers-color-scheme: light)"
                />
                <link
                    rel="manifest"
                    href="/favicons/light/site.webmanifest"
                    media="(prefers-color-scheme: light)"
                />
                {/* Dark mode favicons */}
                <link
                    rel="icon"
                    href="/favicons/dark/favicon.ico"
                    media="(prefers-color-scheme: dark)"
                />
                <link
                    rel="manifest"
                    href="/favicons/dark/site.webmanifest"
                    media="(prefers-color-scheme: dark)"
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
