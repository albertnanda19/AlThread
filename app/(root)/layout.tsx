import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import TopBar from '@/components/shared/TopBar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSideBar from '@/components/shared/RightSidebar'
import BottomBar from '@/components/shared/BottomBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AlThread',
  description: 'A Next.JS 13 Meta Threads Application'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopBar />

          <main className='flex flex-row'>
            <LeftSidebar />

            <section className='main-container'>
              <div className='w-full max-w-4xl'>
                {children}
              </div>
            </section>

            <RightSideBar />
          </main>

          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  )
}
