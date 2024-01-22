import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CommentItem from "./Item";

import { faker } from "@faker-js/faker";

type Comment = {
  id: string;
  creator: string;
  position: string;
  dept: string;
  createdTime: string;
  content: string;
};

const COMMENT_LIST: Comment[] = [];

for (let i = 0; i < 10; i++) {
  const comment: Comment = {
    id: faker.string.uuid(),
    creator: faker.person.firstName(),
    position: faker.person.jobTitle(),
    dept: faker.commerce.department(),
    createdTime: faker.date.past().toISOString(),
    content: faker.lorem.paragraph(),
  };

  COMMENT_LIST.push(comment);
}

export default function Comment() {
  return (
    <Box>
      <Typography variant="subtitle1">Comment</Typography>
      <Divider sx={{ mt: 0.5, mb: 2 }} />
      <Stack spacing={2}>
        {COMMENT_LIST.map((comment) => (
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
