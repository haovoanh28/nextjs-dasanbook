"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";

import { Folder, Person, ArrowRight, ArrowDropDown } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

import { NodeRendererProps } from "react-arborist";

import { ROW_STYLES } from "@/const/styles";

interface Props<T> extends NodeRendererProps<T> {}

const IconProps: SvgIconProps = { fontSize: "small" };
const ICON_WIDTH = 24;
export default function OrgNode<T extends { [key: string]: any }>({
  node,
  style,
  dragHandle,
}: Props<T>) {
  return (
    <Stack
      style={style}
      direction={"row"}
      alignItems={"center"}
      ref={dragHandle}
      onClick={(event) => {
        event.stopPropagation();
      }}
      spacing={1}
    >
      {node.children ? (
        <Stack
          sx={{ width: ICON_WIDTH, cursor: "pointer", pb: "2px" }}
          alignItems={"center"}
          onClick={() => {
            node.toggle();
          }}
        >
          {node.isClosed ? <ArrowRight /> : <ArrowDropDown />}
        </Stack>
      ) : (
        <Box sx={{ width: ICON_WIDTH }} />
      )}

      <Box sx={{ p: "6px" }}>
        <Checkbox
          sx={{
            p: 0,
            mb: "3px",
            "&:hover": { bgcolor: "transparent" },
            "&.MuiCheckbox-root": {
              width: "14px",
              height: "14px",
              "& .MuiBox-root": {
                width: "14px",
                height: "14px",
                "& svg": {
                  width: "14px",
                  height: "14px",
                },
              },
            },
          }}
        />
      </Box>

      <Stack sx={{ pr: "6px" }} justifyContent={"center"} alignItems={"center"}>
        {node.level === 0 ? (
          <Folder {...IconProps} sx={{ color: "#FAAD14" }} />
        ) : (
          <Person {...IconProps} sx={{ color: "#2F54EB" }} />
        )}
      </Stack>

      <Typography variant="body2" sx={{ pt: 0.2 }}>
        {node.data.name}
      </Typography>
    </Stack>
  );
}
