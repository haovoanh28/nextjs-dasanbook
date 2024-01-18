'use client';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BaseButton from "./BaseButton";
import { Refresh, SvgIconComponent } from "@mui/icons-material";

interface Props {
  pageTitle: string;
  pageIcon?: SvgIconComponent;
  onRefresh?: () => void;
}

export default function PageHeader({
  pageTitle,
  pageIcon: Icon,
  onRefresh,
}: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        my: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          left: Icon ? "-5px" : "-1px",
        }}
      >
        {Icon && <Icon fontSize="large" sx={{ mr: 2 }} />}
        <Typography variant="h4">{pageTitle}</Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        {onRefresh && (
          <BaseButton variant="outlined" sx={{ minWidth: 0, width: 40 }} onClick={onRefresh}>
            <Refresh />
          </BaseButton>
        )}
      </Box>
    </Box>
  );
}
