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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useBreakpoint } from "./context/BreakpointContext";

const HeroSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
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

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  lazyLoad: "ondemand",
};

const images = [
  "gcp.png",
  "analytics.png",
  "rquery.png",
  "react.png",
  "api.png",
  "webhook.png",
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
  width: "500px",
  height: "300px",
  objectFit: "cover",
  borderRadius: "8px",
  margin: "0 auto",
};

export default function Home() {
  const theme = useTheme();
  const { isMobile } = useBreakpoint();

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

      {/* About Section */}
      <AboutSection>
        <Container>
          {/* <Typography variant="h2" gutterBottom>
            About Me
          </Typography> */}
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5">
                Experienced and highly motivated Full-Stack Software Engineer
                with a passion for leveraging AI to build innovative web
                applications. Proficient in ReactJS, JavaScript, Node.js, and
                integrating AI models like Gemini, Claude, and ChatGPT. Skilled
                in API development, automation, and infrastructure planning on
                platforms like GCP and Vercel. Proven ability to learn quickly,
                work independently, and deliver high-quality solutions.
              </Typography>
              {/* <Box mt={2}>
                {["React", "Next.js", "JavaScript", "CSS", "HTML"].map(
                  (skill) => (
                    <Chip key={skill} label={skill} sx={{ m: 0.5 }} />
                  )
                )}
              </Box> */}
            </Grid>
            <Grid item xs={12} md={6}>
              <Slider {...settings}>
                {images.map((src, index) => (
                  <div key={index}>
                    <img
                      src={src}
                      alt={`Image ${index + 1}`}
                      style={imageStyle}
                    />
                  </div>
                ))}
              </Slider>
            </Grid>
          </Grid>
        </Container>
      </AboutSection>

      {/* Projects Section */}
      <ProjectsSection>
        <Container>
          <Typography variant="h2" gutterBottom>
            Featured
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: "Startup Accelerator Experience",
                description:
                  "A personal portfolio website built using Next.js and MUI to showcase my projects and skills.",
                technologies: ["Next.js", "React", "MUI"],
                image: "techstars.png",
                link: "https://github.com/yourusername/portfolio-website",
              },
              {
                title: "Custom API and Webhook Experience",
                description:
                  "A fully functional e-commerce platform with user authentication, product listings, and a shopping cart.",
                technologies: ["React", "Node.js", "MongoDB"],
                image: "/path/to/project2.jpg",
                link: "https://github.com/yourusername/ecommerce-platform",
              },
              {
                title: "Cofounded a Prompt Management App",
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
