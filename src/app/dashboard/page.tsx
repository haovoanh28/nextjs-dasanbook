import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BaseOrg from "@/components/BaseOrg";
import DashboardPageHeader from "@/ui/dashboard/PageHeader";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default async function Page() {
  return (
    <Box>
      <DashboardPageHeader />
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            대시보드
          </Typography>
          <Typography variant="body2"> 
            대시보드 페이지입니다.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
