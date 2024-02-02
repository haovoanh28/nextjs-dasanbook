"use client";

import useConfirm from "@/lib/hooks/useConfirm";

import Box from "@mui/material/Box";
import BaseIconButton from "@/components/BaseIconButton";
import { ExpandMore, Edit, Delete } from "@mui/icons-material";

export default function ItemAction() {
  const [ConfirmModal, showModal] = useConfirm();

  const onClickDelete = () => {
    showModal().then((res) => {
      console.log("delete ==> ", res);
    });
  };

  return (
    <>
      <Box>
        <BaseIconButton tooltip="Edit">
          <Edit fontSize="small" color="success" />
        </BaseIconButton>
        <BaseIconButton tooltip="Delete" onClick={onClickDelete}>
          <Delete fontSize="small" color="error" />
        </BaseIconButton>
      </Box>

      <ConfirmModal />
    </>
  );
}
