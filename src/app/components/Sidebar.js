"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography, // For text content
  Box,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Home, Search, LibraryMusic } from "@mui/icons-material";

export const drawerWidth = 356; // Standard sidebar width (adjust if needed)

const StyledDrawer = styled(MuiDrawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    backgroundColor: theme.palette.background.default, // Match your dark theme
    borderRight: "none", // Remove default border
    borderRadius: 10, // Rounded corners
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)", // Subtle box shadow
    // **Keep height 100vh for drawer to cover entire height**
    height: "100vh",
    padding: "20px 0", // Add padding to the top and bottom
  },
}));

const SidebarTop = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "0 16px 16px 16px", // Adjust padding for the top section
  backgroundColor: theme.palette.background.paper, // Match your dark theme
  borderRadius: 10, // Rounded corners
  "& .MuiTypography-root": {
    color: theme.palette.text.primary,
  },
}));

const SidebarBottom = styled(Box)(({ theme }) => ({
  overflowY: "auto",
  // Remove height calculation for SidebarBottom
  padding: "0 16px", // Add padding to the bottom section
}));

const SidebarListItem = styled(ListItem)(({ theme }) => ({
  padding: "12px 16px", // Adjust padding for the list items
  borderRadius: "8px", // Add rounded corners to the list items
  "&:hover": {
    backgroundColor: theme.palette.background.paper, // Change background color on hover
  },
  "&:focus": {
    backgroundColor: theme.palette.background.paper, // Change background color on focus
  },
}));

export default function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledDrawer
      variant={isMobile ? "temporary" : "permanent"} // Change to temporary on mobile
      anchor="left"
      open={!isMobile} // Control drawer visibility on mobile
    >
      {/* Top Section */}
      <SidebarTop>
        <List>
          <SidebarListItem true>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="body1">Home</Typography>}
            />
          </SidebarListItem>
          <SidebarListItem true>
            <ListItemIcon>
              <Search />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="body1">Search</Typography>}
            />
          </SidebarListItem>
          <SidebarListItem true>
            <ListItemIcon>
              <LibraryMusic />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="body1">Your Library</Typography>}
            />
          </SidebarListItem>
          <SidebarListItem true>
            <ListItemIcon>
              <LibraryMusic />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="body1">Your Library</Typography>}
            />
          </SidebarListItem>

          {/* ... Add more as needed (About, Projects, Contact, etc.) */}
        </List>
      </SidebarTop>

      {/* Bottom Section */}
      <SidebarBottom>
        <List>
          <SidebarListItem true>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="body1">Home</Typography>}
            />
          </SidebarListItem>
          <SidebarListItem true>
            <ListItemIcon>
              <Search />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="body1">Search</Typography>}
            />
          </SidebarListItem>
          <SidebarListItem true>
            <ListItemIcon>
              <LibraryMusic />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="body1">Your Library</Typography>}
            />
          </SidebarListItem>
          <SidebarListItem true>
            <ListItemIcon>
              <LibraryMusic />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="body1">Your Library</Typography>}
            />
          </SidebarListItem>

          {/* ... Add more as needed (About, Projects, Contact, etc.) */}
        </List>
      </SidebarBottom>
    </StyledDrawer>
  );
}
