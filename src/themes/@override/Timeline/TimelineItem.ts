import { Theme, Components } from "@mui/material/styles";

export default function TimelineItem(theme: Theme): any {
  return {
    MuiTimelineItem: {
      styleOverrides: {
        root: {
         //  minHeight: "120px",
        },
      },
    },
  };
}
