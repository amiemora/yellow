"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Link,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { useBreakpoint } from "../context/BreakpointContext";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const ProjectHighlight = ({ title, children }) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {children}
    </CardContent>
  </Card>
);

const PageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const HeroBanner = styled(Box)(({ theme }) => ({
  backgroundImage: `url('/api-hero.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "30vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "white",
  "& h1, & h3": {
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
  },
}));

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
}));

const Api = () => {
  const { isMobile } = useBreakpoint();

  return (
    <PageContainer>
      <HeroBanner>
        <Container maxWidth="lg">
          <Typography variant="h1" gutterBottom>
            Custom Webhook & API Experience
          </Typography>
          <Typography variant="h3">
            Bridging Data Gaps with Innovative Solutions
          </Typography>
        </Container>
      </HeroBanner>

      <Section>
        <Container maxWidth="lg">
          <Typography variant="body1" paragraph>
            In today&#39;s interconnected digital landscape, the ability to
            create custom integrations is paramount. My experience in developing
            bespoke webhooks and APIs demonstrates not just technical
            proficiency, but a keen understanding of business needs and data
            flow optimization.
          </Typography>

          {/* Simulations.net Project */}
          <Grid container spacing={4} mt={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Simulations.net: Real-time Progress Tracking Webhook
              </Typography>
              <Typography variant="h6" gutterBottom>
                Challenge:
              </Typography>
              <Typography variant="body1" paragraph>
                Create a seamless way for companies to monitor employee progress
                through custom onboarding simulations.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Solution:
              </Typography>
              <Typography variant="body1" paragraph>
                I engineered a robust webhook that:
              </Typography>
              <ul>
                <li>Tracks user progress in real-time</li>
                <li>Captures detailed response data for each question</li>
                <li>Enables easy data retrieval for employers</li>
              </ul>

              <Typography variant="h6" gutterBottom>
                Impact:
              </Typography>
              <Typography variant="body1" paragraph>
                This feature revolutionized how companies could assess and
                optimize their onboarding processes, leading to its official
                release and promotion by the CEO.
              </Typography>
              <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                Leveraging Simulations.net Data for Enhanced HubSpot
                Automation... When this data is integrated into HubSpot, the
                potential for marketing automation reaches new heights. - CEO
                announcement, August 24, 2023
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  minHeight: "400px",
                  "& iframe": {
                    width: "100%",
                    height: "100%",
                    minHeight: "400px",
                    border: "none",
                    overflow: "hidden",
                  },
                }}
              >
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7100563083470807041"
                  height="585"
                  width="504"
                  frameborder="0"
                  allowfullscreen=""
                  title="Embedded post"
                ></iframe>
              </Box>
            </Grid>
          </Grid>

          {/* Eazl.ai Project */}
          <Grid container spacing={4} mt={4}>
            <Grid item xs={12} md={6} order={isMobile ? 2 : 1}>
              <Typography variant="h4" gutterBottom>
                Eazl.ai: Custom API for AI-Powered Prompts
              </Typography>
              <Typography variant="h6" gutterBottom>
                Challenge:
              </Typography>
              <Typography variant="body1" paragraph>
                Empower businesses to integrate Eazl.ai&#39;s advanced AI
                prompts directly into their applications.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Solution:
              </Typography>
              <Typography variant="body1" paragraph>
                I designed and implemented a flexible API that allows users to:
              </Typography>
              <ul>
                <li>
                  Set up custom endpoints for their personalized AI prompts
                </li>
                <li>
                  Seamlessly integrate AI capabilities into internal tools
                </li>
                <li>
                  Utilize placeholder systems for dynamic content generation
                </li>
              </ul>
              <ProjectHighlight title="Key Features:">
                <ul>
                  <li>Secure authentication via API keys</li>
                  <li>Simple, RESTful interface</li>
                  <li>Detailed documentation for easy implementation</li>
                </ul>
              </ProjectHighlight>

              <Typography variant="h6" gutterBottom>
                Impact:
              </Typography>
              <Typography variant="body1" paragraph>
                This API opened new avenues for businesses to leverage AI in
                their workflows, from resume scanning to content generation,
                without the need for constant manual interaction with the
                Eazl.ai platform.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} order={isMobile ? 1 : 2}>
              <Image
                src="/pdfss.png"
                alt="Eazl.ai API"
                height="585"
                width="504"
                objectFit="cover"
              />
            </Grid>
          </Grid>

          {/* Why My Experience Matters */}
          <Typography variant="h4" gutterBottom mt={6}>
            Why My Experience Matters
          </Typography>
          <Typography variant="body1" paragraph>
            While my career may be younger than some, my ability to tackle
            complex integration challenges head-on demonstrates a level of
            expertise typically associated with seasoned engineers:
          </Typography>
          <List sx={{ marginLeft: "-1.5rem" }}>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon sx={{ color: "primary.main" }} />
              </ListItemIcon>
              <ListItemText
                primary="Rapid Problem Solving"
                secondary="Both projects required quick adaptation to new technologies and business needs."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon sx={{ color: "primary.main" }} />
              </ListItemIcon>
              <ListItemText
                primary="Full-Stack Proficiency"
                secondary="From backend webhook logic to frontend API documentation, I've handled it all."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon sx={{ color: "primary.main" }} />
              </ListItemIcon>
              <ListItemText
                primary="Business Acumen"
                secondary="My solutions directly addressed critical business needs, showing an understanding beyond just code."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon sx={{ color: "primary.main" }} />
              </ListItemIcon>
              <ListItemText
                primary="Documentation Skills"
                secondary="Clear, concise documentation ensures my work can be easily understood and built upon by others."
              />
            </ListItem>
          </List>

          <Typography variant="body1" paragraph mt={2}>
            In a field where technology evolves rapidly, it&#39;s not just years
            of experience that count, but the ability to innovate, adapt, and
            deliver impactful solutions. My track record shows I can do just
            that, bringing fresh perspectives and cutting-edge skills to any
            team.
          </Typography>

          {/* Call to Action */}
          <Box textAlign="center" mt={4}>
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
          </Box>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default Api;
