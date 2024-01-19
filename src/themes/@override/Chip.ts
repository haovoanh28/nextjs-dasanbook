import { Theme, Components } from "@mui/material/styles";

export default function TableCell(theme: Theme): Components {
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  };
}
