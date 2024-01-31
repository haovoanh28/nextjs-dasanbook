"use client";

import { useMemo, useState } from "react";
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import UserInformation from "@/components/UserInformation";
import Stack from "@mui/material/Stack";
import BaseButton from "@/components/BaseButton";
import BaseIconButton from "@/components/BaseIconButton";
import OrgModal from "@/components/OrgModal";
import Panel from "./Panel";

import { Delete, Add } from "@mui/icons-material";

interface Props {
  selectedUsers:
    | {
        id: string;
        name: string;
        dept: string;
        position: string;
      }[]
    | undefined;
}

export default function SelectedUser({ selectedUsers }: Props) {
  const theme = useTheme();

  const [openOrg, setOpenOrg] = useState(false);

  const rightActions = useMemo(
    () => (
      <BaseButton
        startIcon={<Add />}
        sx={{ color: theme.palette.primary.contrastText }}
        onClick={() => setOpenOrg(true)}
      >
        Add
      </BaseButton>
    ),
    []
  );

  return (
    <>
      <Panel title="선택된 유저" rightActions={rightActions}>
        {!selectedUsers && <Typography>No Data</Typography>}
        {selectedUsers && (
          <Stack spacing={2}>
            {selectedUsers.map((user) => (
              <UserInformation
                key={user.id}
                mainInfo={user.name}
                subInfo={`${user.dept} / ${user.position}`}
                rightActions={
                  <BaseIconButton color="error">
                    <Delete fontSize="small" />
                  </BaseIconButton>
                }
              />
            ))}
          </Stack>
        )}
      </Panel>

      <OrgModal open={openOrg} onClose={() => setOpenOrg(false)} />
    </>
  );
}
