import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Header from "./Header";
import Body from "./Body";
import Overview from "./Body/Overview";
import Activity from "./Body/Activity";
import { getManuscriptDetail } from "@/lib/api/submission";

interface Props {
  id: string;
}

export default async function SubmissionDetail({ id }: Props) {
  const manuscriptDetail = await getManuscriptDetail(id);

  return (
    <Box>
      <Header data={manuscriptDetail.rows} />
      <Divider sx={{ my: 1 }} />
      <Body overviewSlot={<Overview />} activitySlot={<Activity />} />
    </Box>
  );
}
