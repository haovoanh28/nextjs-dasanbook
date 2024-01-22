import Box, { BoxProps } from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

interface Props {
  mainInfo: string;
  subInfo?: string;
  content?: string;
  rightActions?: React.ReactNode;
}

export default function UserInformation({
  mainInfo,
  subInfo,
  content,
  rightActions,
  ...props
}: Props) {
  return (
    <Box sx={{}}>
      <Box sx={{ display: "flex", flex: 1 }}>
        <Avatar variant="circular">M</Avatar>
        <Box sx={{ ml: 1, width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ alignSelf: "flex-start" }}>
              <Typography variant="body2">{mainInfo}</Typography>
              <Typography variant="caption">{subInfo}</Typography>
            </Box>
            {rightActions && <Box>{rightActions}</Box>}
          </Box>
          {content && <Box>{content}</Box>}
        </Box>
      </Box>
    </Box>
  );
}
