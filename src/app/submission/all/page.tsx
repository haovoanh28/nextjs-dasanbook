import Box from "@mui/material/Box";
import PageContainer from "@/components/PageContainer";
import Toolbar from "@/ui/submission/all/Toolbar";
import { Description } from "@mui/icons-material";

export default async function Page() {     
  return (
    <PageContainer pageTitle="All Manuscripts" pageIcon={Description}>
      {/* Toolbar */}
      <Toolbar />
    </PageContainer>
  );
}
