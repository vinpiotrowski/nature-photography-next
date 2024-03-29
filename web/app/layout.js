import Head from 'next/head'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nature Photography dot CA",
  description: "Nature and Landscape Photography by Vince Piotrowski",
  metadataBase: new URL('https://nature-photography.ca'),
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width' />
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </Head>
      <html lang="en">
        <body className={inter.className}>
            {children}
        </body>
      </html>
    </>

  );
}
