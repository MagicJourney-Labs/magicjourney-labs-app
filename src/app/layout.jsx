import './globals.css'
import { Inter } from 'next/font/google'
import { MobileMenuProvider } from './HeaderContext'
import Header from '@/components/ui/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MagicJourney Labs',
  description: 'team website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MobileMenuProvider>
          <Header />
        </MobileMenuProvider>
        {children}
        </body>
    </html>
  )
}
