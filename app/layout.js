import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from "../components/Navbar/Navbar"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Efrain Pizarro'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
