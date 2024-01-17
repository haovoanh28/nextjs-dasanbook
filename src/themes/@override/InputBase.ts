import { Theme, Components } from "@mui/material/styles";

export default function InputBase(theme: Theme): Components {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& input": {
            height: "0.5em",
          },
        },
      },
    },
  };
}
