import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import UserInformation from "@/components/UserInformation";
import { Menu as MenuIcon, Notifications } from "@mui/icons-material";

export default function Page() {
  return (
    <Box sx={{ flexGrow: 1, ml: "1px" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex" }}>
            <IconButton
              sx={{ mr: 1 }}
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Notifications />
            </IconButton>

            <UserInformation mainInfo="재무팀" subInfo="홍길동 과장" />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
