import {
  Box,
  CssBaseline,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useGetProductsByNameQuery } from "../services/products";
import { Error, Loading } from "../components";
import { useEffect, useState } from "react";
import { ProductResponse } from "../types/types";
import { Link } from "react-router-dom";
import NotAvailable from "../assets/notAvailable.jpg";

const Products = () => {
  const { data, isLoading, isError, isSuccess } = useGetProductsByNameQuery();

  const [products, setProducts] = useState<ProductResponse[] | undefined>(
    undefined
  );

  useEffect(() => {
    if (isSuccess && data) {
      setProducts(data as unknown as ProductResponse[]); // Ensure data is of type ProductResponse[]
    }
  }, [data, isSuccess]);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  // return (
  //   <Box sx={{ backgroundColor: "grey.100" }}>
  //     <CssBaseline />
  //     <Typography variant="h3" align="center" sx={{ my: 10 }}>
  //       Maestro
  //     </Typography>
  //     <Grid container spacing={7} p={5}>
  //       {products?.map((product: ProductResponse) => (
  //         <Link to={`/products/${product.id}`}>
  //           <Grid item xs={12} sm={6} md={4} key={product.id}>
  //             <Card>
  //               <CardMedia
  //                 component="img"
  //                 height="140"
  //                 image={product.image || "https://via.placeholder.com/150"}
  //                 alt={product.name}
  //               />
  //               <CardContent>
  //                 <Typography variant="h5" component="div">
  //                   {product.name}
  //                 </Typography>
  //                 <Typography variant="body2" color="text.secondary">
  //                   {product.description}
  //                 </Typography>
  //               </CardContent>
  //             </Card>
  //           </Grid>
  //         </Link>
  //       ))}
  //     </Grid>
  //   </Box>
  // );
  return (
    <Box sx={{ backgroundColor: "grey.100" }}>
      <CssBaseline />
      <Typography variant="h3" align="center" sx={{ my: 10 }}>
        {/* Maestro */}
      </Typography>
      <Box textAlign="center" my={20}>
        <Typography variant="h3" component="h3">
          Toutes Les Races
        </Typography>
        <Box component="div" display="flex" justifyContent="center" my={3}>
          <Box border={2} borderRadius={5} width="25%"></Box>
        </Box>
      </Box>
      <Grid container spacing={7} p={5}>
        {products?.map((product: ProductResponse) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Link
              to={`/products/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={NotAvailable}
                  alt={product.name}
                />

                <CardContent>
                  <Typography variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Groupe de race :{" "}
                    <Box fontWeight="bold" component="span">
                      {product.breed_group}
                    </Box>
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Durée de vie :{" "}
                    <Box fontWeight="bold" component="span">
                      {product.lifespan}
                    </Box>
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
