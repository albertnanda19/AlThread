import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import "../globals.css";

export const metadata = {
    title: 'AlThread',
    description: 'A Next.JS 13 Meta Threads Application'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className="bg-dark-1">
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}