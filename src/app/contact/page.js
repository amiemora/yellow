"use client";
import React, { useState } from "react";
import {
  Button,
  Box,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import axios from "axios";

const ContactSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const Contact = () => {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/contact-api", formData);
      if (response.status === 200) {
        alert("Message sent successfully");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      alert("Failed to send message");
    }
  };

  return (
    <ContactSection>
      <Container>
        <Typography variant="h2" gutterBottom>
          Contact
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                multiline
                rows={4}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Send Message
              </Button>
            </form>
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
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ContactSection>
  );
};

export default Contact;
