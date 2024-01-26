import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Body from "./Body";
import Toolbar from "./Toolbar";

export default function DashboardBodyContainer() {
  return (
    <Card>
      <CardContent>
        <Toolbar />
        <Box sx={{ mt: 2 }}>
          <Body />
        </Box>
      </CardContent>
    </Card>
  );
}
