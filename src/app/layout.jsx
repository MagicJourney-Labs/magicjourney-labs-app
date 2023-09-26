import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/ui/Header';
import { MobileMenuProvider } from '../components/ui/MobileMenuProvider';
import Footer from '@/components/ui/Footer';
import { fetchGraphQL } from '@/lib/utils/graphqlUtils';
import { mainFooter } from '@/queries/footer';
import { mainHeader } from '@/queries/header';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MagicJourney Labs',
  description: 'team website',
};

export default async function RootLayout({ children }) {
  const { footer } = await fetchGraphQL(mainFooter);
  const { header } = await fetchGraphQL(mainHeader);

  return (
    <html lang='en' className='h-full'>
      <body className={inter.className + ' flex min-h-full flex-col  mx-auto'}>
        <ToastContainer />
        <MobileMenuProvider>
          <Header data={header} />
        </MobileMenuProvider>
        {children}
        <Footer data={footer} />
      </body>
    </html>
  );
}
