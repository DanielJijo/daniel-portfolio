"use client";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import TubelightNavbar from "@/components/tubelight-navbar";
import Footer from "@/components/footer";
import SocialDock from "@/components/ui/social-dock";
import ClickRipple from "@/components/ClickRipple";
import PageTransition from "@/components/PageTransition";
import { useEffect, useState } from "react";
import "@/app/globals.css";
import { ReactLenis } from "lenis/react";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const [showTransition, setShowTransition] = useState(false);
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    const handleRouteChange = () => {
      setShowTransition(true);
      setTimeout(() => {
        setShowTransition(false);
        setCurrentPath(window.location.pathname);
      }, 900); // Duration should match the animation
    };
    window.addEventListener("popstate", handleRouteChange);
    window.addEventListener("pushstate", handleRouteChange);
    window.addEventListener("replacestate", handleRouteChange);
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      window.removeEventListener("pushstate", handleRouteChange);
      window.removeEventListener("replacestate", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    if (currentPath !== window.location.pathname) {
      setShowTransition(true);
      setTimeout(() => {
        setShowTransition(false);
        setCurrentPath(window.location.pathname);
      }, 900);
    }
  }, [pathname]);

  return (
    <div className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <ClickRipple />
        <PageTransition show={showTransition} />
        <ReactLenis root>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <TubelightNavbar />
            <main>{children}</main>
            <Footer />
            <div className="fixed left-0 right-0 bottom-20 z-50 flex justify-center pointer-events-none">
              <div className="pointer-events-auto">
                <SocialDock />
              </div>
            </div>
          </div>
        </ReactLenis>
      </ThemeProvider>
    </div>
  );
} 