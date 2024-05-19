import { Box, Container, Grid, Paper, Typography, Avatar } from "@mui/material";
import { reviews } from "../utils/constants";

const Mentions = () => {
  return (
    <Box sx={{ py: 5, bgcolor: "grey.200" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          my={7}
          component="h2"
          gutterBottom
          textAlign="center"
        >
          Ce que nos utilisateurs disent
        </Typography>
        <Grid container spacing={4}>
          {reviews.map((review) => (
            <Grid item xs={12} md={4} key={review.id}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: "100%",
                  textAlign: "center",
                  borderRadius: "20px",
                }}
              >
                <Avatar
                  src={review.image}
                  alt={review.name}
                  sx={{
                    width: 80,
                    height: 80,
                    mx: "auto",
                    my: 2,
                    boxShadow: "3px 3px 7px rgba(0,0,0,0.5)",
                    borderColor: "",
                  }}
                />
                <Typography variant="h6" component="h3" gutterBottom>
                  {review.name}
                </Typography>
                <Typography variant="body1">{review.mention}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Mentions;
