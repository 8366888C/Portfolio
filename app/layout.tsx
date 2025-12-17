import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// !fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// !html
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} body-margin`}
      >
        <main className="main-margin">{children}</main>
      </body>
    </html>
  );
}
