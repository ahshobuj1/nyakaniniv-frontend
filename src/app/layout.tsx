import type {Metadata} from 'next';
import {Toaster} from '@/components/ui/sonner';

import './globals.css';

export const metadata: Metadata = {
  title: 'UpBeat Africa',
  description:
    'A fully responsive analytics dashboard featuring dynamic charts, interactive tables, a collapsible sidebar. Built with modern web technologies, it ensures seamless performance across devices.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-background overscroll-none font-sans antialiased"
        suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
