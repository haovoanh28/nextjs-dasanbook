import { Theme, Components } from "@mui/material/styles";

export default function InputBase(theme: Theme): Components {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& input, & .MuiSelect-select": {
            paddingTop: "0.6rem",
            paddingBottom: "0.6rem",
          },
        },
      },
    },
  };
}
