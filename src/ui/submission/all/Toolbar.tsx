import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SearchBar from "@/components/SearchBar";
import { PersonAddAlt1, Email, Download, MoreHoriz } from "@mui/icons-material";

export default function Toolbar() {
  const ICONS = [
    {
      tooltip: "Add",
      icon: PersonAddAlt1,
    },
    {
      tooltip: "Email",
      icon: Email,
    },
    {
      tooltip: "Download",
      icon: Download,
    },
    {
      tooltip: "More",
      icon: MoreHoriz,
    },
  ];

  return (
    <Grid container alignItems={"center"}>
      <Grid item xs={3}>
        <Box sx={{ display: "flex", gap: 1 }}>
          {ICONS.map(({ icon: Icon, tooltip }, index) => (
            <IconButton color="primary">
              <Icon />
            </IconButton>
          ))}
        </Box>
      </Grid>
      <Grid item xs={5}>
        <SearchBar />
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
}
