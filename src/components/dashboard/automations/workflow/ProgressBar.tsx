import { motion } from "framer-motion";

const ProgressBar = ({
  currentStep,
  lineImageSrc,
}: {
  currentStep: number;
  lineImageSrc: string;
}) => {
  return (
    <div className="flex items-center justify-center w-full text-center">
      {[
        { id: 1, label: "Page Info" },
        { id: 2, label: "Action Info" },
        { id: 3, label: "Trigger Info" },
        { id: 4, label: "Texting Info" },
      ].map((step, index) => (
        <div key={step.id} className="flex items-center">
          {/* Step Circle */}
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 1 }}
              animate={{
                scale: currentStep === step.id ? 1.1 : 1,
                backgroundColor:
                  currentStep === step.id
                    ? "#F97316"
                    : currentStep > step.id
                    ? "#D1D5DB" 
                    : "#FFFFFF",
                borderColor: currentStep >= step.id ? "#F97316" : "#D1D5DB",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-8 h-8 rounded-full flex items-center justify-center border-2 text-sm font-medium text-gray-700"
            >
              {step.id}
            </motion.div>
            <span
              className={`mt-2 text-xs ${
                currentStep === step.id
                  ? "font-semibold text-blue-600"
                  : "text-gray-500"
              }`}
            >
              {step.label}
            </span>
          </div>

          {index < 3 && (
            <div className="flex items-center">
              <img
                src={lineImageSrc}
                alt="Connector Line"
                className={`w-full h-full object-contain ${
                  currentStep > step.id ? "opacity-100" : "opacity-50"
                }`} style={{
                    paddingBottom: "45px"
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
