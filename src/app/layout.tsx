import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/WaveFooter";
import AuthProvider from "@/utils/SessionProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

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
    <AuthProvider>
      <html lang="en">
        <body className={montserrat.className}>
          {children}

          <Footer />
          <footer></footer>
        </body>
      </html>
    </AuthProvider>
  );
}
