"use client";

import Box, { BoxProps } from "@mui/material/Box";
import { SxProps } from "@mui/material";
import Typography from "@mui/material/Typography";
import UserInformation from "@/components/UserInformation";
import BaseIconButton from "@/components/BaseIconButton";
import { Edit, MoreVert } from "@mui/icons-material";

import { ManuscriptCommentData } from "@/@types/manuscripts/view";

interface Props {
  containerProps?: BoxProps;
  comment: ManuscriptCommentData;
}

export default function CommentItem({
  comment,
  containerProps,
  ...props
}: Props) {
  return (
    <Box {...containerProps}>
      <UserInformation
        mainInfo={`${comment.name}/${comment.position} `}
        subInfo={comment.date}
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
