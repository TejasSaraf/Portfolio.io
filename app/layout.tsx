import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tejas Saraf",
  description: "Created by Tejas Saraf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
