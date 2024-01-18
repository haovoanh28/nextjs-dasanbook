import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { fetchSubmissionList } from "@/lib/api/submission";

export default async function SubmissionDetail() {
  const data = await fetchSubmissionList();
  //   const data = await test.json();
  console.log("WTF ==> ", data);
  //   console.log("WTTTT hello ==> ", data);

  return (
    <Box>
      <Typography>Hello from server</Typography>
    </Box>
  );
}
