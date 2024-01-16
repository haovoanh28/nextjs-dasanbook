import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
          <CardContent>{children}</CardContent>
        </Card>
      </Box>
    </>
  );
}
