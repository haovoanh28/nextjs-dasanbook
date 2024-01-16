import Box from "@mui/material/Box";
import PageContainer from "@/components/PageContainer";
import { Email } from "@mui/icons-material";

export default async function Page() {     
  return (
    <PageContainer pageTitle="Mail Template" pageIcon={Email}>
      <Box>Mail template</Box>
    </PageContainer>
  );
}
