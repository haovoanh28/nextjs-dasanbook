import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CommentItem from "./Item";

import { ManuscriptCommentData } from "@/@types/manuscripts/view";

interface Props {
  commentList: ManuscriptCommentData[];
}

export default function Comment({ commentList }: Props) {
  return (
    <Box>
      <Typography variant="subtitle1">Comments</Typography>
      <Divider sx={{ mt: 0.5, mb: 2 }} />
      <Stack spacing={2}>
        {commentList.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            containerProps={{ sx: { mb: 1 } }}
          />
        ))}
      </Stack>
    </Box>
  );
}
