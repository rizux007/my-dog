import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { appLogo } from "../utils/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box sx={{ bgcolor: "#000", color: "white", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              {appLogo}
            </Typography>
            <Typography variant="body2">
              © {currentYear} {appLogo}. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Links
            </Typography>
            <Link href="#" color="inherit" underline="none">
              Home
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              About
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Contact
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Link href="#" color="inherit" underline="none">
                <Facebook />
              </Link>
              <Link href="#" color="inherit" underline="none">
                <Twitter />
              </Link>
              <Link href="#" color="inherit" underline="none">
                <Instagram />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Grid></Grid>
      </Container>
    </Box>
  );
};

export default Footer;
