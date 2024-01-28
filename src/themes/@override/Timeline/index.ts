import { Theme, Components } from "@mui/material/styles";
import TimelineItem from "./TimelineItem";

export default function Timeline(theme: Theme): Components {
  return {
    ...TimelineItem(theme),
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          minHeight: "120px",
        },
      },
    },
  };
}
