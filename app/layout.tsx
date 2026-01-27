import './globals.css' // BU SATIR HAYATİ ÖNEMDE!

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