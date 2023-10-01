import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import ClientOnly from '@/components/ClientOnly'
import RegisterModal from '@/components/modal/RegisterModal'
import LoginModal from '@/components/modal/LoginModal'

const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sapelka Beauty Salon',
  description: 'Sapelka Beauty Salon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
        <RegisterModal/>
        <LoginModal/>
        <Navbar/>
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
