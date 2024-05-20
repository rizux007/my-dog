import { Box, Typography, Grid } from "@mui/material";
import { appLogo } from "../utils/constants";

const AboutPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={10} md={8} lg={6}>
          <Box textAlign="center" p={3}>
            <Typography variant="h3" gutterBottom>
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
            <Typography variant="body1" paragraph>
              Chez nous, nous croyons en la connexion spéciale qui existe entre
              les humains et les chiens. Notre mission est de faciliter cette
              connexion en aidant les propriétaires potentiels à trouver le
              chien parfait pour leur famille, tout en offrant des services de
              croisement pour améliorer les caractéristiques désirées.
            </Typography>
            <Typography variant="body1" paragraph>
              Notre équipe est composée d'experts passionnés par les chiens,
              prêts à vous guider tout au long du processus de sélection et de
              croisement. Que vous recherchiez un compagnon fidèle ou que vous
              souhaitiez améliorer la lignée de votre chien, nous sommes là pour
              vous aider.
            </Typography>
            <Typography variant="body1">
              Explorez notre site pour découvrir nos services et nos chiens
              disponibles. Nous sommes impatients de vous aider à trouver le
              compagnon canin parfait pour vous.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutPage;
