// app/layout.tsx
import { Inter } from "next/font/google"
import "@/app/globals.css"
import type { ReactNode } from "react"
import QueryClientProviderWrapper from "@/components/QueryClientProviderWrapper"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Indian Army Veterans Portal",
  description: "Official portal for Indian Army Veterans...",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <QueryClientProviderWrapper>
          {children}
        </QueryClientProviderWrapper>
      </ThemeProvider>
      </body>
      </html>
  )
}
