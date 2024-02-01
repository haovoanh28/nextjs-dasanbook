"use client";

import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BaseButton from "@/components/BaseButton";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Panel from "./Panel";

import { IdName } from "@/@types/base";

interface Props {
  fields: IdName[];
  selectedField: string | undefined;
  onSelectField: (field: string) => void;
}

export default function Fields({
  fields,
  selectedField,
  onSelectField,
}: Props) {
  const theme = useTheme();

  return (
    <Panel title="분야" sx={{}}>
      <Grid container spacing={2}>
        {fields.map((field) => (
          <Grid key={field.id} item xs={6}>
            <BaseButton
              variant={selectedField === field.id ? "contained" : "outlined"}
              sx={{ width: "100%" }}
              onClick={() => onSelectField(field.id)}
            >
              {field.name}
            </BaseButton>
          </Grid>
        ))}
      </Grid>
    </Panel>
  );
}
