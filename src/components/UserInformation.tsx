import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

interface Props {
  mainInfo: string;
  subInfo: string;
}

export default function UserInformation({ mainInfo, subInfo }: Props) {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Avatar>M</Avatar>
      <Box sx={{ ml: 1 }}>
        <Typography variant="body2">{mainInfo}</Typography>
        <Typography variant="caption">{subInfo}</Typography>
      </Box>
    </Box>
  );
}
