import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { ContactButton } from '@/components/contact-button';
import EmailJSInit from '@/components/emailjs-init';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio | Siddharth Verma',
  description: 'Professional portfolio showcasing my work and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ContactButton />
          <Toaster />
          <EmailJSInit />
        </ThemeProvider>
      </body>
    </html>
  );
}