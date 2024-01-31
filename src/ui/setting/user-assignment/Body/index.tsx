"use client";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Fields from "./Fields";
import SelectedUsers from "./SelectedUsers";

import { fakerKO as faker } from "@faker-js/faker";

const FIELDS_DATA = Array.from({ length: 10 }, () => ({
  id: faker.string.uuid(),
  title: faker.commerce.department(),
  selectedUsers: Array.from({ length: 10 }, () => ({
    id: faker.string.uuid(),
    name: faker.person.firstName() + " " + faker.person.lastName(),
    dept: faker.commerce.department(),
    position: faker.person.jobTitle(),
  })),
}));

export default function Body() {
  const [selectedField, setSelectedField] = useState<string>();

  useEffect(() => {
    if (!selectedField) {
      setSelectedField(FIELDS_DATA[0].id);
    }
  }, []);

  const onSelectField = (field: string) => {
    console.log("field ==> ", field);
    setSelectedField(field);
  };

  return (
    <Box>
      <Grid container spacing={2} sx={{ minHeight: 700, height: 700 }}>
        <Grid item xs={6} sx={{ height: "100%" }}>
          <Fields
            fields={FIELDS_DATA}
            selectedField={selectedField}
            onSelectField={onSelectField}
          />
        </Grid>
        <Grid item xs={6} sx={{ height: "100%" }}>
          <SelectedUsers
            selectedUsers={
              selectedField
                ? FIELDS_DATA.find((field) => field.id === selectedField)
                    ?.selectedUsers
                : undefined
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
}
