import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Box, Container } from '@mui/material';
import ThemeRegistry from '@/app/components/ThemeRegistry';
import Navbar from '@/app/components/NavBar';
import { Toaster } from 'sonner';
import Footer from '../Footer';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { Analytics } from '@vercel/analytics/react';

const geist = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jaro | Frontend Developer',
  description: 'React & TypeScript Developer Portfolio',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={geist.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeRegistry>
            <Toaster richColors closeButton position="bottom-right" />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
              }}
            >
              <Navbar />
              <Container maxWidth="lg" sx={{ mt: 6 }}>
                {children}
              </Container>
              <Footer />
              <Analytics />
            </Box>
          </ThemeRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
