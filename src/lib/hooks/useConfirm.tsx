"use client";

import { useState } from "react";
import BaseModal from "@/components/BaseModal";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BaseButton from "@/components/BaseButton";

interface Props {
  title?: string;
  content?: string | JSX.Element;
}

export default function useConfirm(
  config?: Props
): [() => JSX.Element, () => Promise<any>] {
  const [promise, setPromise] = useState<{
    resolve: (value?: any) => void;
  } | null>(null);

  const onClose = () => {
    if (promise) {
      setPromise(null);
    }
  };

  const showModal = () => {
    const _promise = new Promise((resolve, reject) => {
      setPromise({ resolve });
    });

    return _promise;
  };

  const onConfirm = () => {
    if (promise) {
      promise.resolve();
      onClose();
    }
  };

  const Footer = (
    <Box>
      <BaseButton onClick={onClose}>Cancel</BaseButton>
      <BaseButton onClick={onConfirm}>Confirm</BaseButton>
    </Box>
  );

  const ConfirmModal = () => (
    <BaseModal
      open={!!promise}
      onClose={onClose}
      title={config?.title || "Confirm"}
      size="md"
      footer={Footer}
    >
      {config?.content && config.content}
      {!config?.content && <Typography>Are you sure?</Typography>}
    </BaseModal>
  );

  return [ConfirmModal, showModal];
}
