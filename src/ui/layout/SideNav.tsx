import Image from "next/image";
import { Divider, Drawer, List, Typography, Box } from "@mui/material";
import NavLinks from "./NavLinks";

import { DRAWER_WIDTH } from "@/const/ui";

export default function SideNav() {
  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
          height: "auto",
          bottom: 0,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* Logo and brand*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 1,
        }}
      >
        <Image
          src="/assets/images/logo-placeholder-image.png"
          alt="logo"
          width={80}
          height={80}
        />
        <Typography variant="h5">다산콘텐츠</Typography>
      </Box>
      <Divider />
      
      {/* Menus */}
      <List disablePadding>
        <NavLinks />
      </List>
    </Drawer>
  );
}
