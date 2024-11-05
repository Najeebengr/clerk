import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const suisseIntl = localFont({
  src: [
    {
      path: "fonts/SuisseIntl-Light.ttf", // Absolute path from `public`
      weight: "300"
    },
    {
      path: "fonts/SuisseIntl-Regular.ttf", // Absolute path from `public`
      weight: "400"
    },
    {
      path: 'fonts/SuisseIntl-Bold.ttf', // Absolute path from `public`
      weight: "700"
    }
  ],
  variable: "--font-suisse-intl",
});

export const metadata: Metadata = {
  title: "Authentication | Clerk",
  description: "Clerk Authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${suisseIntl.variable} font-sans antialiased`}>
        <Toaster position="top-right" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
