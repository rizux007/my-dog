import { useEffect, useState } from "react";
import { Error, Loading } from "../components";
import { useGetProductByNameQuery } from "../services/product";
import { SingleProductResponse } from "../types/types";
import { useParams } from "react-router-dom";
import { Box, Typography, Grid } from "@mui/material";
import NotAvailable from "../assets/notAvailable.jpg";

const SingleProduct = () => {
  const { id } = useParams();
  const productId = parseInt(id || "");
  const { data, isError, isLoading, isSuccess } =
    useGetProductByNameQuery(productId);
  const [singleProduct, setSingleProduct] = useState<SingleProductResponse>();

  useEffect(() => {
    if (isSuccess) {
      setSingleProduct(data);
    }
  }, [data, isError, isSuccess, productId]);

  if (isError) {
    return <Error />;
  }
  if (isLoading) {
    return <Loading />;
  }

  if (singleProduct) {
    const product = singleProduct;

    return (
      <Box
        sx={{ p: 3 }}
        my={15}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              // src={product.image || NotAvailable}
              src={NotAvailable}
              alt={product.name}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={6} sm={4}>
            <Typography variant="h3" my={3} gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Groupe de race:</strong> {product.breed_group}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Origine:</strong> {product.origin}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Couleurs disponibles:</strong> {product.colors.join(", ")}
            </Typography>

            <Typography variant="body1" gutterBottom>
              <strong>Durée de vie:</strong> {product.lifespan}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Description:</strong> {product.description}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Taille:</strong> {product.size}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Temperament:</strong> {product.temperament}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
  }
};

export default SingleProduct;
