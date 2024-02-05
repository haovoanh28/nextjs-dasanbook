import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import UserAssignmentPageHeader from "@/ui/setting/user-assignment/PageHeader";
import Container from "@/ui/setting/user-assignment/Container";
import { Suspense } from "react";

export default function UserAssignment() {
  return (
    <Box>
      <UserAssignmentPageHeader />
      <Suspense fallback={<Box>Loading ...</Box>}>
        <Container />
      </Suspense>
    </Box>
  );
}
