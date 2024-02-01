import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import UserAssignmentPageHeader from "@/ui/setting/user-assignment/PageHeader";
// import Body from "@/ui/settings/user-assignment/Body";

const Body = dynamic(() => import("@/ui/setting/user-assignment/Body"), {
  ssr: false,
});

export default function UserAssignment() {
  return (
    <Box>
      <UserAssignmentPageHeader />
      <Body />
    </Box>
  );
}
