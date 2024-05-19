import {
  Box,
  CssBaseline,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const Products = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "grey.100" }}>
        <CssBaseline />
        <Typography variant="h3" align="center" sx={{ my: 10 }}>
          Maestro
        </Typography>
        <Grid container spacing={7} p={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/150"
                alt="Image Placeholder"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Titre de l'image
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description de l'image. Ceci est une brève description qui se
                  trouve à côté de l'image.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/150"
                alt="Image Placeholder"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Titre de l'image
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description de l'image. Ceci est une brève description qui se
                  trouve à côté de l'image.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/150"
                alt="Image Placeholder"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Titre de l'image
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description de l'image. Ceci est une brève description qui se
                  trouve à côté de l'image.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/150"
                alt="Image Placeholder"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Titre de l'image
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description de l'image. Ceci est une brève description qui se
                  trouve à côté de l'image.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/150"
                alt="Image Placeholder"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Titre de l'image
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description de l'image. Ceci est une brève description qui se
                  trouve à côté de l'image.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/150"
                alt="Image Placeholder"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Titre de l'image
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description de l'image. Ceci est une brève description qui se
                  trouve à côté de l'image.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Products;
