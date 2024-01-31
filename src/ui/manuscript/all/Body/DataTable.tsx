"use client";

import { useRouter } from "next/navigation";
import { createColumnHelper, ColumnDef } from "@tanstack/react-table";
import { fakerKO as faker } from "@faker-js/faker";

import Checkbox from "@mui/material/Checkbox";
import DataTable from "@/components/DataTable";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import UserInformation from "@/components/UserInformation";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import { ManuscriptListItemData } from "@/@types/manuscripts/list";

interface Props {
  data: ManuscriptListItemData[];
}

export default function AllManuscriptsDataTable({ data }: Props) {
  const router = useRouter();

  const columnHelper = createColumnHelper<ManuscriptListItemData>();
  const columns = [
    {
      id: "select",
      header: () => <Checkbox sx={{ width: 30 }} />,
      cell: () => <Checkbox sx={{ width: 30 }} onChange={(e) => {}} />,
    },
    columnHelper.accessor("category_name", {
      header: "분야",
      cell: (info) => <Typography>{info.getValue()}</Typography>,
    }),
    columnHelper.accessor("title", {
      header: "논문명",
      cell: (info) => (
        <Typography
          sx={{ cursor: "pointer" }}
          component={Link}
          onClick={() => {
            router.push(`/manuscript/${info.row.original.id}`);
          }}
        >
          {info.getValue()}
        </Typography>
      ),
    }),
    columnHelper.accessor("reviewers", {
      header: "Reviewers",
      cell: (info) => (
        <AvatarGroup max={5} sx={{ justifyContent: "start" }}>
          {info.getValue().map((reviewer) => (
            <Avatar key={`${reviewer.id}`} alt={reviewer.name} />
          ))}
        </AvatarGroup>
      ),
    }),
    columnHelper.accessor("created_on", {
      header: "Created On",
      cell: (info) => <Typography>{info.getValue()}</Typography>,
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => <Typography>{info.getValue()}</Typography>,
    }),
    columnHelper.accessor("type", {
      header: "Mail Type",
      cell: (info) => <Typography>{info.getValue().name}</Typography>,
    }),
  ];

  return <DataTable columns={columns} data={data} />;
}
