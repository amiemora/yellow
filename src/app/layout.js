"use client";
// The 'use client' directive tells Next.js that this component should be treated as a Client Component and
// rendered on the client-side, allowing it to use React hooks and handle client-side interactions.

import * as React from "react";
import { Box, CssBaseline, ThemeProvider, useTheme } from "@mui/material";
import { getTheme } from "./theme";
import { BreakpointProvider } from "./context/BreakpointContext";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

import BottomNavigation from "./components/BottomNav";
import { useBreakpoint } from "./context/BreakpointContext";

export default function RootLayout({ children }) {
  const theme = useTheme();
  const { isDesktop } = useBreakpoint();

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={getTheme()}>
          <BreakpointProvider>
            <CssBaseline />
            <Box sx={{ display: "flex", height: "100vh" }}>
              {/* Sidebar to the left */}
              <Sidebar />
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
