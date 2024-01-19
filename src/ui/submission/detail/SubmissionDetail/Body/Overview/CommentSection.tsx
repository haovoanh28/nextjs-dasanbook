import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function Comment() {
  return (
    <Box>
      <Typography variant="subtitle1">Comment</Typography>
      <Divider sx={{ mt: 0.5, mb: 2 }} />
      <Typography variant="body2">wtf</Typography>
    </Box>
  );
}
