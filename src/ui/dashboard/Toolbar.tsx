"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Toolbar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container alignItems={"center"} gap={3}>
        <Grid item xs={4}>
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            <InputLabel>검색 날짜</InputLabel>
            <Select displayEmpty sx={{ flex: 1 }}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            <InputLabel>검색 날짜</InputLabel>
            <Box sx={{ display: "flex", gap: 1 }}>
              <DatePicker />
              <DatePicker />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}
