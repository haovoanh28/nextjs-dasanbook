import Box from "@mui/material/Box";
import PageContainer from "@/components/PageContainer";
import { Description } from "@mui/icons-material";

export default function Page() {     
  return (
    <PageContainer pageTitle="All Manuscripts" pageIcon={Description}>
      <Box>All Manuscripts</Box>
    </PageContainer>
  );
}
