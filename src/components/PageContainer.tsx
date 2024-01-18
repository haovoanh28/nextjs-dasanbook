'use client';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import BaseButton from "./BaseButton";
import { Refresh, SvgIconComponent, ArrowBack } from "@mui/icons-material";

interface Props {
  pageTitle: string;
  pageIcon?: SvgIconComponent;
  onRefresh?: () => void;
  children: React.ReactNode;
  onClickBackButton?: () => void;
}

export default function PageContainer({
  pageTitle,
  pageIcon: Icon,
  onRefresh,
  onClickBackButton,
  children,
}: Props) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
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
            <Button variant="outlined" sx={{ minWidth: 0, width: 40 }}>
              <Refresh />
            </Button>
          )}
        </Box>
      </Box>

      <Box sx={{ mt: 1 }}>
        <Card>
          <CardContent>
            {onClickBackButton && (
              <Box sx={{ mb: 2 }}>
                <BaseButton variant="text" startIcon={<ArrowBack />} onClick={() => {console.log("GGGG")}}>
                  Back To List
                </BaseButton>
              </Box>
            )}

            {children}
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
