import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import TubelightNavbar from "@/components/tubelight-navbar"
import Footer from "@/components/footer"
import Dock from "@/components/Dock/Dock";
import { DockIcon } from "@/components/ui/dock"
import { Github, Linkedin, Code, ExternalLink } from "lucide-react"
import "./globals.css"
import SocialDock from "@/components/ui/social-dock";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Daniel Jijo P.P - Portfolio",
  description:
    "Personal portfolio of Daniel Jijo P.P, Computer Science Engineering student and aspiring Full Stack Developer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dockItems = [
    {
      icon: <Github className="h-7 w-7" />,
      label: "GitHub",
      onClick: () => window.open("https://github.com", "_blank"),
    },
    {
      icon: <Linkedin className="h-7 w-7" />,
      label: "LinkedIn",
      onClick: () => window.open("https://linkedin.com", "_blank"),
    },
    {
      icon: <Code className="h-7 w-7" />,
      label: "LeetCode",
      onClick: () => window.open("https://leetcode.com", "_blank"),
    },
    {
      icon: <ExternalLink className="h-7 w-7" />,
      label: "Codolio",
      onClick: () => window.open("https://codolio.com", "_blank"),
    },
  ];
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <TubelightNavbar />
            <main>{children}</main>
            <div className="fixed left-0 right-0 bottom-20 z-50 flex justify-center pointer-events-none">
              <div className="pointer-events-auto">
                <SocialDock />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
