import { Suspense } from "react";
import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
import PageContainer from "@/components/PageContainer";
import Toolbar from "@/ui/submission/all/Toolbar";
import PageHeader from "@/components/PageHeader";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import DataTable from "@/ui/submission/all/DataTable";
import { Description } from "@mui/icons-material";

const DataTable = dynamic(() => import("@/ui/submission/all/DataTable"), {
  ssr: false,
});

export default async function Page() {
  return (
    <>
      <PageHeader pageTitle="All Manuscripts" pageIcon={Description} />
      <Card>
        <CardContent>
          <Toolbar />
          <Box sx={{ mt: 2 }} />
          <DataTable />
        </CardContent>
      </Card>
    </>
  );
}
