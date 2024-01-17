import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import { Search } from "@mui/icons-material";

interface Props {}

export default function SearchBar({}: Props) {
  return (
    <OutlinedInput
      sx={{}}
      placeholder="Enter search keyword"
      startAdornment={
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pr: 1,
          }}
        >
          <Search color="primary" />
        </Box>
      }
    />
  );
}
