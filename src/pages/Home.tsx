import {
  Box,
  CssBaseline,
  Typography,
  Container,
  Button,
  Grid,
} from "@mui/material";
import Allemand from "../assets/allemand.jpg";
import crossing from "../assets/crossing.jpeg";
import { Link } from "react-router-dom";
import { appLogo } from "../utils/constants";
import Mentions from "../components/Mentions";

const Home = () => {
  return (
    <>
      {/* <Box sx={{ backgroundColor: "grey.100" }} m={20}> */}
      <Box
        sx={{ backgroundColor: "grey.100" }}
        px={{ xs: 10, sm: 3, md: 20 }}
        py={5}
        component="main"
      >
        <CssBaseline />
        <Container maxWidth="lg">
          <Box
            height="100vh"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
          >
            <Typography variant="h2" gutterBottom>
              Bienvenue chez{" "}
              <Box
                component="span"
                bgcolor="text.primary"
                borderRadius={3}
                fontFamily="Montez"
                color="white"
                p={1}
                display="inline-block"
                flexWrap="nowrap"
              >
                {appLogo}
              </Box>
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              La meilleure plateforme pour la vente et le croisement de chiens
              de race
            </Typography>
            <Typography variant="body1" paragraph>
              Chez My dog, nous sommes passionnés par les chiens et nous nous
              engageons à fournir les meilleurs services pour les amateurs de
              chiens de race. Que vous cherchiez à acheter un nouveau compagnon
              ou à croiser votre chien, nous sommes là pour vous aider.
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h3" component="h3">
              La famille autrement
            </Typography>
            <Box component="div" display="flex" justifyContent="center" my={3}>
              <Box border={2} borderRadius={5} width="25%"></Box>
            </Box>
          </Box>
          <Box my={14}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Box textAlign="center">
                  <img
                    src={Allemand}
                    alt="Chiots adorables"
                    style={{ maxWidth: "100%", height: "70%", width: "70%" }}
                  />
                  <Typography variant="h6" component="h3" gutterBottom>
                    Vente de Chiots
                  </Typography>
                  <Typography variant="body1">
                    Explorez notre sélection de chiots de race pure, élevés avec
                    amour et soin. Tous nos chiots sont en bonne santé, vaccinés
                    et prêts à rejoindre leur nouvelle famille.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box textAlign="center">
                  <img
                    src={crossing}
                    alt="Croisement de chiens"
                    style={{ maxWidth: "100%", height: "70%", width: "70%" }}
                  />
                  <Typography variant="h6" component="h3" gutterBottom>
                    Services de Croisement
                  </Typography>
                  <Typography variant="body1">
                    Nos services de croisement garantissent une lignée de haute
                    qualité, viable et en bonne santé. Faites confiance à notre
                    expertise pour trouver le partenaire idéal pour votre chien
                    pour assuré leur pérénité.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box
            my={2}
            display="flex"
            mx={20}
            justifyContent="center"
            alignItems="center"
          >
            <Button variant="contained" sx={{ backgroundColor: "#000" }}>
              <Link
                to="/products"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Découvrez nos races de chiens
              </Link>
            </Button>
          </Box>
        </Container>
      </Box>
      <Mentions />
    </>
  );
};

export default Home;
