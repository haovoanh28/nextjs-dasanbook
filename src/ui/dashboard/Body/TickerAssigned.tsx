import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import StaticBar, { BarData } from "@/components/StaticBar";

import { ROW_STYLES } from "@/const/styles";

const DATA: BarData[] = [
  { color: "#FF0000", percentage: 20, text: "Ticket 1", value: 1 },
  { color: "#00FF00", percentage: 30, text: "Ticket 2", value: 2 },
  { color: "#0000FF", percentage: 50, text: "Ticket 3", value: 3 },
];

export default function TicketAssigned() {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Ticker Assigned
      </Typography>
      <StaticBar data={DATA} />

      <Stack spacing={2} mt={2}>
        {DATA.map((item) => (
          <Grid container>
            <Grid item xs={6}>
              <Box sx={ROW_STYLES}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    backgroundColor: item.color,
                    borderRadius: "50%",
                  }}
                />
                <Typography variant="body1">{item.text}</Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">{item.value}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" sx={{ textAlign: "right" }}>
                {item.percentage}%
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Stack>
    </>
  );
}
