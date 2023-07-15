"use client"
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CookieConsent from "react-cookie-consent"
import { ThemeProvider } from "next-themes"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
          <CookieConsent
          enableDeclineButton
          flipButtons
          location="bottom"
          buttonText="I Agree"
          declineButtonText="I Decline"
          cookieName="cpsiSiteCookie"
          style={{
            margin: '8px 8px 8px 8px',
            borderRadius: 4,
          }} 
          buttonStyle={{
            borderRadius: 4,
            background:'#fff',
            color: '#000',
            fontWeight: '600',
          }}
          declineButtonStyle={{
            borderRadius: 4,
            background:'#26a69a',
            color: '#000',
            fontWeight: '600',
          }}
          expires={450}
          >This website uses cookies to enhance the user experience</CookieConsent>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
