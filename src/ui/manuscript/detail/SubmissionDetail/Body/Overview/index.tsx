import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Attachments from "./Attachments";
import Comment from "../Comment";

import { ManuscriptData } from "@/@types/manuscripts/view";

interface Props {
  data: ManuscriptData;
}

export default function Overview({ data }: Props) {
  return (
    <Box>
      <Attachments fileList={data.attachments} />
      <Box sx={{ mt: 1 }}>
        <Typography>{data.content}</Typography>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Comment commentList={data.comments} />
      </Box>
    </Box>
  );
}
