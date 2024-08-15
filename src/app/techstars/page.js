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
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import {
  Diversity3,
  GitHub,
  Handshake,
  Instagram,
  LinkedIn,
  Yard,
  Speed,
  Mentors,
  ChangeCircle,
  BusinessCenter,
  PeopleAlt,
  Groups,
  Bolt,
  Reorder,
  PointOfSale,
  DesignServices,
  Storage,
  Expand,
  MonetizationOn,
  PersonAdd,
  Psychology,
  Tty,
  CheckCircleOutline, // For Networking
} from "@mui/icons-material";
import YouTube from "react-youtube";
import { useBreakpoint } from "../context/BreakpointContext";

// SkillCard component (for reusability)
import SvgIcon from "@mui/material/SvgIcon"; // Import for styling SVG icons

export const SkillCard = ({ icon: Icon, title, description }) => (
  <Card sx={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>
    <CardContent sx={{ flexGrow: 1, padding: 2 }}>
      <Box display="flex" alignItems="center" mb={1}>
        <SvgIcon
          component={Icon}
          sx={{ color: "primary.main", fontSize: 40 }}
        />
        <Typography variant="h6" ml={2}>
          {title}
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ lineHeight: 1.5 }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const PageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const HeroBanner = styled(Box)(({ theme }) => ({
  backgroundImage: `url('/techstars-hero.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "40vh",
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
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4, 1), // Reduce padding on smaller screens
  },
}));

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
    start: 1688, // Start time at 30:49 (1849 seconds)
    end: 1893, // End time (adjust if needed)
  },
};

const Techstars = () => {
  const theme = useTheme();
  const { isMobile, isTablet, isDesktop } = useBreakpoint();
  return (
    <PageContainer>
      {/* Hero Banner */}
      <HeroBanner>
        <Container maxWidth="lg">
          <Typography variant="h1" gutterBottom>
            Techstars Accelerator Experience
          </Typography>
          <Typography variant="h3">
            Accelerated Growth. Intense Learning. Real-World Impact.
          </Typography>
        </Container>
      </HeroBanner>

      <Section sx={{ mb: isMobile ? 2 : 4 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom sx={{ marginBottom: 2 }}>
            Our Techstars Demo Day Pitch
          </Typography>
          <Box display="flex" justifyContent="center">
            {" "}
            <YouTube
              videoId="WA1eEf5EAaE"
              opts={{
                ...opts,
                width: isMobile ? "100%" : opts.width, // Full width on mobile
                height: isMobile ? "250px" : opts.height, // Adjust height for mobile
              }}
            />
          </Box>
        </Container>
      </Section>

      <Section>
        {" "}
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom sx={{ marginBottom: 2 }}>
            Technical Expertise Forged in the Fire
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <SkillCard
                icon={Bolt}
                title="Rapid Skill Acquisition"
                description="Mastered Next.js, React Query, and MUI within days, seamlessly integrating into the existing codebase."
              />
            </Grid>
            {/* Add more SkillCards for your other achievements */}
            <Grid item xs={12} sm={6} md={4}>
              <SkillCard
                icon={Reorder}
                title="Full-Stack Development"
                description="Implemented critical features including subscription tiers, Google Analytics integration, and automated CRM systems."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <SkillCard
                icon={PointOfSale}
                title="Payment Integration"
                description="Spearheaded the implementation of Stripe's subscription service for membership and advertising infrastructure."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <SkillCard
                icon={DesignServices}
                title="UI/UX Implementation"
                description="Created new pages and features, working closely with the design team to ensure pixel-perfect implementation of mockups."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <SkillCard
                icon={Storage}
                title="Database Managment"
                description="Designed and executed complex queries and mutations for both database and client-side operations."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <SkillCard
                icon={Expand}
                title="Continuous Learning"
                description="Rapidly acquired new skills in Google Apps Script and other technologies as project needs evolved."
              />
            </Grid>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom sx={{ marginBottom: 2 }}>
            Why This Experience Sets Me Apart
          </Typography>
          <Typography variant="h6" paragraph sx={{ marginBottom: 2 }}>
            The Techstars accelerator instilled in me a unique set of skills and
            perspectives that go beyond traditional development roles:
          </Typography>

          {/* Highlight 2-3 Key Takeaways - Be Specific and Quantify When Possible */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <SkillCard
                icon={Psychology}
                title="Startup Mindset"
                description="I understand the lean startup methodology,
                the importance of rapid iteration, and how to prioritize tasks for
                maximum impact in a resource-constrained environment."
              />
            </Grid>
            {/* Add more SkillCards for your other achievements */}
            <Grid item xs={12} sm={6} md={4}>
              <SkillCard
                icon={Tty}
                title="Investor-Ready Communication"
                description="I can effectively communicate
                technical concepts and product vision to both technical and
                non-technical audiences, a skill honed through pitching to
                investors and mentors."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <SkillCard
                icon={Handshake}
                title="Network and Mentorship"
                description="I'm now part of a global network of
                successful founders and mentors, providing me with ongoing
                learning and collaboration opportunities."
              />
            </Grid>
          </Grid>

          <Typography
            variant="h6"
            paragraph
            sx={{ marginBottom: 2, pt: 5, pb: 2 }}
          >
            The Techstars accelerator wasn&#39;t just about learning—it was
            about proving myself in a high-stakes startup environment. In just
            three months, I went from newcomer to key contributor, directly
            impacting CentralTexas.com&#39;s success.
          </Typography>

          <Grid container spacing={2}>
            {[
              "Preparing products for investor presentations and market launch",
              "Directly contributing to a company's growth trajectory",
              "Thriving under extreme pressure and tight deadlines",
              "Honing skills in rapid prototyping and iterative development",
              "Gaining invaluable exposure to startup methodologies and investor expectations",
            ].map((skill, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2, // Padding inside the Card
                    mb: 1, // Margin between Cards
                    "&:hover": {
                      boxShadow: 5, // Add a subtle hover effect (optional)
                    },
                  }}
                >
                  <CheckCircleOutline
                    sx={{
                      color: "primary.main",
                      mr: 2,
                      fontSize: "1.5rem", // Adjust icon size as needed
                    }}
                  />
                  <Typography variant="body2">{skill}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h6" paragraph sx={{ marginBottom: 2, pt: 4 }}>
            This accelerator experience showcases my capacity for rapid
            learning, adaptability, and ability to deliver high-quality code in
            a high-stakes startup environment. It demonstrates my readiness to
            contribute significantly to early-stage tech companies and
            fast-paced development teams.
          </Typography>
        </Container>
      </Section>

      <Section>
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom sx={{ marginBottom: 2 }}>
            My 13 Weeks of Accelerated Growth
          </Typography>

          {/* Phase 1: Accelerated Timeline */}
          <Box display="flex" alignItems="center" mb={2}>
            <Speed sx={{ color: theme.palette.primary.main, mr: 2 }} />
            <Typography variant="h5" gutterBottom>
              1. Accelerated Timeline
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            Compressed years of traditional startup growth into just 13 weeks,
            demanding rapid skill acquisition and execution.
          </Typography>

          {/* Phase 2: Mentor Whiplash */}
          <Box display="flex" alignItems="center" mb={2}>
            <Groups sx={{ color: theme.palette.primary.main, mr: 2 }} />
            <Typography variant="h5" gutterBottom>
              2. Mentor Whiplash
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            Engaged with 100+ mentors in the first month, synthesizing diverse
            feedback to refine our product and strategy.
          </Typography>

          {/* Phase 3: Pivots and Iterations */}
          <Box display="flex" alignItems="center" mb={2}>
            <ChangeCircle sx={{ color: theme.palette.primary.main, mr: 2 }} />
            <Typography variant="h5" gutterBottom>
              3. Pivots and Iterations
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            Rapidly adapted our product based on mentor feedback and market
            insights, requiring agile development practices.
          </Typography>

          {/* Phase 4: Investor Readiness */}
          <Box display="flex" alignItems="center" mb={2}>
            <BusinessCenter sx={{ color: theme.palette.primary.main, mr: 2 }} />
            <Typography variant="h5" gutterBottom>
              4. Investor Readiness
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            Prepared technical demonstrations and pitches for Techstars Demo
            Day, effectively communicating our value proposition to potential
            investors.
          </Typography>

          {/* Phase 5: Networking */}
          <Box display="flex" alignItems="center" mb={2}>
            <PeopleAlt sx={{ color: theme.palette.primary.main, mr: 2 }} />
            <Typography variant="h5" gutterBottom>
              5. Networking
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            Collaborated with other startups in our cohort, sharing knowledge
            and resources in a competitive yet supportive environment.
          </Typography>
        </Container>
      </Section>

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
    </PageContainer>
  );
};

export default Techstars;

// {/* <Link href="/" legacyBehavior>
// <IconButton sx={{ mt: 2, mb: 2 }}>
//   {" "}
//   {/* Single child within Link */}
//   <ArrowBackIosNewIcon />
// </IconButton>
// </Link> */}
