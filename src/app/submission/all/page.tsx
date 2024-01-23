import PageHeader from "@/components/PageHeader";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Body from "@/ui/submission/all/Body";
import { Description } from "@mui/icons-material";

export default async function Page() {
  return (
    <>
      <PageHeader pageTitle="All Manuscripts" pageIcon={Description} />
      <Card>
        <CardContent>
          <Body />
        </CardContent>
      </Card>
    </>
  );
}
