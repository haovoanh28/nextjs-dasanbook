import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SearchBar from "@/components/SearchBar";
import BaseButton from "@/components/BaseButton";
import {
  PersonAddAlt1,
  Email,
  Download,
  MoreHoriz,
  FilterAlt,
} from "@mui/icons-material";

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
      <Grid item xs={4}>
        <Box sx={{ display: "flex", gap: 1 }}>
          {ICONS.map(({ icon: Icon, tooltip }, index) => (
            <IconButton color="primary">
              <Icon />
            </IconButton>
          ))}
        </Box>
      </Grid>
      <Grid item xs={8} container justifyContent={"flex-end"} gap={1}>
        <SearchBar />
        <BaseButton
          variant="outlined"
          color="primary"
          startIcon={<FilterAlt />}
        >
          Filter
        </BaseButton>
        <BaseButton variant="outlined" color="primary" startIcon={<Download />}>
          Export
        </BaseButton>
      </Grid>
    </Grid>
  );
}
