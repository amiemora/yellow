// src/theme.js
import { createTheme } from "@mui/material/styles";

/**
 *  Global Theme
 */

export const getTheme = () => {
  return createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    components: {
      // Style specific MUI components here if needed
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none", // Prevent all-caps text in buttons
          },
        },
      },
    },
    palette: {
      mode: "dark", // Set the default mode to dark
      primary: {
        main: "#ffeb3b", // Yellow shade
        contrastText: "#121212", // Dark background for contrast
      },
      secondary: {
        main: "#FFFFFF", // White
      },
      background: {
        default: "#121212", // Dark background
        paper: "#1E1E1E", // Slightly lighter for cards and surfaces
      },
      text: {
        primary: "#FFFFFF", // White text
        secondary: "#A1A1A1", // Light gray for secondary text
      },
    },
    shape: {
      borderRadius: 8, // Rounded corners for cards, buttons, etc.
    },
    typography: {
      fontFamily: "'Circular Std', 'Roboto', 'Helvetica', 'Arial', sans-serif", // Spotify's font with fallbacks
      h1: {
        fontSize: "3rem",
        fontWeight: 700,
      },
      h2: {
        fontSize: "2.125rem",
        fontWeight: 600,
      },
      h3: {
        fontSize: "1.5rem",
        fontWeight: 500,
      },
      body1: {
        fontSize: "1rem",
      },
    },
  });
};
