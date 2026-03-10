import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Box, Container } from '@mui/material';
import ThemeRegistry from '@/app/components/ThemeRegistry';
import Navbar from '@/app/components/NavBar';
import './globals.css';
import { Toaster } from 'sonner';

const geist = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jaro | Frontend Developer',
  description: 'React & TypeScript Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
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
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
