import Slider from "@app/shared/nav/slider";
import { initUserLanguage } from "@app/i18n/server";
import MainLayout from "@app/shared/layout/main";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await initUserLanguage();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Slider />
        <main>
          <MainLayout>{children}</MainLayout>
        </main>
      </body>
    </html>
  );
}
