import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sujit AL | AI Engineer,Data Scientist, Backend & Cloud Engineer",
    template: "%s | Sujit AL",
  },
  description: "Portfolio of Sujit AL (Sujit Laware) - AWS Cloud Captain at IIT Madras. Expert in AI/ML, Data Science, and Backend Systems. Available for freelance projects.",
  keywords: [
    "Sujit AL",
    "Sujit Laware",
    "Laware Sujit Annasaheb",
    "Sujit Annasaheb Laware",
    "Zeex AI CTO",
    "Data Scientist",
    "Backend Engineer",
    "Cloud Engineer",
    "Zeex AI Technical Lead",
    "AWS Cloud Captain",
    "Cloud Captain IIT Madras",
    "IIT Madras Student",
    "AI Engineer",
    "Data Scientist",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Minimalist Portfolio",
    "Freelance AI Engineer",
    "Freelance Machine Learning Developer",
    "Hire Data Scientist",
    "Backend Developer Freelance",
    "Cloud Architecture Consultant",
    "NLP Specialist",
    "Computer Vision Engineer",
    "Generative AI Developer",
    "AWS Cloud Consultant",
    "React Node.js Freelancer"
  ],
  authors: [{ name: "Sujit AL", url: "https://sujit.codes" }, { name: "Sujit Laware" }],
  creator: "Sujit AL",
  publisher: "Sujit AL",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sujit.codes",
    title: "Sujit AL | Data Scientist, Backend & Cloud Engineer",
    description: "Personal portfolio of Sujit Laware (Sujit AL). Undergraduate at IIT Madras, CTO at Zeex AI, and SAWS Cloud Captain.",
    siteName: "Sujit AL Portfolio",
    images: [
      {
        url: "/portfolio-preview.jpg", // Ensure you have an image at this path in public folder
        width: 1200,
        height: 630,
        alt: "Sujit AL Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sujit AL | Data Scientist, Backend & Cloud Engineer",
    description: "Portfolio of Sujit Laware - IIT Madras, Zeex AI, and SAWS.",
    creator: "@sujit_al", // Replace with actual handle if different
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "1s-JkT0l5bTxsfMUAtng2Dh_i-iUNVrR1Vj4xVv0zDM",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
