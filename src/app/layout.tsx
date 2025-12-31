import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sujit Laware | Design Engineer",
  description: "Portfolio of Sujit Laware - Edge AI & Web Systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
