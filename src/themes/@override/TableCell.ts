import { Theme, Components } from "@mui/material/styles";

export default function TableCell(theme: Theme): Components {
  return {
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: theme.palette.grey[100],
        },
      },
    },
  };
}
