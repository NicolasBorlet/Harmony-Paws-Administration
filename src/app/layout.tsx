import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css'
import Dashboard from '@/components/dashboard'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
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
