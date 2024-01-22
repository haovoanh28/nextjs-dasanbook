import { Theme, Components } from "@mui/material/styles";

export default function Accordion(theme: Theme): Components {
  return {
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          flexDirection: "row-reverse", // Move the expand icon to the left,
        },
        expandIconWrapper: {
          marginRight: 8,
          transform: "rotate(-90deg)",
          "&.Mui-expanded": {
            transform: "rotate(0deg)",
          },
        },
      },
    },
  };
}
