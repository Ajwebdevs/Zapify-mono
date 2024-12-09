"use client";

import { AppSidebar } from "@/components/app-sidebar";
import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  FaClock,
  FaTrash,
  FaEdit,
} from "react-icons/fa";
import {
  Breadcrumb,
  BreadcrumbItem,
  // BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
// import {
//   type ColumnDef,
//   type SortingState,
//   getCoreRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from "@tanstack/react-table";
// import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
// import { Checkbox } from "@/components/ui/checkbox";
import { AutomationWorkFlow } from "./workflow/automationworkflow";

export type Automation = {
  id: string;
  name: string;
  status: string;
  lastRun: string;
  prevRun: string;
  isOn: boolean;
};

import IMAGES from "@/assets/images";
// export const columns: ColumnDef<Automation>[] = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         checked={table.getIsAllPageRowsSelected()}
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         // className="w-4 !important h-4""
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//       />
//     ),
//     enableSorting: false,
//   },
//   {
//     accessorKey: "name",
//     header: "Name",
//     cell: ({ row }) => <span>{row.getValue("name")}</span>,
//   },
//   {
//     accessorKey: "status",
//     header: "Status",
//     cell: ({ row }) => (
//       <span
//         className={`${
//           row.getValue("status") === "Active"
//             ? "text-green-500"
//             : "text-red-500"
//         }`}
//       >
//         {row.getValue("status")}
//       </span>
//     ),
//   },
//   {
//     accessorKey: "lastRun",
//     header: "Last Run",
//     cell: ({ row }) => <span>{row.getValue("lastRun")}</span>,
//   },
//   {
//     accessorKey: "prevRun",
//     header: "Prev Run",
//     cell: ({ row }) => <span>{row.getValue("prevRun")}</span>,
//   },
//   {
//     accessorKey: "isOn",
//     header: "On/Off",
//     cell: ({ row }) => (
//       <Button variant={row.getValue("isOn") ? "outline" : "outline"} size="sm">
//         {row.getValue("isOn") ? "On" : "Off"}
//       </Button>
//     ),
//   },
// ];

export function Automation() {
  const [searchValue, setSearchValue] = React.useState("");
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
            <AutomationWorkFlow />
          </div>
          {/* Automation Card */}
          <Card className="w-full max-w-md border border-gray-200 shadow-lg">
            <CardHeader className="flex justify-between items-center pb-3">
              {/* Left Side: Instagram Logo and Text */}
              <div className="flex items-center gap-36 justify-between">
                {/* Instagram Logo */}
                <div className="flex">
                  <div className="w-10 h-10 rounded-full  flex items-center justify-center">
                    <img src={IMAGES.Automation_avatar} alt="Instagram Logo" />
                    {/* <FaInstagram className="text-blue-500 text-xl" /> */}
                  </div>
                  <div className="items-center flex pl-5">
                    <CardTitle className="text-lg">Comment Response</CardTitle>
                    <br />
                    {/* <p className=" float-start text-m text-gray-500">
                    Auto reply to comments
                    </p> */}
                  </div>
                  <br />
                </div>
                <div className="flex float-end">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked
                    />
                    {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#46F260] peer-focus:ring-4 peer-focus:ring-green-300 transition duration-300 ease-in-out"></div>
                    {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                    <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></span>
                  </label>
                </div>
              </div>
            </CardHeader>
            {/* CARD LNNE */}
            <hr className="border-t border-gray-200" />
            {/* Content */}
            <CardContent className="pt-1">
              {/* Body Content */}
              <div className="mt-4">
                <h1
                  style={{
                    letterSpacing: "2%",
                    fontSize: "19px",
                    color: "#666D80",
                  }}
                >
                  Template: Thanks for your Comment.
                </h1> <br />
                <p
                  className="pt-2 text-sm text-gray-600 bg-blue-100 bg-opacity- px-4 py-2 rounded-lg"
                  style={{
                    letterSpacing: "0%",
                    fontSize: "14px",
                    opacity: "0.7",
                    border: "none",
                    color: "#737373",
                    backgroundColor: "#EBF4FF",
                    backgroundClip: "auto",
                  }}
                >
                  Comment containing 'price', 'cost'
                </p>
                <div className=" pt-4 flex items-center gap-2 mt-2 text-xs text-gray-500">
                  <FaClock className="text-gray-400" />
                  <span className="text-xs">Last Run: Oct 27, 2:15 PM</span>
                </div>
              </div>
              {/* Metrics Boxes */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-[#F4F7FF] p-4 text-center rounded-lg">
                  <img
                    src={IMAGES.Replied}
                    alt="Arrow Left"
                    className="text-gray-400 text-2xl mx-auto"
                  />
                  {/* <BsArrowLeft className="text-gray-400 text-2xl mx-auto" /> */}
                  <p className="text-sm font-medium mt-2">Replied</p>
                  <p className="text-xl font-semibold">70</p>
                </div>

                <div className="bg-[#F4F7FF] p-4 text-center rounded-lg">
                  <img
                    src={IMAGES.Enganged}
                    alt="Arrow Left"
                    className="text-gray-400 text-2xl mx-auto"
                  />
                  <p className="text-sm font-medium mt-2">Engaged</p>
                  <p className="text-xl font-semibold">45</p>
                </div>

                <div className="bg-[#F4F7FF] p-4 text-center rounded-lg">
                  <img
                    src={IMAGES.Converted}
                    alt="Arrow Left"
                    className="text-gray-400 text-2xl mx-auto"
                  />
                  <p className="text-sm font-medium mt-2">Converted</p>
                  <p className="text-xl font-semibold">25</p>
                </div>
              </div>
            </CardContent>
            {/* CARD LINE */}
            {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
            <hr className="border-t border-gray-200"></hr>
            {/* Footer */}
            <CardFooter className="pt-4 flex justify-between items-center text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <FaClock className="text-gray-400" />
                <span>2d ago</span>
              </div>
              <div className="flex items-center gap-2">
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button className="p-2 bg-red-500 text-white rounded-full">
                  <FaTrash className="text-sm" />
                </button>
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button className="p-2 bg-gray-200 text-gray-500 rounded-full">
                  <FaEdit className="text-sm" />
                </button>
              </div>
            </CardFooter>
          </Card>

          {/* <div className="rounded-md border overflow-x-auto">
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
          </div> */}
          {/* <div className="flex items-center justify-between py-4">
            <div className="text-sm">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
          </div> */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
