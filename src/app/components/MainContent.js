"use client";

import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  styled,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { drawerWidth } from "./Sidebar";

const MainContent = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{ padding: 2, marginTop: 20, marginBottom: 10, overflowY: "auto" }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom>
          Amie Morales
        </Typography>

        <Grid container spacing={2}>
          {/* Example Card 1 */}
          <Grid item xs={12} md={6}>
            <SpotifyCard>
              <CardMedia
                component="img"
                height="140"
                image="amie.png"
                alt="amie"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  About Me
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is a sample card with some placeholder content.
                </Typography>
              </CardContent>
            </SpotifyCard>
          </Grid>

          {/* Example Card 2 */}
          <Grid item xs={12} md={6}>
            <SpotifyCard>
              <CardMedia
                component="img"
                height="140"
                image="exp2.png"
                alt="random"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Experience
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is another sample card with placeholder content.
                </Typography>
              </CardContent>
            </SpotifyCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <SpotifyCard>
              <CardMedia
                component="img"
                height="140"
                image="proj.png"
                alt="random"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Projects
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is a sample card with some placeholder content.
                </Typography>
              </CardContent>
            </SpotifyCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <SpotifyCard>
              <CardMedia
                component="img"
                height="140"
                image="sk.png"
                alt="random"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Skills
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is a sample card with some placeholder content.
                </Typography>
              </CardContent>
            </SpotifyCard>
          </Grid>

          {/* Add more cards as needed */}
        </Grid>
      </Box>
    </Box>
  );
};

// Create a styled Card component to mimic Spotify's look
const SpotifyCard = styled(Card)(({ theme }) => ({
  borderRadius: 16, // More rounded corners
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2), 0px 0px 1px rgba(0, 0, 0, 0.1)", // Subtle shadow
  display: "flex", // Use flex layout
  alignItems: "center", // Align items vertically
  "& .MuiCardMedia-root": {
    borderRadius: "16px 0 0 16px", // Rounded corners on top-left
    width: 200, // Set the desired width
    height: 200, // Set the desired height
    marginRight: 16, // Add some spacing between image and content
  },
  "& .MuiCardContent-root": {
    padding: "16px", // More padding
    flex: 1, // Allow content to take remaining space
  },
}));

export default MainContent;
