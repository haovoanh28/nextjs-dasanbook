import { Theme } from "@mui/material/styles";

import InputBase from "./InputBase";
import TableHead from "./TableHead";
import TableCell from "./TableCell";
import Button from "./Button";

export default function ComponentOverrides(theme: Theme) {
  return {
    ...TableHead(theme),
    ...TableCell(theme),
    ...InputBase(theme),
    ...Button(theme),
  };
}
