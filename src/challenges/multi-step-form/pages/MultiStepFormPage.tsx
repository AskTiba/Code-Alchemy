import { useState } from "react";
import { Button } from "@/components/ui/button";
import PersonalInfo from "../components/PersonalInfo";
import SelectPlan from "../components/SelectPlan";
import PickAddons from "../components/PickAddons";
import FinishUp from "../components/FinishUp";
import Appreciation from "../components/Appreciation";
import image from "../assets/images/bg-sidebar-mobile.svg";

export function MultiStepFormPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleGoBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <main className="min-w-screen min-h-screen bg-blue-100 relative">
      <img
        src={image}
        alt=""
        className="w-full object-cover absolute top-0 left-0 z-0"
      />
      <section className="my-8 flex justify-center items-center gap-4 relative z-10">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex items-center gap-4">
            <span
              className={`size-8 flex justify-center font-bold items-center border-2 rounded-full ${
                currentStep === step ? "bg-white text-blue-950 " : "bg-transparent text-white"
              }`}
            >
              {step}
            </span>
            <div className="hidden md:flex flex-col">
              <span className="text-sm text-gray-400">STEP {step}</span>
            </div>
          </div>
        ))}
      </section>

      <div className="relative z-10 px-4 top-1">
        {currentStep === 1 && <PersonalInfo />}
        {currentStep === 2 && <SelectPlan />}
        {currentStep === 3 && <PickAddons />}
        {currentStep === 4 && <FinishUp />}
        {currentStep === 5 && <Appreciation />}
      </div>

      <div className={`bg-white w-full fixed bottom-0 left-0 p-6 flex items-center ${currentStep === 1 ? "justify-end" : "justify-between"}`}>
        {currentStep > 1 && (
          <Button className="text-gray-400" onClick={handleGoBack}>
            Go Back
          </Button>
        )}
        {currentStep < 5 && (
          <Button className="" onClick={handleNextStep}>
            {currentStep === 4 ? "Confirm" : "Next Step"}
          </Button>
        )}
      </div>
    </main>
  );
}
