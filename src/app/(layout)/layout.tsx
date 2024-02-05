import TopBar from "@/ui/layout/TopBar";
import {DRAWER_WIDTH} from "@/const/ui";
import Box from "@mui/material/Box";
import SideNav from "@/ui/layout/SideNav";

const Layout = ({children}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <SideNav />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: `${DRAWER_WIDTH}px`,
        }}
      >
        <TopBar/>
        <Box sx={{ p: 2, pt: 1 }}>{children}</Box>
      </Box>
    </>
  );
}

export default Layout;