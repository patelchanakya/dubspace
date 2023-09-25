import "@/styles/globals.css";
import { cal, inter } from "@/styles/fonts";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import Script from 'next/script'


const title =
  "Dubspace – Infinite Sites. Infinite Possibilities.";
const description =
  "The Platforms Starter Kit is a full-stack Next.js app with multi-tenancy and custom domain support. Built with Next.js App Router, Vercel Postgres and the Vercel Domains API.";
const image = "https://vercel.pub/thumbnail.png";

export const metadata: Metadata = {
  title,
  description,
  icons: ["https://vercel.pub/favicon.ico"],
  openGraph: {
    title,
    description,
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
    creator: "@vercel",
  },
  metadataBase: new URL("https://vercel.pub"),

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          defer
          src="https://unpkg.com/@tinybirdco/flock.js"
          data-host="https://api.us-east.tinybird.co"
          data-token="p.eyJ1IjogIjFmZDJjZTQ5LTQyYmYtNGI4Zi1hYmJlLTQzZjM4ZWVhNTQ1ZCIsICJpZCI6ICI4N2JjZGMwZC04Yjk1LTQxYzUtOTVkYy0zZTg3MWFkOGY2OTMiLCAiaG9zdCI6ICJ1c19lYXN0In0.jnFCqCv7UObwIQ4KQ9_SJSoP_3jfCnjs6DU_lj6L4SQ"
        ></Script>
      </head>


      <body className={cn(cal.variable, inter.variable)}>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
