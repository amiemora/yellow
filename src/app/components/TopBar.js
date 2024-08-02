"use client";
import React from "react";
import {
  Box,
  Chip,
  Typography,
  Grid,
  Button,
  Avatar,
  IconButton,
  styled,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useBreakpoint } from "../context/BreakpointContext";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Star } from "@mui/icons-material";
import Link from "next/link";

// ... (other imports)

const menuItems = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
  // { label: "Projects", route: "/projects" },
  // { label: "Skills", route: "/skills" },
  { label: "Contact", route: "/contact" },
];

// ... (TopBar component)

const StyledTopBar = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(22, 22, 22, 0.7)", // Semi-transparent black
  // backgroundColor: "yellow",
  padding: theme.spacing(2),
  position: "fixed", // Fix the TopBar
  top: 0, // Position it at the top
  width: "100%",
  zIndex: 10, // Ensure it stays on top
}));

const TopBar = () => {
  const theme = useTheme();
  const { isMobile } = useBreakpoint();

  return (
    <StyledTopBar
    // sx={{
    //   width: isMobile ? "100%" : `calc(100% - 356px)`,
    //   left: isMobile ? 0 : "256px",
    // }}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>{/* <Star /> */}</Grid>
        <Grid item>
          <Box display="flex" alignItems="center">
            {menuItems.map(({ label, route }) => (
              <Link key={label} href={route} passHref>
                <Chip
                  color="primary"
                  label={label}
                  clickable={true}
                  sx={{ mr: 1 }}
                />
              </Link>
            ))}
            {/* ... (other elements) */}
          </Box>
        </Grid>
      </Grid>
    </StyledTopBar>
  );
};

export default TopBar;
