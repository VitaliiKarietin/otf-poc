import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { MuiThemeProvider } from "@/providers";
import { MainLayout } from "@/components/layout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: "#002031" }}>
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <MuiThemeProvider>
            <MainLayout>
              {children}
            </MainLayout>
          </MuiThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}