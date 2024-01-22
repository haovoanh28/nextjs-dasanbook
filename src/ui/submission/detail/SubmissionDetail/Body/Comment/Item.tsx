"use client";

import Box, { BoxProps } from "@mui/material/Box";
import { SxProps } from "@mui/material";
import Typography from "@mui/material/Typography";
import UserInformation from "@/components/UserInformation";
import BaseIconButton from "@/components/BaseIconButton";
import { Edit, MoreVert } from "@mui/icons-material";

interface Props {
  containerProps?: BoxProps;
  comment: {
    creator: string;
    position: string;
    dept: string;
    createdTime: string;
    content: string;
  };
}

export default function CommentItem({
  comment,
  containerProps,
  ...props
}: Props) {
  return (
    <Box {...containerProps}>
      <UserInformation
        mainInfo={`${comment.creator} ${comment.dept}/${comment.position}`}
        subInfo={comment.createdTime}
        content={comment.content}
        rightActions={
          <Box sx={{ display: "flex" }}>
            <BaseIconButton tooltip="Edit">
              <Edit fontSize="small" color="success" />
            </BaseIconButton>
            <BaseIconButton tooltip="More">
              <MoreVert fontSize="small" />
            </BaseIconButton>
          </Box>
        }
      />
    </Box>
  );
}
