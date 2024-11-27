"use client";

import * as React from "react";
import {
  type ColumnDef,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FiPlus, FiDownload } from "react-icons/fi";

export type Contact = {
  id: string;
  name: string;
  linkedPage: string;
  triggered: string;
  status: string;
  lastInteraction: string;
  image: string;
};

// Sample Data
const data: Contact[] = [
  {
    id: "1",
    name: "John Smith",
    linkedPage: "Designer123",
    triggered: 'Keyword(DM): "Offer"',
    status: "Active",
    lastInteraction: "28-10-2024 08:44 AM",
    image: "https://via.placeholder.com/40",
  },
  {
    id: "2",
    name: "Nik John",
    linkedPage: "Designer123",
    triggered: 'Comment: "#new"',
    status: "Inactive",
    lastInteraction: "28-10-2024 08:44 AM",
    image: "https://via.placeholder.com/40",
  },
];

export const columns: ColumnDef<Contact>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    enableSorting: false,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <img
          src={row.original.image}
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
        <span>{row.getValue("name")}</span>
      </div>
    ),
  },
  {
    accessorKey: "linkedPage",
    header: "Linked Page",
    cell: ({ row }) => <span>{row.getValue("linkedPage")}</span>,
  },
  {
    accessorKey: "triggered",
    header: "Triggered Name",
    cell: ({ row }) => <span>{row.getValue("triggered")}</span>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 rounded text-sm font-medium ${
          row.getValue("status") === "Active"
            ? "text-green-500 border border-green-500 bg-green-200 opacity-65"
            : "text-red-500 border border-red-500 bg-red-200 opacity-65"
        }`}
      >
        {row.getValue("status")}
      </span>
    ),
  },
  {
    accessorKey: "lastInteraction",
    header: "Last Interaction",
    cell: ({ row }) => <span>{row.getValue("lastInteraction")}</span>,
  },
];

export function ContactTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [rowSelection, setRowSelection] = React.useState({});
  const [searchValue, setSearchValue] = React.useState("");
  const [filteredData, setFilteredData] = React.useState(data);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    state: { sorting, rowSelection },
  });

  React.useEffect(() => {
    const lowercasedSearch = searchValue.toLowerCase();
    setFilteredData(
      data.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(lowercasedSearch)
        )
      )
    );
  }, [searchValue]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Contacts</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between py-4">
            <Input
              placeholder="Search by name..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="max-w-md"
            />
            <div className="flex gap-2">
              <Button
                variant="default"
                className="bg-white text-gray-700 border border-gray-300"
              >
                <FiPlus className="mr-2" />
                Create New Contact
              </Button>
              <Button
                variant="default"
                className="bg-orange-500 text-white hover:bg-orange-600"
              >
                <FiDownload className="mr-2" />
                Export
              </Button>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="text-center">
                      No Contacts Found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="text-sm mt-2">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
