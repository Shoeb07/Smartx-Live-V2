import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import RootLayoutClient from './layout-client'

// Optimize font loading with display: swap
const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
  preload: true,
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  preload: true,
})

export const metadata = {
  title: 'SmartX Solutions - Custom Software & Web Development',
  description: 'SmartX Solutions builds custom web applications, software, mobile apps, AI automation, and digital marketing services for startups and enterprises.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap"
          as="style"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap"
          as="style"
        />
      </head>
      <body>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  )
}
