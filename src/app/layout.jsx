import "./globals.css";
import { Inter } from "next/font/google";
import Header from '@/components/ui/Header'
import { MobileMenuProvider } from '../components/ui/MobileMenuProvider'
import Footer from "@/components/ui/FooterMain";
import { fetchGraphQL } from "@/lib/graphql-utils";
import { mainFooter } from "@/queries/footer";
import { mainHeader } from "@/queries/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MagicJourney Labs",
  description: "team website",
};

export default async function RootLayout({ children }) {
  const { footer } = await fetchGraphQL(mainFooter);
  const { header } = await fetchGraphQL(mainHeader);

  return (
    <html lang="en" className="h-full">
      <body className={inter.className + " flex min-h-full flex-col max-w-[1200px] mx-auto"}>
        <MobileMenuProvider>
          <Header data={header} />
        </MobileMenuProvider>
        {children}
        <Footer data={footer} />
      </body>
    </html>
  );
}
