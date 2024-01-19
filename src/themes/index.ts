"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

import ComponentOverrides from "./@override";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

let theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    
  },
});

theme.components = ComponentOverrides(theme);

export default theme;
