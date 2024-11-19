"use client";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
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
import { Plans } from "./Plans";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import IMAGES from "@/assets/images";
import { ChevronsUpDown } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { faqData } from "./FaqData";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">(
    "monthly"
  );

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block" />
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Prizing & Billing</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-center space-x-4">
            <Button
              variant={billingCycle === "monthly" ? "default" : "outline"}
              className={
                billingCycle === "monthly"
                  ? "bg-[#F97316] text-white"
                  : "border-[#F97316] text-[#F97316]"
              }
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </Button>
            <Button
              variant={billingCycle === "annually" ? "default" : "outline"}
              className={
                billingCycle === "annually"
                  ? "bg-[#F97316] text-white"
                  : "border-[#F97316] text-[#F97316]"
              }
              onClick={() => setBillingCycle("annually")}
            >
              Annually 10% OFF
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Card className="w-[320px] border border-gray-300">
              <CardHeader>
                <CardTitle>Free Plan</CardTitle>
                <CardDescription>
                  Basic Automation tools for Individuals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-4xl font-bold">$0</p>
                  <p className="text-sm text-gray-500">/user/month</p>
                  <div className="space-y-1">
                    <p className="font-bold">What is Included?</p>
                    {Plans.map((plan, index) => (
                      <div
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        key={index}
                        className={`flex items-center space-x-2 ${index > 3 ? "opacity-50" : "text-black"}`}
                      >
                        <span className="text-2xl">
                          <img src={IMAGES.Star} alt="" />
                        </span>
                        <span>{plan}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" disabled>
                  Your current plan
                </Button>
              </CardFooter>
            </Card>

            <Card className="w-[320px] border border-gray-300">
              <CardHeader>
                <CardTitle>Paid Plan</CardTitle>
                <CardDescription>
                  Basic Automation tools for Individuals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-4xl font-bold">$20</p>
                  <p className="text-sm text-gray-500">/user/month</p>
                  <div className="space-y-1">
                    <p className="font-bold">What is Included?</p>
                    {Plans.map((plan, index) => (
                      <div
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        key={index}
                        className="flex items-center space-x-2 text-black"
                      >
                        <span className="text-2xl">
                          <img src={IMAGES.Star} alt="" />
                        </span>
                        <span>{plan}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-[#F97316] text-white hover:bg-orange-500">
                  Buy now
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex flex-1 flex-col gap-4 p-5 pt-10">
            <h2 className="text-2xl flex items-center justify-center font-bold"
            style={{
                color: "#7C8B9D",
                opacity: "0.9",
            }}>Frequently Ask Questions</h2>
            <h1 className="text-sm flex items-center justify-center font-bold " style={{
                fontSize: "1.7rem",
            }}>Everything you need to know</h1><br />
            {faqData.map((faq, index) => (
                         // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <Collapsible key={index} className="border gap-5 rounded-md p-4">
                <div className="flex items-center justify-between space-x-4">
                  <h3 className="text-sm font-semibold">{faq.question}</h3>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                      <ChevronsUpDown className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="mt-2">
                  <p className="text-sm text-gray-700">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
