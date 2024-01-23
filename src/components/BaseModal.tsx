"use client";

import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Divider from "@mui/material/Divider";
import BaseIconButton from "./BaseIconButton";
import { Close } from "@mui/icons-material";

import { SxProps } from "@mui/material";

interface ModalSize {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}
interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  size?: keyof ModalSize;
  children: React.ReactNode;
}

const MODAL_WIDTH_MAP: ModalSize = {
  sm: 320,
  md: 480,
  lg: 640,
  xl: 960,
};
const PADDING_FACTOR = 1.2;
const MODAL_WRAPPER_STYLES: SxProps = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: 2,
  overflow: "hidden",
};
export default function BaseModal({
  open,
  onClose,
  title,
  size = "md",
  children,
}: Props) {
  const theme = useTheme();
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={{ ...MODAL_WRAPPER_STYLES, width: MODAL_WIDTH_MAP[size] }}>
          <Box
            sx={{
              backgroundColor: theme.palette.header.background,
              color: theme.palette.header.contrastText,
              padding: PADDING_FACTOR,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>{title}</Typography>
            <BaseIconButton
              sx={{ color: "white" }}
              size="small"
              onClick={onClose}
            >
              <Close fontSize="small" />
            </BaseIconButton>
          </Box>
          <Box
            sx={{
              padding: PADDING_FACTOR,
              bgcolor: "background.paper",
              width: "100%",
            }}
          >
            {children}
          </Box>

          <Divider />
          <Box sx={{ padding: PADDING_FACTOR, bgcolor: "background.paper" }}>
            WTF
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
