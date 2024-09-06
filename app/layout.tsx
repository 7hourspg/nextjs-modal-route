import { SiteHeader } from "@/components/site-header"

import "@/styles/globals.css"

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        {modal}
      </body>
    </html>
  )
}
