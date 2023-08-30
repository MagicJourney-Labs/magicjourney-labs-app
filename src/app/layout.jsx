import "./globals.css";
import { Inter } from "next/font/google";
import Header from '@/components/ui/Header'
import { MobileMenuProvider } from '../components/ui/MobileMenuProvider'
import Footer from "@/components/ui/FooterMain";
import { fetchGraphQL } from "@/lib/graphql-utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MagicJourney Labs",
  description: "team website",
};
async function getFooter() {
  const query = `
  query Footer {
    footer(where: {id: "cllnuerfg02wo0bmmv8d3wnvq"}) {
      footerColumn {
        title
        links {
          id
          name
          page {
            slug
          }
        }
      }
      socialMediaIcon {
        url
        image {
          url
        }
      }
      footerInfo {
        image {
          url
        }
        name
        description
      }
      copyright {
        text
      }
    }
  }
  `;
  const data = await fetchGraphQL(query);
  return data;
}

async function getHeader() {
  const query = `
  query Header {
    header(where: {id: "cllvx2agv4q410blf7pae0erf"}) {
      headerLogo {
        name
        logo {
          url
        }
      }
      headerLinks {
        id
        links {
          id
          name
          page {
            slug
          }
        }
      }
      headerLogIn {
        name
      }
    }
  }  
  `;
  const data = await fetchGraphQL(query);
  return data;
}

export default async function RootLayout({ children }) {
  const { footer } = await getFooter();
  const { header } = await getHeader();

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
