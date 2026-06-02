import './globals.css'
import CustomCursor from '@/components/ui/CustomCursor'
import GlobalAIChatWidget from '@/components/ui/GlobalAIChatWidget'

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
    <html lang="en">
      <body>
        <CustomCursor />
        {children}
        <GlobalAIChatWidget />
      </body>
    </html>
  )
}
