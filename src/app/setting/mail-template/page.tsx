import Box from "@mui/material/Box";
import MailTemplateHeader from "@/ui/setting/mail-template/PageHeader";
import TemplateList from "@/ui/setting/mail-template/TemplateList";
import { Suspense } from "react";

export default async function Page() {
  return (
    <Box>
      <MailTemplateHeader />
      <Suspense fallback={<Box>Loading...</Box>}>
        <TemplateList />
      </Suspense>
    </Box>
  );
}
