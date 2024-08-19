"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Button,
  Link,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import {
  CheckCircleOutline,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { useBreakpoint } from "../context/BreakpointContext";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const PageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const HeroBanner = styled(Box)(({ theme }) => ({
  backgroundImage: `url('/eazl-hero.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "30vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "white",
  padding: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    height: "20vh", // Adjust height for smaller screens
    padding: theme.spacing(2),
  },
  "& h1": {
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
    // fontSize: theme.typography.h3.fontSize, // Adjust font size for responsiveness
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
  "& h3": {
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
    fontSize: theme.typography.h5.fontSize,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
}));

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4, 1),
  },
}));

const SkillHighlight = ({ skill }) => (
  <Grid item xs={12} sm={6} md={4} key={skill}>
    <Typography
      variant="body1"
      sx={{
        fontWeight: 500,
        display: "flex",
        alignItems: "center",
        "& svg": {
          mr: 1,
          fontSize: "1.2rem",
        },
      }}
    >
      <CheckCircleOutline sx={{ color: "primary.main" }} /> {/* Add icon */}
      {skill}
    </Typography>
  </Grid>
);

const Eazl = () => {
  const { isMobile } = useBreakpoint();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const achievementData = [
    {
      primary: "Full-Stack Development",
      secondary:
        "Single-handedly built and maintained the entire application, from front-end to back-end, demonstrating proficiency across the entire development stack.",
    },
    {
      primary: "Rapid Learning and Adaptation",
      secondary:
        "Quickly mastered and implemented cutting-edge AI technologies, including integration of multiple AI models (PaLM, Gemini) within days of their release.",
    },
    {
      primary: "Infrastructure and DevOps",
      secondary:
        "Set up and managed the entire infrastructure, including domain configuration, GitHub repository management, and deployment on Vercel, showcasing strong DevOps skills.",
    },
    {
      primary: "AI Integration and Innovation",
      secondary:
        "Developed an AI cost estimator, implemented multi-file prompt processing, and created AI-driven content generation for the app's blog, demonstrating creative problem-solving and AI expertise.",
    },
    {
      primary: "API Development",
      secondary:
        "Designed and implemented a custom API for external prompt usage, complete with documentation, showcasing ability to create developer-friendly tools.",
    },
    {
      primary: "Performance Optimization",
      secondary:
        "Implemented innovative solutions like custom scroll handling and efficient state management using React Query, demonstrating attention to user experience and application performance.",
    },
    {
      primary: "Automated Workflows",
      secondary:
        "Created various automations using Google Sheets, Google Forms, and Google App Scripts, showcasing ability to streamline business processes.",
    },
    {
      primary: "SEO and Content Management",
      secondary:
        "Integrated a headless CMS (WordPress) with custom PHP modifications and automated blog post generation, demonstrating full-stack capabilities and SEO awareness.",
    },
  ];

  const takeawayData = [
    "Ability to rapidly learn and implement new technologies",
    "Strong problem-solving skills in high-pressure environments",
    "Expertise in AI integration and prompt engineering",
    "Proficiency in full-stack JavaScript development",
    "Experience with modern cloud infrastructure and DevOps practices",
    "Skill in translating business requirements into technical solutions",
  ];

  return (
    <PageContainer>
      <HeroBanner>
        <Container maxWidth="lg">
          <Typography variant="h1" gutterBottom>
            Building Innovative Solutions with AI
          </Typography>
        </Container>
      </HeroBanner>

      <Section>
        <Container maxWidth="lg">
          <Typography variant="body1" paragraph>
            As cofounder and lead software engineer of Eazl.ai, I spearheaded
            the development of an innovative prompt management application from
            concept to launch, showcasing my ability to rapidly adapt to
            emerging technologies and deliver a full-stack solution in a
            fast-paced startup environment.
          </Typography>

          <Typography variant="h4" gutterBottom mt={4}>
            Key Achievements:
          </Typography>
          <Grid container spacing={isSmallScreen ? 2 : 4}>
            {achievementData.map((achievement, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    mb: 2,
                    transition: "box-shadow 0.3s ease",
                    "&:hover": {
                      boxShadow: 5,
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      <CheckCircleOutlineIcon
                        sx={{ color: "primary.main", mr: 1 }}
                      />
                      {achievement.primary}
                    </Typography>
                    <Typography variant="body2">
                      {achievement.secondary}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h4" gutterBottom mt={6}>
            Technical Skills Demonstrated:
          </Typography>
          <Grid container spacing={2}>
            {[
              "Front-End: React.js, Next.js, MUI, React Query",
              "Back-End: Node.js, Google Cloud Functions, Firebase",
              "DevOps: Vercel, GitHub Actions, GCP",
              "AI Integration: Multiple AI model APIs, custom implementations",
              "APIs: REST API design and implementation, Webhooks",
              "CMS: WordPress, WP Engine, Custom PHP",
              "Automation: Google Apps Script, Cloud Functions",
              "Database: Firebase Firestore",
              "Payment Integration: Stripe API",
            ].map((skill) => (
              <SkillHighlight key={skill} skill={skill} />
            ))}
          </Grid>

          {/* Impact and Growth Section */}
          <Typography variant="h4" gutterBottom mt={6}>
            Impact and Growth:
          </Typography>
          <Typography variant="body1" paragraph>
            This experience transformed me from a promising developer into a
            versatile full-stack engineer capable of building and managing
            complex applications. Key takeaways include:
          </Typography>
          <Grid container spacing={2}>
            {takeawayData.map((takeaway, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 400,
                    display: "flex",
                    alignItems: "center",
                    "& svg": {
                      mr: 1,
                      fontSize: "1.2rem",
                    },
                  }}
                >
                  <CheckCircleOutlineIcon sx={{ color: "primary.main" }} />
                  {takeaway}
                </Typography>
              </Grid>
            ))}
          </Grid>

          <Typography variant="body1" paragraph mt={2}>
            My journey with Eazl.ai demonstrates my capacity to take on
            significant responsibilities, learn quickly, and deliver
            high-quality results in a startup environment. It showcases my
            readiness to contribute meaningfully to innovative projects and
            tackle complex technical challenges.
          </Typography>

          <Section>
            <Container maxWidth="lg">
              <Typography variant="h4" gutterBottom>
                Featured LinkedIn Post
              </Typography>
              <Box
                display="flex"
                justifyContent="center"
                my={4}
                sx={{
                  "& iframe": {
                    maxWidth: "100%",
                    border: "none",
                  },
                }}
              >
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7123416580201295873"
                  height="739"
                  width="504"
                  title="Embedded LinkedIn post"
                  allowFullScreen
                />
              </Box>
            </Container>
          </Section>

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

export default Eazl;
