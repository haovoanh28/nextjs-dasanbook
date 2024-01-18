import { Theme, Components } from "@mui/material/styles";

export default function TableCell(theme: Theme): Components {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
         //  padding: 0,
        },
      },
    },
  };
}
