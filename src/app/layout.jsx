import { Theme } from "@radix-ui/themes";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MagicJourney Labs",
  description: "team website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Theme>
        <body className={inter.className}>{children}</body>
      </Theme>
    </html>
  );
}
