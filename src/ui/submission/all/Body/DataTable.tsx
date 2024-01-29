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

type Data = {
  id: number;
  field: string;
  title: string;
  creator: string[];
  created: string;
  status: string;
  reviewer: string;
  mailStatus: string;
};

interface Props {}

const generateMockData = (count: number): Data[] => {
  const mockData: Data[] = [];

  for (let i = 0; i < count; i++) {
    const data: Data = {
      id: i,
      field: faker.commerce.department(),
      title: faker.commerce.productName(),
      creator: [
        faker.person.firstName(),
        faker.person.firstName(),
        faker.person.firstName(),
        faker.person.firstName(),
        faker.person.firstName(),
      ],
      created: faker.date.past().toLocaleDateString(),
      status: faker.person.jobType(),
      reviewer: faker.person.firstName(),
      mailStatus: ["발송", "미발송"][Math.floor(Math.random() * 2)],
    };

    mockData.push(data);
  }

  return mockData;
};

export default function AllManuscriptsDataTable({}: Props) {
  const router = useRouter();

  const data: Data[] = generateMockData(10);
  const columnHelper = createColumnHelper<Data>();
  const columns: ColumnDef<Data, any>[] = [
    {
      id: "select",
      header: (info) => <Checkbox sx={{ width: 30 }} />,
      cell: (info) => <Checkbox sx={{ width: 30 }} onChange={(e) => {}} />,
    },
    columnHelper.accessor("field", {
      header: () => "Field",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("title", {
      header: () => "Title",
      cell: (info) => (
        <Typography
          sx={{ cursor: "pointer" }}
          component={Link}
          onClick={() => {
            router.push(`/submission/${info.row.original.id}`);
          }}
        >
          {info.getValue()}
        </Typography>
      ),
    }),
    columnHelper.accessor("creator", {
      header: () => "Creator",
      cell: (info) => (
        <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
          {info.getValue().map((name: string) => (
            <Avatar key={name}>{name}</Avatar>
          ))}
        </AvatarGroup>
      ),
    }),
    columnHelper.accessor("created", {
      header: () => "Created",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("status", {
      header: () => "Status",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("reviewer", {
      header: () => "Reviewer",
      cell: (info) => <UserInformation mainInfo={info.getValue()} />,
    }),
    columnHelper.accessor("mailStatus", {
      header: () => "Mail Status",
      cell: (info) => info.getValue(),
    }),
  ];

  return <DataTable columns={columns} data={data} />;
  // return isClient ? (
  //   <DataTable columns={columns} data={data} />
  // ) : (
  //   "Loading Table"
  // );
}
