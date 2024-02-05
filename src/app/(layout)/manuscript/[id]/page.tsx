import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SubmissionDetail from "@/ui/manuscript/detail/SubmissionDetail";
import DetailPageHeader from "@/ui/manuscript/detail/PageHeader";
import Toolbar from "@/ui/manuscript/detail/Toolbar";
import { Suspense } from "react";
import { Description } from "@mui/icons-material";

interface PageParams {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageParams) {
  return (
    <>
      <DetailPageHeader />
      <Card>
        <CardContent>
          <Toolbar mb={2} />
          <Suspense fallback={<div>Loading...</div>}>
            <SubmissionDetail id={params.id} />
          </Suspense>
        </CardContent>
      </Card>
    </>
  );
}
