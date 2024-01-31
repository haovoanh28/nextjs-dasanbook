import PageHeader from "@/components/PageHeader";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Toolbar from "@/ui/manuscript/all/Body/Toolbar";
import Body from "@/ui/manuscript/all/Body";
import Typography from "@mui/material/Typography";
import { Suspense } from "react";
import { Description } from "@mui/icons-material";

export default async function Page() {
  return (
    <>
      <PageHeader pageTitle="All Manuscripts" pageIcon={Description} />
      <Card>
        <CardContent>
          <Toolbar />
          <Box sx={{ mb: 2 }} />
          <Suspense fallback={<Typography>Loading...</Typography>}>
            <Body />
          </Suspense>
        </CardContent>
      </Card>
    </>
  );
}
