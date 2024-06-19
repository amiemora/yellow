// src/context/BreakpointContext.js
import React, { createContext, useContext } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Create a React Context to store and manage breakpoint information.
const BreakpointContext = createContext({});

/**
 * BreakpointProvider component:
 *
 * Provides breakpoint values (isMobile, isTablet, isDesktop)
 * to its children components via the BreakpointContext.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Children components to be wrapped
 *                                            with the context provider.
 */
export const BreakpointProvider = ({ children }) => {
  const theme = useTheme(); // Access the Material-UI theme

  // Use MUI's useMediaQuery to determine breakpoint matches:
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // Provide the breakpoint values to the consuming components.
  return (
    <BreakpointContext.Provider value={{ isMobile, isTablet, isDesktop }}>
      {children}
    </BreakpointContext.Provider>
  );
};

/**
 * Custom hook to easily access breakpoint values from the context.
 * @returns {Object} An object containing breakpoint flags (isMobile, isTablet, isDesktop).
 */
export const useBreakpoint = () => useContext(BreakpointContext);
