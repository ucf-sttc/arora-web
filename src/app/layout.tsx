import '../styles/globals.css'
import { Inter } from 'next/font/google'
//import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ARORA Simulator',
  description: 'ARORA Simulator is the geospatial simulator for Autonomous Vehicles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        {children}
      </body>
    </html>
  )
}
