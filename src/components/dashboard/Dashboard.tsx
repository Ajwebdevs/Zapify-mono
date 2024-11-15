import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { PieChart, Pie, Label } from "recharts";
// biome-ignore lint/style/useImportType: <explanation>
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React, { useEffect, useState } from "react";
import { DataTable } from "./data-table";

// Sample data and config for the pie chart
const chartData = [
  { platform: "Chrome", visitors: 275, fill: "var(--color-chrome)" },
  { platform: "Safari", visitors: 200, fill: "var(--color-safari)" },
  { platform: "Firefox", visitors: 287, fill: "var(--color-firefox)" },
  { platform: "Edge", visitors: 173, fill: "var(--color-edge)" },
  { platform: "Other", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: { label: "Visitors" },
  chrome: { label: "Chrome", color: "hsl(var(--chart-1))" },
  safari: { label: "Safari", color: "hsl(var(--chart-2))" },
  firefox: { label: "Firefox", color: "hsl(var(--chart-3))" },
  edge: { label: "Edge", color: "hsl(var(--chart-4))" },
  other: { label: "Other", color: "hsl(var(--chart-5))" },
} satisfies ChartConfig;

export function Dashboard() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);


  const [users, setUsers] = useState<{ name: string; email: string; role: string; status: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
        { name: 'Jane Doe', email: 'jane@example.com', role: 'User', status: 'Inactive' },
      ];
      setUsers(data); 
    };
    
    fetchData();
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Zapify</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-col gap-4 p-4 pt-0">
          <div className="grid grid-cols-3 gap-6 p-4 md:grid-cols-3 rounded-xl bg-muted/50">
            <div className="flex items-center gap-4 p-4">
              <span className="text-2xl font-bold">1</span>
              <div>
                <h3 className="text-lg font-semibold">Contacts</h3>
                <p>Details about contacts...</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <span className="text-2xl font-bold">2</span>
              <div>
                <h3 className="text-lg font-semibold">Connected Pages</h3>
                <p>Details about connected pages...</p>
              </div>
            </div>
            <div className="flex items-center gap-6 pl-11">
              {/* <a href=".." className="text-blue-500">See Insights</a> */}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="flex items-center gap-2">
                <img
                  src="/path/to/instagram-logo.png"
                  alt="Instagram Logo"
                  className="w-6 h-6"
                />
                <CardTitle>Instagram</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-lg font-semibold">Auto-reply to comment</p>
                <p>Send a product lineup in Instagram comment</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex items-center gap-2">
                <img
                  src="/path/to/facebook-logo.png"
                  alt="Facebook Logo"
                  className="w-6 h-6"
                />
                <CardTitle>Facebook</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-lg font-semibold">Auto-reply to DM</p>
                <p>Send a product lineup in Instagram comment</p>
              </CardContent>
            </Card>
          </div>


          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">

            <div className="flex items-center p-4 rounded-lg bg-[#E3F2FF] bg-opacity-50">
              {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
              <div className="w-1 h-full bg-blue-500 rounded-l-lg mr-4"></div>
              <div>
                <p className="text-sm text-gray-500">All Time</p>
                <p className="text-2xl font-semibold">1.45%</p>
                <p className="text-gray-500">Automation Screen Rate</p>
              </div>
            </div>


            <div className="flex items-center p-4 rounded-lg bg-[#F3EEFE] bg-opacity-50">
              {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
              <div className="w-1 h-full bg-purple-500 rounded-l-lg mr-4"></div>
              <div>
                <p className="text-sm text-gray-500">Currently Running</p>
                <p className="text-2xl font-semibold">14</p>
                <p className="text-gray-500">Active Automation</p>
              </div>
            </div>

            <div className="flex items-center p-4 rounded-lg bg-[#56B8A8] bg-opacity-50">
              {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
              <div className="w-1 h-full bg-green-500 rounded-l-lg mr-4"></div>
              <div>
                <p className="text-sm text-gray-500">Average Time</p>
                <p className="text-2xl font-semibold">2 hours</p>
                <p className="text-gray-500">Automation Runtime</p>
              </div>
            </div>

            <div className="flex items-center p-4 rounded-lg bg-[#FCBC65] bg-opacity-50">
              {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
              <div className="w-1 h-full bg-orange-500 rounded-l-lg mr-4"></div>
              <div>
                <p className="text-sm text-gray-500">Error Rate</p>
                <p className="text-2xl font-semibold">0.2%</p>
                <p className="text-gray-500">Automation Error Rate</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Audience Overview</h2>
            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a href="#" className="text-blue-500">See Insights</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Users Data Table (Left Side) */}
  <div className="flex flex-col gap-6 p-4 rounded-xl bg-muted/50">
    <h2 className="text-lg font-semibold">Users List</h2>
    <DataTable data={users} />
  </div>

  {/* Audience Insights Card (Right Side) */}
  <Card className="flex flex-col">
    <CardHeader className="items-center pb-0">
      <CardTitle>Audience Insights</CardTitle>
    </CardHeader>
    <CardContent className="flex-1 pb-0">
      <ChartContainer
        config={chartConfig}
        className="mx-auto max-h-[300px] w-full"
      >
        <PieChart width={300} height={300}>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="visitors"
            nameKey="platform"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Visitors
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    </CardContent>
    <CardFooter className="flex-col gap-2 text-sm">
      <div className="flex items-center gap-2 font-medium leading-none">
        Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
      </div>
      <div className="leading-none text-muted-foreground">
        Showing total visitors for the last 6 months
      </div>
    </CardFooter>
  </Card>
</div>


        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}