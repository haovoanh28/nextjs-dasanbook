import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Files from "./Files";
import CommentSection from "./CommentSection";

import { RowStyles } from "@/const/styles";
import { fakerKO as faker } from "@faker-js/faker";

export default function Overview() {
  return (
    <Box>
      <Files />
      <Box sx={{ mt: 1 }}>
        <Box sx={{ ...RowStyles }}>
          <Typography>{faker.person.firstName()}:</Typography>
          <Typography>{faker.person.jobTitle()}</Typography>
        </Box>
        <Box sx={{ ...RowStyles }}>
          <Typography>{faker.commerce.department()}:</Typography>
          <Typography>{faker.commerce.productName()}</Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 2 }}>
        <CommentSection />
      </Box>
    </Box>
  );
}
