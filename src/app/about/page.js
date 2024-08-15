"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import { useBreakpoint } from "../context/BreakpointContext";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

const PageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const HeroBanner = styled(Box)(({ theme }) => ({
  backgroundImage: `url('/about-hero.jpg')`, // Replace with a relevant image for your About page
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "40vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "white",
  "& h1": {
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
  },
}));

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
}));

const About = () => {
  const theme = useTheme();
  const { isMobile, isTablet, isDesktop } = useBreakpoint();

  return (
    <PageContainer>
      {/* Hero Banner */}
      <HeroBanner>
        <Container maxWidth="lg">
          <Typography variant="h1" gutterBottom>
            About Me
          </Typography>
        </Container>
      </HeroBanner>

      {/* Who I Am Section */}
      <Section>
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom>
            Who I Am
          </Typography>
          <Typography variant="body1" paragraph>
            I&#39;m Amie Morales, a passionate Full-Stack Software Engineer
            based in Austin, Texas. My journey in tech is driven by an
            insatiable curiosity and a love for problem-solving. I thrive on
            challenges and continuously push myself to learn and grow in this
            ever-evolving field.
          </Typography>
        </Container>
      </Section>

      {/* My Journey Section */}
      <Section>
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom>
            My Journey
          </Typography>
          <Typography variant="body1" paragraph>
            My path to software engineering has been marked by intense
            dedication and rapid growth. After completing a rigorous Software
            Engineering Immersive program at General Assembly, I dove headfirst
            into the startup world. As the sole developer at CentralTexas.com
            during its Techstars accelerator program, and later as a co-founder
            and Software Engineer at Eazl.ai, I&#39;ve gained invaluable
            experience in building and scaling applications from the ground up.
          </Typography>
        </Container>
      </Section>

      {/* What I Bring to the Table Section */}
      <Section>
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom>
            What I Bring to the Table
          </Typography>
          <Grid container spacing={4}>
            {[
              "Full-Stack Expertise: Proficient in ReactJS, JavaScript, Node.js, and a variety of front-end and back-end technologies.",
              "AI Integration: Experienced in implementing and working with various AI models, including Gemini, Claude, ChatGPT, and PaLM.",
              "API Development: Skilled in creating custom APIs and integrating third-party APIs like Stripe and WordPress.",
              "Cloud Services: Experienced with Google Cloud Platform (GCP) and Vercel for deployment and hosting.",
              "Rapid Learning and Adaptation: Demonstrated ability to quickly master new technologies and frameworks as needed.",
              "Problem-Solving Mindset: Natural inclination to approach challenges with creativity and persistence.",
              "Entrepreneurial Spirit: Experience in startup environments, comfortable wearing multiple hats and driving projects forward.",
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
                  <Typography variant="h5" gutterBottom>
                    {item.split(":")[0]}
                  </Typography>
                  <Typography variant="body1">{item.split(":")[1]}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* My Approach Section */}
      <Section>
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom>
            My Approach
          </Typography>
          <Typography variant="body1" paragraph>
            I believe in the power of technology to solve real-world problems.
            Whether it&#39;s automating processes, integrating AI to enhance
            user experiences, or building robust and scalable applications,
            I&#39;m always looking for ways to create value through code. I
            approach each project with a blend of creativity and analytical
            thinking, ensuring that the solutions I develop are not just
            functional, but innovative and efficient.
          </Typography>
          <Typography variant="body1" paragraph>
            At Eazl.ai, I single-handedly built and maintained a prompt
            management app, integrating cutting-edge AI models, developing
            custom APIs, and implementing complex features like subscription
            logic and an AI cost estimator. This experience taught me that
            there&#39;s always a solution to any challenge – it&#39;s just a
            matter of finding the right approach.
          </Typography>
        </Container>
      </Section>

      {/* Beyond the Code Section */}
      <Section>
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom>
            Beyond the Code
          </Typography>
          <Typography variant="body1" paragraph>
            Outside of coding, I&#39;m a creative soul with a passion for music,
            photography, and outdoor adventures. I enjoy capturing moments
            through my lens, exploring new hiking trails, and diving into the
            world of music production. My diverse interests fuel my creativity
            and provide a well-rounded perspective that I bring into my work.
          </Typography>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section textAlign="center">
        {/* Call to Action */}

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
    </PageContainer>
  );
};

export default About;
