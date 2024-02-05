import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BaseOrg from "@/components/BaseOrg";
import DashboardPageHeader from "@/ui/dashboard/PageHeader";
import DashboardBodyContainer from "@/ui/dashboard/Container";

export default async function Page() {
  return (
    <Box>
      <DashboardPageHeader />
      <DashboardBodyContainer />
    </Box>
  );
}
