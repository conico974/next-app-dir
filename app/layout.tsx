import { Navbar } from "@/component/app/navbar";
import Link from "next/link";
import "../styles/globals.scss";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>

      <body id="root">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
