// "use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PageContainer from "@/components/PageContainer";
import SubmissionDetail from "@/ui/submission/detail/SubmissionDetail";
import DetailPageHeader from "@/ui/submission/detail/PageHeader";
import { Suspense } from "react";
import { Description } from "@mui/icons-material";

export default function Page() { 
  return (
    // <PageContainer
    //   pageTitle="Detail Page"
    //   pageIcon={Description}
    //   // onClickBackButton={wtf}
    // >
    //   <Box>
    //     <Typography>Hello</Typography>
    //     <Suspense fallback={<div>Loading...</div>}>
    //       <SubmissionDetail />
    //     </Suspense>
    //   </Box>
    // </PageContainer>
    <DetailPageHeader />
  );
}
