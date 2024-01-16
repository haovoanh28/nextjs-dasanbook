import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Refresh, SvgIconComponent } from "@mui/icons-material";

interface Props {
  pageTitle: string;
  pageIcon?: SvgIconComponent;
  onRefresh?: () => void;
  children: React.ReactNode;
}

export default function PageContainer({
  pageTitle,
  pageIcon: Icon,
  onRefresh,
  children,
}: Props) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            left: Icon ? "-3px" : 0,
          }}
        >
          {Icon && <Icon fontSize="large" />}
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

      <Box>{children}</Box>
    </>
  );
}
