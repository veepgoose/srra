import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Salisbury Road Residents Association",
  description:
    "Find information about the Salisbury Road Residents Association, sign up as a member, and submit your objection to the West Moseley road closures.",
  openGraph: {
    title: "Salisbury Road Residents Association",
    description:
      "Find information about the Salisbury Road Residents Association, sign up as a member, and submit your objection to the West Moseley road closures.",
    url: "https://www.salisburyroadmoseley.co.uk/",
    siteName: "Salisbury Road Residents Association",
    images: [
      {
        url: "https://www.salisburyroadmoseley.co.uk/ClosuresFlyer.png",
        width: 1200,
        height: 630,
        alt: "Salisbury Road Residents Association Leaflet",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salisbury Road Residents Association",
    description:
      "Find information about the Salisbury Road Residents Association, sign up as a member, and submit your objection to the West Moseley road closures.",
    images: ["https://www.salisburyroadmoseley.co.uk/ClosuresFlyer.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
