import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Header from "./Header";
import Body from "./Body";
import Overview from "./Body/Overview";
import FollowUpEmail from "./Body/FollowUpEmail";
import Activity from "./Body/Activity";
import { fetchSubmissionList } from "@/lib/api/submission";

export default async function SubmissionDetail() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await fetchSubmissionList();

  return (
    <Box>
      <Header />
      <Divider sx={{ my: 1 }} />
      <Body
        overviewSlot={<Overview />}
        followUpEmailSlot={<FollowUpEmail />}
        activitySlot={<Activity />}
      />
    </Box>
  );
}
