import { Theme } from "@mui/material/styles";

import InputBase from "./InputBase";
import TableHead from "./TableHead";
import TableCell from "./TableCell";
import Button from "./Button";
import Chip from "./Chip";
import Accordion from "./Accordion";
import Timeline from "./Timeline";

export default function ComponentOverrides(theme: Theme) {
  return {
    ...TableHead(theme),
    ...TableCell(theme),
    ...InputBase(theme),
    ...Button(theme),
    ...Chip(theme),
    ...Accordion(theme),
    ...Timeline(theme),
  };
}
