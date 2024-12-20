import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import Dashboard from '@/components/dashboard'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body suppressHydrationWarning>
          <main>
            <Dashboard>
              {children}
            </Dashboard>
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
