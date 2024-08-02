"use client";
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import { useTheme } from "@mui/material/styles";

export default function About() {
  const theme = useTheme();
  return (
    <Box sx={{ p: 3, maxWidth: 1200, margin: "0 auto" }}>
      <Typography variant="h1" gutterBottom>
        About Me
      </Typography>

      <Grid container spacing={4}>
        {/* Who I Am Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
            <Typography variant="h2" gutterBottom>
              Who I Am
            </Typography>
            <Typography variant="body1">
              I&#39;m Amie Morales, a passionate Full-Stack Software Engineer
              based in Austin, Texas. My journey in tech is driven by an
              insatiable curiosity and a love for problem-solving. I thrive on
              challenges and continuously push myself to learn and grow in this
              ever-evolving field.
            </Typography>
          </Paper>
        </Grid>

        {/* My Journey Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
            <Typography variant="h2" gutterBottom>
              My Journey
            </Typography>
            <Typography variant="body1">
              My path to software engineering has been marked by intense
              dedication and rapid growth. After completing a rigorous Software
              Engineering Immersive program at General Assembly, I dove
              headfirst into the startup world. As the sole developer at
              CentralTexas.com during its Techstars accelerator program, and
              later as a co-founder and Software Engineer at Eazl.ai, I&#39;ve
              gained invaluable experience in building and scaling applications
              from the ground up.
            </Typography>
          </Paper>
        </Grid>

        {/* What I Bring to the Table Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h2" gutterBottom>
              What I Bring to the Table
            </Typography>
            <List>
              {[
                "Full-Stack Expertise: Proficient in ReactJS, JavaScript, Node.js, and a variety of front-end and back-end technologies.",
                "AI Integration: Experienced in implementing and working with various AI models, including Gemini, Claude, ChatGPT, and PaLM.",
                "API Development: Skilled in creating custom APIs and integrating third-party APIs like Stripe and WordPress.",
                "Cloud Services: Experienced with Google Cloud Platform (GCP) and Vercel for deployment and hosting.",
                "Rapid Learning and Adaptation: Demonstrated ability to quickly master new technologies and frameworks as needed.",
                "Problem-Solving Mindset: Natural inclination to approach challenges with creativity and persistence.",
                "Entrepreneurial Spirit: Experience in startup environments, comfortable wearing multiple hats and driving projects forward.",
              ].map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CodeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* My Approach Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
            <Typography variant="h2" gutterBottom>
              My Approach
            </Typography>
            <Typography variant="body1">
              I believe in the power of technology to solve real-world problems.
              Whether it&#39;s automating processes, integrating AI to enhance
              user experiences, or building robust and scalable applications,
              I&#39;m always looking for ways to create value through code. I
              approach each project with a blend of creativity and analytical
              thinking, ensuring that the solutions I develop are not just
              functional, but innovative and efficient.
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              At Eazl.ai, I single-handedly built and maintained a prompt
              management app, integrating cutting-edge AI models, developing
              custom APIs, and implementing complex features like subscription
              logic and an AI cost estimator. This experience taught me that
              there&#39;s always a solution to any challenge – it&#39;s just a
              matter of finding the right approach.
            </Typography>
          </Paper>
        </Grid>

        {/* Beyond the Code Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
            <Typography variant="h2" gutterBottom>
              Beyond the Code
            </Typography>
            <Typography variant="body1">
              When I&#39;m not coding, you might find me exploring Austin&#39;s
              vibrant tech scene or contributing to open-source projects. I
              believe in maintaining a healthy work-life balance, which fuels my
              creativity and problem-solving skills in my professional life.
            </Typography>
          </Paper>
        </Grid>

        {/* Let's Connect Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h2" gutterBottom>
              Let&#39;s Connect
            </Typography>
            <Typography variant="body1">
              I&#39;m always excited to take on new challenges and collaborate
              on interesting projects. If you&#39;re looking for a dedicated,
              adaptable, and innovative software engineer to join your team,
              I&#39;d love to chat.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<EmailIcon />}
              size="large"
              sx={{ mt: 2 }}
            >
              Contact Me
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
