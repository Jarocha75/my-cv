import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Container } from "@mui/material";
import ThemeRegistry from "@/app/components/ThemeRegistry";
import Navbar from "@/app/components/NavBar";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jaro | Frontend Developer",
  description: "React & TypeScript Developer Portfolio",
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
          <Navbar />
          <Container maxWidth="lg" sx={{ mt: 6 }}>
            {children}
          </Container>
        </ThemeRegistry>
      </body>
    </html>
  );
}