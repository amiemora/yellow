"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Avatar,
  Chip,
  Card,
  CardMedia,
  CardContent,
  TextField,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useBreakpoint } from "./context/BreakpointContext";

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
}));

const HeroSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "40vh",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  textAlign: "center",
}));

const AboutSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
}));

const ProjectsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const ContactSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const settings = {
  dots: true,
  infinite: true,
  speed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  // lazyLoad: "ondemand",
  CssEase: "linear",
};

const images = [
  "gcp.png",
  "analytics.png",
  "rquery.png",
  "react.png",
  "vercel.png",
  "namecheap.png",
  "next.png",
  "node.png",
  "express.png",
  "nuxt.png",
  "firebase.png",
  "mongo.png",
  "post.png",
  "micro.png",
  "MUI.png",
  "boot.png",
  "tailwind.png",
  "wordpress.png",
  "stripe.png",
  "openai.png",
  "claude.png",
  "gemini.png",
  "sendgrid.png",
  "rebrandly.png",
  "intuit.png",
  "maps.png",
  "spotify.png",
  // Add more images here
];

const imageStyle = {
  width: "90%",
  height: "150px", // Reduced height for smaller images
  objectFit: "contain", // Changed to 'contain' to ensure full image is visible
  borderRadius: "8px",
  margin: "0 auto",
};

const Home = () => {
  const theme = useTheme();
  const { isMobile, isTablet, isDesktop } = useBreakpoint();

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Avatar
          src="amie.png"
          alt="Your Name"
          sx={{ width: 200, height: 200, mb: 2 }}
        />
        <Typography variant="h1">Hi, I&#39;m Amie Morales</Typography>

        <Typography variant="h4">
          Innovative Full-Stack Developer Specializing in API Integrations
        </Typography>

        {/* <Chip color="primary" label="View My Work" /> */}
      </HeroSection>

      {/* Projects Section */}
      <ProjectsSection>
        <Container>
          <Box pb={2}>
            <Typography variant="h2" gutterBottom>
              Featured
            </Typography>
          </Box>
          <Grid container spacing={4} direction={isTablet ? "column" : "row"}>
            {[
              {
                title: "Startup Accelerator Experience",
                description:
                  "A personal portfolio website built using Next.js and MUI to showcase my projects and skills.",
                technologies: ["Next.js", "React", "MUI"],
                image: "techstars.png",
                label: "techstars",
                route: "/techstars",
              },
              {
                title: "Cofounded a Prompt Management App",
                description:
                  "A weather forecasting app that provides real-time weather data and forecasts for any location.",
                technologies: ["React", "API Integration", "CSS"],
                image: "eazl.png",
                label: "eazl",
                route: "/eazl",
              },
              {
                title: "Custom API and Webhook Experience",
                description:
                  "A fully functional e-commerce platform with user authentication, product listings, and a shopping cart.",
                technologies: ["React", "Node.js", "MongoDB"],
                image: "apireq.png",
                label: "api",
                route: "/api",
              },
            ].map((project) => (
              <Grid item xs={12} md={isTablet ? 12 : 4} key={project.title}>
                <Link key={project.label} href={project.route} passHref>
                  <Card>
                    <CardMedia
                      component="img"
                      height="140"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent>
                      <Typography variant="h5">{project.title}</Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ProjectsSection>

      {/* About Section */}
      <AboutSection>
        <Container>
          <Box pb={3}>
            <Typography variant="h2">Skills</Typography>
          </Box>

          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index}>
                <img src={src} alt={`Image ${index + 1}`} style={imageStyle} />
              </div>
            ))}
          </Slider>
        </Container>
      </AboutSection>

      {/* Call to Action */}
      <Section textAlign="center">
        <Button
          variant="contained"
          color="primary"
          component={Link}
          href="/contact"
        >
          Let&#39;s Connect
        </Button>
        <Box mt={2} display="flex" justifyContent="center">
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
      </Section>

      {/* Contact Section */}
      {/* <ContactSection>
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
      </ContactSection> */}
    </Box>
  );
};

export default Home;
