import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SubmissionDetail from "@/ui/submission/detail/SubmissionDetail";
import DetailPageHeader from "@/ui/submission/detail/PageHeader";
import Toolbar from "@/ui/submission/detail/Toolbar";
import { Suspense } from "react";
import { Description } from "@mui/icons-material";

export default function Page() {
  return (
    <>
      <DetailPageHeader />
      <Card>
        <CardContent>
          <Toolbar mb={2} />
          <Suspense fallback={<div>Loading...</div>}>
            <SubmissionDetail />
          </Suspense>
        </CardContent>
      </Card>
    </>
  );
}
