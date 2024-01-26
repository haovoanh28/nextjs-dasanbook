"use client";

import { useState } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import BaseIconButton from "@/components/BaseIconButton";
import SearchBar from "@/components/SearchBar";
import BaseButton from "@/components/BaseButton";
import FilterModal from "./FilterModal";
import {
  PersonAddAlt1,
  Email,
  Download,
  MoreHoriz,
  FilterAlt,
} from "@mui/icons-material";

export default function Toolbar() {
  const [openFilter, setOpenFilter] = useState(false);

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

  const onCloseFilter = () => setOpenFilter(false);

  return (
    <>
      <Grid container alignItems={"center"}>
        <Grid item xs={4}>
          <Box sx={{ display: "flex", gap: 1 }}>
            {ICONS.map(({ icon: Icon, tooltip }) => (
              <BaseIconButton color="primary" key={tooltip} tooltip={tooltip}>
                <Icon />
              </BaseIconButton>
            ))}
          </Box>
        </Grid>
        <Grid item xs={8} container justifyContent={"flex-end"} gap={1}>
          <SearchBar />
          <BaseButton
            variant="outlined"
            color="primary"
            startIcon={<FilterAlt />}
            onClick={() => setOpenFilter(true)}
          >
            Filter
          </BaseButton>
          <BaseButton
            variant="outlined"
            color="primary"
            startIcon={<Download />}
          >
            Export
          </BaseButton>
        </Grid>
      </Grid>

      <FilterModal open={openFilter} onClose={onCloseFilter} />
    </>
  );
}
