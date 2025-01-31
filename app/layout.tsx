import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StockED Trading Institute | Master the Market",
  description: "Join StockED Trading Institute to learn stock market strategies from experts.",
  keywords: "StockED Trading, trading courses, investment strategies, stock market education",
  authors: [{ name: "StockED Trading", url: "https://stocked-trading.in/" }],
  openGraph: {
    type: "website",
    url: "https://stocked-trading.in/",
    title: "StockED Trading Institute",
    description: "Best trading courses and investment strategies.",
    images: [{ url: "/Stock-ED_Logo.png", width: 800, height: 600, alt: "StockED Trading Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@stockedtrading",
    title: "StockED Trading Institute",
    description: "Join StockED Trading Institute to master trading strategies.",
    images: ["/Stock-ED_Logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://stocked-trading.in/" />
        <meta property="og:image" content="/Stock-ED_Logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/Stock-ED_Logo.png" />
        <link rel="canonical" href="https://stocked-trading.in/" />
        <link rel="icon" href="/Stock-ED_Logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
