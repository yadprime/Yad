import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yadgodshand.com"),
  title: {
    default: "YAD God's Hand | Tech & Digital Aid in Sierra Leone",
    template: "%s | YAD God's Hand",
  },
  description:
    "YAD God's Hand helps businesses, institutions, startups, and communities in Sierra Leone use technology with confidence.",
  openGraph: {
    title: "YAD God's Hand",
    description:
      "To Help. To Guide. To Build. Technology support and digital transformation from Sierra Leone.",
    images: ["/brand/yad-hero-wide.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
