import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PageContainer from "@/components/PageContainer";

export default function Page() {
  return (
    <PageContainer pageTitle="My Manuscripts">
      <Box>
        <Typography variant="h6">My Submission</Typography>
      </Box>
    </PageContainer>
  );
}
