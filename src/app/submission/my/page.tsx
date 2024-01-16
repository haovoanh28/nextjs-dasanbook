import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PageContainer from "@/components/PageContainer";
import { Description } from "@mui/icons-material";

export default function Page() {
  return (
    <PageContainer pageTitle="My Manuscripts" pageIcon={Description}>
      <Box>
        <Typography variant="h6">My Submission</Typography>
      </Box>
    </PageContainer>
  );
}
