"use client";

import { useTheme, SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { FLEX_BETWEEN_STYLES } from "@/const/styles";

interface Props {
  title: string;
  children: React.ReactNode;
  sx?: SxProps;
  rightActions?: React.ReactNode;
}
const PADDING_FACTOR = 1.2;
export default function Panel({ title, sx, rightActions, children }: Props) {
  const theme = useTheme();

  return (
    <Paper
      elevation={1}
      sx={{ borderRadius: 1, overflow: "hidden", height: "100%", ...sx }}
    >
      <Box
        sx={{
          ...FLEX_BETWEEN_STYLES,
          backgroundColor: theme.palette.header.background,
          color: theme.palette.getContrastText(theme.palette.header.background),
          height: 40,
          p: PADDING_FACTOR,
        }}
      >
        <Typography>{title}</Typography>
        {rightActions && <Box>{rightActions}</Box>}
      </Box>

      <Box sx={{ p: PADDING_FACTOR }}>{children}</Box>
    </Paper>
  );
}
