"use client";
import React from "react";
import {
  Button,
  Box,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

const Contact = () => {
  const theme = useTheme();
  const ContactSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(8, 2),
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  }));

  return (
    <ContactSection>
      <Container>
        <Typography variant="h2" gutterBottom>
          Contact
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Name" margin="normal" />
            <TextField fullWidth label="Email" margin="normal" />
            <TextField fullWidth label="Subject" margin="normal" />
            <TextField
              fullWidth
              label="Message"
              margin="normal"
              multiline
              rows={4}
            />
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Send Message
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <IconButton
                href="https://github.com/amiemora"
                target="_blank"
                color="inherit"
              >
                <GitHub />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/amie-morales-101b38223/"
                target="_blank"
                color="inherit"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/fullstackamie/"
                target="_blank"
                color="inherit"
              >
                <Twitter />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ContactSection>
  );
};

export default Contact;
