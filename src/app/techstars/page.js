"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Card,
  CardMedia,
  CardContent,
  Link,
  Button,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { useBreakpoint } from "../context/BreakpointContext";

// SkillCard component (for reusability)
import SvgIcon from "@mui/material/SvgIcon"; // Import for styling SVG icons

export const SkillCard = ({ icon: Icon, title, description }) => (
  <Card sx={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>
    <CardContent sx={{ flexGrow: 1 }}>
      <Box display="flex" alignItems="center" mb={2}>
        <SvgIcon
          component={Icon}
          sx={{ color: "primary.main", fontSize: 40 }}
        />
        <Typography variant="h6" ml={2}>
          {title}
        </Typography>
      </Box>
      <Typography variant="body1">{description}</Typography>
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
}));

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

      <Section>
        {" "}
        {/* About Techstars */}
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom>
            The Techstars Advantage
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" alignItems="center">
                <Image
                  src="/seed-funding.svg"
                  alt="Seed Funding"
                  width={32}
                  height={32}
                />{" "}
                {/* Replace with an appropriate icon */}
                <Typography variant="body1" ml={1}>
                  Seed funding
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" alignItems="center">
                <Image
                  src="/mentorship.svg"
                  alt="Mentorship"
                  width={32}
                  height={32}
                />{" "}
                {/* Replace with an appropriate icon */}
                <Typography variant="body1" ml={1}>
                  Intensive mentorship
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" alignItems="center">
                <Image
                  src="/network.svg"
                  alt="Network"
                  width={32}
                  height={32}
                />{" "}
                {/* Replace with an appropriate icon */}
                <Typography variant="body1" ml={1}>
                  Access to a vast network
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Section>

      <Section>
        {" "}
        {/* My Journey */}
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom>
            My 13 Weeks of Accelerated Growth
          </Typography>

          {/* Phase 1: Accelerated Timeline */}
          <Typography variant="h5" gutterBottom>
            1. Accelerated Timeline
          </Typography>
          <Typography variant="body1" paragraph>
            Compressed years of traditional startup growth into just 13 weeks,
            demanding rapid skill acquisition and execution.
          </Typography>
          {/* Add content for phases 2, 3 and 4 as well */}
          {/* Phase 2: Mentor Whiplash */}
          <Typography variant="h5" gutterBottom>
            2. Mentor Whiplash
          </Typography>
          <Typography variant="body1" paragraph>
            Engaged with 100+ mentors in the first month, synthesizing diverse
            feedback to refine our product and strategy.
          </Typography>

          {/* Phase 3: Pivots and Iterations */}
          <Typography variant="h5" gutterBottom>
            3. Pivots and Iterations
          </Typography>
          <Typography variant="body1" paragraph>
            Rapidly adapted our product based on mentor feedback and market
            insights, requiring agile development practices.
          </Typography>

          {/* Phase 4: Investor Readiness */}
          <Typography variant="h5" gutterBottom>
            4. Investor Readiness
          </Typography>
          <Typography variant="body1" paragraph>
            Prepared technical demonstrations and pitches for Techstars Demo
            Day, effectively communicating our value proposition to potential
            investors.
          </Typography>

          {/* Phase 5: Networking */}
          <Typography variant="h5" gutterBottom>
            5. Networking
          </Typography>
          <Typography variant="body1" paragraph>
            Collaborated with other startups in our cohort, sharing knowledge
            and resources in a competitive yet supportive environment.
          </Typography>
        </Container>
      </Section>

      <Section>
        {" "}
        {/* Key Technical Achievements (Using Skill Cards) */}
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom>
            Technical Expertise Forged in the Fire
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <SkillCard
                // icon={CodeIcon} // Example icon
                title="Rapid Skill Acquisition"
                description="Mastered Next.js, React Query, and MUI within days, seamlessly integrating into the existing codebase."
              />
            </Grid>
            {/* Add more SkillCards for your other achievements */}
            <Grid item xs={12} sm={6} md={4}>
              <SkillCard
                // icon={CodeIcon} // Example icon
                title="Full-Stack Development"
                description="Implemented critical features including subscription tiers, Google Analytics integration, and automated CRM systems."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <SkillCard
                // icon={CodeIcon} // Example icon
                title="Payment Integration"
                description="Spearheaded the implementation of Stripe's subscription service for membership and advertising infrastructure."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <SkillCard
                // icon={CodeIcon} // Example icon
                title="UI/UX Implementation"
                description="Created new pages and features, working closely with the design team to ensure pixel-perfect implementation of mockups."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <SkillCard
                // icon={CodeIcon} // Example icon
                title="Database Managment"
                description="Designed and executed complex queries and mutations for both database and client-side operations."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <SkillCard
                // icon={CodeIcon} // Example icon
                title="Continuous Learning"
                description="Rapidly acquired new skills in Google Apps Script and other technologies as project needs evolved"
              />
            </Grid>
          </Grid>
        </Container>
      </Section>

      <Section>
        {" "}
        {/* Impact and Outcomes */}
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom>
            Delivering Results in a High-Stakes Environment
          </Typography>
          <Typography variant="body1" paragraph>
            The Techstars experience accelerated my professional growth
            exponentially. In just three months, I transformed from a promising
            newcomer to a key player in the startup&#39;s success. My
            contributions were instrumental in:
          </Typography>
          <ul>
            <li>
              Preparing our product for investor presentations and market launch
            </li>
            <li>
              Directly contributing to the company&#39;s growth and potential
              for future funding
            </li>
            <li>
              Developing the ability to thrive under extreme pressure and tight
              deadlines
            </li>
            <li>
              Honing skills in rapid prototyping and iterative development
            </li>
            <li>
              Gaining invaluable exposure to startup methodologies and investor
              expectations
            </li>
          </ul>
          <Typography variant="body1" paragraph>
            This accelerator experience showcases my capacity for rapid
            learning, adaptability, and ability to deliver high-quality code in
            a high-stakes startup environment. It demonstrates my readiness to
            contribute significantly to early-stage tech companies and
            fast-paced development teams.
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
          Let's Connect
        </Button>
        <Box mt={2} display="flex" justifyContent="center">
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
      </Section>
    </PageContainer>
    // <Box sx={{ p: 3, maxWidth: 1200, margin: "0 auto" }}>
    //   <Typography variant="h2" gutterBottom>
    //     Startup Accelerator Experience: Techstars
    //   </Typography>

    //   <Grid container spacing={4} direction={"row"}>
    //     <Grid item xs={12} md={6}>
    //       <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
    //         <Typography variant="h6">
    //           Techstars is a globally renowned startup accelerator that provides
    //           early-stage companies with:
    //         </Typography>
    //         <List>
    //           {[
    //             "Seed funding",
    //             "Intensive mentorship",
    //             "Access to a vast network of industry experts and investors",
    //             "A rigorous 3-month program culminating in a high-stakes Demo Day",
    //           ].map((item, index) => (
    //             <ListItem key={index}>
    //               <ListItemIcon>
    //                 <DataArray />
    //               </ListItemIcon>
    //               <ListItemText primary={item} />
    //             </ListItem>
    //           ))}
    //         </List>
    //       </Paper>
    //     </Grid>

    //     <Grid item xs={12} md={6}>
    //       <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
    //         <Typography variant="h6">
    //           As the sole software engineer for CentralTexas.com during its
    //           participation in the prestigious Techstars accelerator program, I
    //           thrived in one of the most intense and transformative environments
    //           in the startup world.
    //         </Typography>
    //       </Paper>
    //     </Grid>
    //   </Grid>
    // </Box>
    // <Box sx={{ p: 3, maxWidth: 1200, margin: "0 auto" }}>

    // </Box>
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
