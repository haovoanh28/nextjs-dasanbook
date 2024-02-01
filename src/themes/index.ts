"use client";
import { Roboto, Nanum_Gothic, Noto_Sans_KR } from "next/font/google";
import { createTheme } from "@mui/material/styles";

import ComponentOverrides from "./@override";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const notoSanKR = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

let theme = createTheme({
  palette: {
    mode: "light",
    header: {
      main: "#1B2E4B",
      background: "#1B2E4B",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: `${roboto.style.fontFamily}, ${notoSanKR.style.fontFamily}`,
    subtitle1: {
      fontWeight: 500,
    },
  },
});

theme.components = ComponentOverrides(theme);

export default theme;
