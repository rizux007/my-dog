import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "../utils/constants";
import { Box, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ height: "100vh", width: "100%" }} my={20}>
      <Typography textAlign="center" my={10} variant="h3">
        Liste des vendeurs & utilisateurs
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Box>
  );
};

export default Contact;
