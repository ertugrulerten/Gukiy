import './globals.css' // BU SATIR HAYATİ ÖNEMDE!
import { Square, User, Shield, ChevronDown } from 'lucide-react';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className="bg-[#05070A]">{children}</body>
    </html>
  )
}