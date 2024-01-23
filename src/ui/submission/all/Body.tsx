import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "./Toolbar";
import DataTable from "./DataTable";

export default function Body() {
  return (
    <>
      <Toolbar />
      <Box sx={{ mt: 2 }} />
      <DataTable />
    </>
  );
}
