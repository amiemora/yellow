// src/components/BottomNavigation.js
"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationAction,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import {
  PlayArrow,
  Pause,
  SkipNext,
  SkipPrevious,
  Shuffle,
  Repeat,
  VolumeUp,
} from "@mui/icons-material";
import { useBreakpoint } from "../context/BreakpointContext";

// Custom styling
const StyledBottomNavigation = styled(MuiBottomNavigation)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderTop: `1px solid ${theme.palette.divider}`,
  bottom: 0,
  height: 80,
  left: 0,
  position: "fixed", // Make it fixed
  width: "100%",
  zIndex: 1200, // Ensure it stays on top
}));

// Styled BottomNavigationAction for highlight and animation
const StyledBottomNavigationAction = styled(BottomNavigationAction)(
  ({ theme }) => ({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: theme.palette.primary.main,
      transition: "color 0.2s ease-in-out",
    },
  })
);

// Placeholder SongCard component
const SongCard = () => (
  <Box sx={{ display: "flex", alignItems: "center" }}>
    <Box
      sx={{
        width: 50,
        height: 50,
        bgcolor: "gray",
        mr: 2,
      }}
    />
    <Box>
      <Typography variant="subtitle1" noWrap>
        Song Title
      </Typography>
      <Typography variant="caption" noWrap>
        Artist Name
      </Typography>
    </Box>
  </Box>
);

export default function BottomNavigation() {
  const { isMobile } = useBreakpoint();
  const [value, setValue] = React.useState(0);

  return (
    <StyledBottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <Grid container alignItems="center" sx={{ px: 2, py: 1 }}>
        {!isMobile && (
          <Grid item xs={3}>
            <SongCard />
          </Grid>
        )}

        <Grid item xs={isMobile ? 12 : 6} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <StyledBottomNavigationAction label="Shuffle" icon={<Shuffle />} />
            <StyledBottomNavigationAction
              label="Previous"
              icon={<SkipPrevious />}
            />
            <StyledBottomNavigationAction
              label={isMobile ? "" : "Play / Pause"}
              icon={value === 2 ? <Pause /> : <PlayArrow />}
            />
            <StyledBottomNavigationAction label="Next" icon={<SkipNext />} />
            <StyledBottomNavigationAction label="Repeat" icon={<Repeat />} />
          </Box>
        </Grid>

        {!isMobile && (
          <Grid item xs={3}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <VolumeUp />
            </Box>
          </Grid>
        )}
      </Grid>
    </StyledBottomNavigation>
  );
}
