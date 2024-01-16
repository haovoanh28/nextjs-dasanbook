import PageContainer from "@/components/PageContainer";
import { BarChart } from "@mui/icons-material";

export default async function Page() {
  return (
    <PageContainer pageTitle="Dashboard" pageIcon={BarChart}>
      <div>
        <p>Dashboard content</p>
      </div>
    </PageContainer>
  );
}
