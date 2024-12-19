import './globals.css'
import { Roboto, Poppins } from 'next/font/google'

const roboto = Roboto({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

const poppins = Poppins({ 
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Marcos Paulo Soares Moura Filho - Portfolio',
  description: 'Personal portfolio of Marcos Paulo Soares Moura Filho, Junior Developer and Student',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable} font-sans bg-gray-100`}>{children}</body>
    </html>
  )
}

