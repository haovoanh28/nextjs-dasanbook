"use client";

import { useRouter } from "next/navigation";
import BaseButton from "@/components/BaseButton";
import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ArrowBack } from "@mui/icons-material";

import { MANUSCRIPT_URL } from "@/const/url";

interface Props extends BoxProps {}

export default function Toolbar({ ...props }: Props) {
  const router = useRouter();
  const onClickBtn = () => {
    router.push(`${MANUSCRIPT_URL}/all`);
  };

  return (
    <Box {...props}>
      <BaseButton
        variant="text"
        color="primary"
        startIcon={<ArrowBack />}
        onClick={onClickBtn}
      >
        <Typography>Back to List</Typography>
      </BaseButton>
    </Box>
  );
}
