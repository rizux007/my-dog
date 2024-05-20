import { Box, Typography } from "@mui/material";

const Error = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h2">Erreur...</Typography>
    </Box>
  );
};

export default Error;
