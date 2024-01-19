import Box, { BoxProps } from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

interface Props extends BoxProps {
  mainInfo: string;
  subInfo?: string;
}

export default function UserInformation({
  mainInfo,
  subInfo,
  ...props
}: Props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }} {...props}>
      <Avatar variant="circular">M</Avatar>
      <Box sx={{ ml: 1 }}>
        <Typography variant="body2">{mainInfo}</Typography>
        <Typography variant="caption">{subInfo}</Typography>
      </Box>
    </Box>
  );
}
