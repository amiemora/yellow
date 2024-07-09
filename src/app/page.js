"use client";

import React from "react";
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
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";

const HeroSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  background: "linear-gradient(to bottom right, #121212, #1E1E1E)",
  color: theme.palette.text.primary,
  textAlign: "center",
}));

const AboutSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const ProjectsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
}));

const ContactSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

export default function Home() {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Avatar
          src="/path/to/profile.jpg"
          alt="Your Name"
          sx={{ width: 120, height: 120, mb: 2 }}
        />
        <Typography variant="h1">Hi, I&#39;m Amie Morales</Typography>

        <Typography variant="h4">
          Full-Stack Developer | Passionate about creating engaging web
          applications
        </Typography>

        <Button variant="contained" color="primary" sx={{ mt: 4 }}>
          View My Work
        </Button>
      </HeroSection>

      {/* About Section */}
      <AboutSection>
        <Container>
          <Typography variant="h2" gutterBottom>
            About Me
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">
                I&#39;m a full-stack developer with a strong focus on creating
                user-friendly and dynamic web applications. I specialize in
                using React, Next.js, and MUI to build responsive and visually
                appealing interfaces. My passion for coding extends beyond just
                writing code; I enjoy solving complex problems and continuously
                learning about new technologies.
              </Typography>
              <Box mt={2}>
                {["React", "Next.js", "JavaScript", "CSS", "HTML"].map(
                  (skill) => (
                    <Chip key={skill} label={skill} sx={{ m: 0.5 }} />
                  )
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src="/path/to/image.jpg"
                alt="About Image"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Grid>
          </Grid>
        </Container>
      </AboutSection>

      {/* Projects Section */}
      <ProjectsSection>
        <Container>
          <Typography variant="h2" gutterBottom>
            Projects
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: "Portfolio Website",
                description:
                  "A personal portfolio website built using Next.js and MUI to showcase my projects and skills.",
                technologies: ["Next.js", "React", "MUI"],
                image: "/path/to/project1.jpg",
                link: "https://github.com/yourusername/portfolio-website",
              },
              {
                title: "E-commerce Platform",
                description:
                  "A fully functional e-commerce platform with user authentication, product listings, and a shopping cart.",
                technologies: ["React", "Node.js", "MongoDB"],
                image: "/path/to/project2.jpg",
                link: "https://github.com/yourusername/ecommerce-platform",
              },
              {
                title: "Weather App",
                description:
                  "A weather forecasting app that provides real-time weather data and forecasts for any location.",
                technologies: ["React", "API Integration", "CSS"],
                image: "/path/to/project3.jpg",
                link: "https://github.com/yourusername/weather-app",
              },
            ].map((project) => (
              <Grid item xs={12} md={4} key={project.title}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography variant="h5">{project.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {project.description}
                    </Typography>
                    <Box mt={2}>
                      {project.technologies.map((tech) => (
                        <Chip key={tech} label={tech} sx={{ m: 0.5 }} />
                      ))}
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2 }}
                      href={project.link}
                      target="_blank"
                    >
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ProjectsSection>

      {/* Contact Section */}
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
                  href="https://github.com/yourusername"
                  target="_blank"
                  color="inherit"
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  color="inherit"
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  href="https://twitter.com/yourusername"
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
    </Box>
  );
}
