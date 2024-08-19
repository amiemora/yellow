"use client";
// The 'use client' directive tells Next.js that this component should be treated as a Client Component and
// rendered on the client-side, allowing it to use React hooks and handle client-side interactions.

import * as React from "react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Box, CssBaseline, ThemeProvider, useTheme } from "@mui/material";
import { getTheme } from "./theme";
import { BreakpointProvider, useBreakpoint } from "./context/BreakpointContext";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

import BottomNavigation from "./components/BottomNav";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const [scrollPositions, setScrollPositions] = useState({});
  const theme = useTheme();
  const { isDesktop, isTablet } = useBreakpoint();

  useEffect(() => {
    console.log("useEffect triggered for pathname:", pathname);

    const saveScrollPosition = () => {
      console.log("Saving scroll position:", window.scrollY, "for", pathname);
      setScrollPositions((prevPositions) => ({
        ...prevPositions,
        [pathname]: window.scrollY,
      }));
    };

    const restoreScrollPosition = () => {
      console.log(
        "Restoring scroll position for",
        pathname,
        "to",
        scrollPositions[pathname] || 0
      );
      setTimeout(() => {
        window.scrollTo(0, scrollPositions[pathname] || 0);
      }, 0);
    };

    window.addEventListener("scroll", saveScrollPosition);
    window.addEventListener("popstate", restoreScrollPosition);

    restoreScrollPosition(); // Restore on initial load

    return () => {
      window.removeEventListener("scroll", saveScrollPosition);
      window.removeEventListener("popstate", restoreScrollPosition);
    };
  }, [pathname, scrollPositions]);

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/tinya.png"></link>
      </Head>

      <body>
        <ThemeProvider theme={getTheme()}>
          <BreakpointProvider>
            <CssBaseline />
            <Box sx={{ display: "flex", height: "100vh" }}>
              {/* Sidebar to the left */}
              {/* Conditionally render Sidebar based on screen size */}
              {/* <Sidebar /> */}

              <Box sx={{ flexGrow: 1, overflow: "auto" }}>
                {/* TopBar stays on top */}
                <TopBar />

                <Box
                  sx={{
                    pt: { xs: 8, md: 10 }, // Add padding to account for TopBar height
                    flexGrow: 1,
                    overflow: "auto",
                  }}
                >
                  {children}
                </Box>

                {/* BottomNavigation stays at the bottom */}
                {/* <BottomNavigation /> */}
              </Box>
            </Box>
          </BreakpointProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
