import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TaskOverview from "./TaskOverview";
import TicketAssigned from "./TickerAssigned";
import Activities from "./Activities";

import { Suspense } from "react";

const PADDING_FACTOR = 2;
export default function Body() {
  return (
    <Box sx={{ display: "flex", gap: 3 }}>
      <Box sx={{ flexBasis: "45%" }}>
        <Paper sx={{ p: PADDING_FACTOR }}>
          <TaskOverview />
        </Paper>
        <Paper sx={{ p: PADDING_FACTOR, mt: 2 }}>
          <TicketAssigned />
        </Paper>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Paper sx={{ p: 2, height: "100%" }}>
          <Suspense fallback={<Typography>Loading...</Typography>}>
            <Activities />
          </Suspense>
        </Paper>
      </Box>
    </Box>
  );
}
