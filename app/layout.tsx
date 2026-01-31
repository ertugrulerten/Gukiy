import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      {/* bg-main sınıfı globals.css'deki 180 gri tonunu çeker */}
      <body className={`${inter.className} bg-main antialiased`}>
        {children}
      </body>
    </html>
  )
}