"use client";

import { AppSidebar } from "@/components/app-sidebar";
import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  // BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
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
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Checkbox } from "@/components/ui/checkbox";
import { AutomationWorkFlow } from "./workflow/automationworkflow";

export type Automation = {
  id: string;
  name: string;
  status: string;
  lastRun: string;
  prevRun: string;
  isOn: boolean;
};

// Later to be replaced withs API data
const data: Automation[] = [
  {
    id: "1",
    name: "Daily Backup",
    status: "Active",
    lastRun: "2024-11-17",
    prevRun: "2024-11-16",
    isOn: true,
  },
  {
    id: "2",
    name: "Monthly Report",
    status: "Inactive",
    lastRun: "2024-10-31",
    prevRun: "2024-10-30",
    isOn: false,
  },
  {
    id: "3",
    name: "Weekly Update",
    status: "Active",
    lastRun: "2024-11-12",
    prevRun: "2024-11-05",
    isOn: true,
  },
];

export const columns: ColumnDef<Automation>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        // className="w-4 !important h-4""
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
    cell: ({ row }) => <span>{row.getValue("name")}</span>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span
        className={`${
          row.getValue("status") === "Active"
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        {row.getValue("status")}
      </span>
    ),
  },
  {
    accessorKey: "lastRun",
    header: "Last Run",
    cell: ({ row }) => <span>{row.getValue("lastRun")}</span>,
  },
  {
    accessorKey: "prevRun",
    header: "Prev Run",
    cell: ({ row }) => <span>{row.getValue("prevRun")}</span>,
  },
  {
    accessorKey: "isOn",
    header: "On/Off",
    cell: ({ row }) => (
      <Button variant={row.getValue("isOn") ? "outline" : "outline"} size="sm">
        {row.getValue("isOn") ? "On" : "Off"}
      </Button>
    ),
  },
];

export function Automation() {
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

  // Filter Data Based on Search Input
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
                  <BreadcrumbPage>Automation</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between py-4">
            <Input
              placeholder="Search by name..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="max-w-full sm:max-w-sm"
            />
            <AutomationWorkFlow/>
    
          </div>

          <div className="rounded-md border overflow-x-auto">
            <Table className="min-w-full">
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
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
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
                      No Automations Found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-between py-4">
            <div className="text-sm">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
