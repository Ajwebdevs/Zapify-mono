"use client";

// import { useState } from "react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HelpCircle } from "lucide-react";
import IMAGES from "@/assets/images";
import ProgressBar from "./ProgressBar";




export function AutomationWorkFlow() {
  const [open, setOpen] = React.useState(false);

  const handleAutomationRun = (type: string) => {
    console.log(`Running automation on: ${type}`);
    alert(`Stub: Automation will run on ${type}`);
  };

  // const [, setCurrentStep] = useState(1);

  // const handleNext = () => {
  //   setCurrentStep((prev) => (prev < 4 ? prev + 1 : 4));
  // };

  // const handlePrevious = () => {
  //   setCurrentStep((prev) => (prev > 1 ? prev - 1 : 1));
  // };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="bg-orange-500 text-white">
          + New Automation
        </Button>
      </DialogTrigger>
      <DialogContent
        className="overflow-y-auto p-4 bg-white flex flex-col-reverse sm:flex-row sm:gap-6 sm:max-w-[500px] md:max-w-[900px] rounded-xl lg:max-w-[1000px] sm:rounded-md"
      >
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-center gap-4 p-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Automation Setup</h2>
            <p className="text-gray-600 mt-2">
              Choose the Facebook page you want to set up automation for
            </p>
          </div>
          <div className="w-full flex justify-center">
            {/* <img
              src={IMAGES.AutoStage1}
              alt="Stage 1"
              className="w-full max-w-sm h-auto object-contain"
            /> */}
                <div className="p-4">
                <ProgressBar currentStep={1} lineImageSrc={IMAGES.Lines} />


      <div className="mt-8 flex justify-center space-x-4">
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        {/* <button
          onClick={handlePrevious}
          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
        >
          Previous
        </button> */}
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        {/* <button
          onClick={handleNext}
          className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
        >
          Next
        </button> */}
      </div>
    </div>
          </div>
          <div className="flex gap-4 w-full">
            <Button
              className="bg-orange-500 text-white flex-1"
              onClick={() => handleAutomationRun("page")}
            >
              Run on Page
            </Button>
            <Button
              className="bg-gray-200 text-gray-900 flex-1"
              onClick={() => handleAutomationRun("post")}
            >
              Run on Specific Post
            </Button>
          </div>
          <div className="w-full">
            <label htmlFor="selectPage" className="block text-sm font-medium text-gray-900 mb-2">
              Select page
            </label>
            <Select>
              <SelectTrigger id="selectPage">
                <SelectValue placeholder="Select your page" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="page1">Page 1</SelectItem>
                <SelectItem value="page2">Page 2</SelectItem>
                <SelectItem value="page3">Page 3</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center text-sm text-gray-500 mt-2">
              <HelpCircle className="mr-2 h-5 w-5 text-gray-500" />
              Select a page to set up automations for interactions on that specific page.
            </div>
          </div>
          <Button className="bg-orange-500 text-white w-full mt-6">Next</Button>
        </div>
        {/* Right Section */}
        <div className="flex-1 bg-[#ECF4FC] p-4 rounded-lg sm:mb-0">
          <div className="relative w-full h-[250px] sm:h-[400px] z-10 rounded-lg overflow-hidden">
            <img
              src={IMAGES.PhoneAuto}
              alt="Phone"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
