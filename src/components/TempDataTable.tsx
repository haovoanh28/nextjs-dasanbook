"use client";

import {
  ColumnDef,
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
  Column,
} from "@tanstack/react-table";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";

//TData
type User = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: string;
};

interface Props {}

export default function DataTable({}: Props) {
  const data: User[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: 24,
      visits: 100,
      status: "In Relationship",
      progress: 50,
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: 40,
      visits: 40,
      status: "Single",
      progress: 80,
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: 45,
      visits: 20,
      status: "Complicated",
      progress: 10,
    },
    {
      firstName: "tanner",
      lastName: "linsley",
      age: 24,
      visits: 100,
      status: "In Relationship",
      progress: 50,
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: 40,
      visits: 40,
      status: "Single",
      progress: 80,
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: 45,
      visits: 20,
      status: "Complicated",
      progress: 10,
    },
    {
      firstName: "tanner",
      lastName: "linsley",
      age: 24,
      visits: 100,
      status: "In Relationship",
      progress: 50,
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: 40,
      visits: 40,
      status: "Single",
      progress: 80,
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: 45,
      visits: 20,
      status: "Complicated",
      progress: 10,
    },
    {
      firstName: "tanner",
      lastName: "linsley",
      age: 24,
      visits: 100,
      status: "In Relationship",
      progress: 50,
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: 40,
      visits: 40,
      status: "Single",
      progress: 80,
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: 45,
      visits: 20,
      status: "Complicated",
      progress: 10,
    },
  ];
  const columnHelper = createColumnHelper<User>();
  const columns: ColumnDef<User, any>[] = [
    columnHelper.accessor("firstName", {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.lastName, {
      id: "lastName",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Last Name</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("age", {
      header: () => "Age",
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("visits", {
      header: () => <span>Visits</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("status", {
      header: "Status",
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("progress", {
      header: "Profile Progress",
      footer: (info) => info.column.id,
    }),
  ];
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <Table stickyHeader>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
      </Table>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table aria-label="simple table">
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
