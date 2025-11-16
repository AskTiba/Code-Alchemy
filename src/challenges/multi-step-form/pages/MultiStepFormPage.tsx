import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import PersonalInfo from "../components/PersonalInfo";
import SelectPlan from "../components/SelectPlan";
import PickAddons from "../components/PickAddons";
import FinishUp from "../components/FinishUp";
import Appreciation from "../components/Appreciation";
import mobileImage from "../assets/images/bg-sidebar-mobile.svg";
import desktopImage from "../assets/images/bg-sidebar-desktop.svg";

export function MultiStepFormPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [maxStepReached, setMaxStepReached] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNextStep = () => {
    if (currentStep < 5) {
      const newStep = currentStep + 1;
      if (newStep > maxStepReached) {
        setMaxStepReached(newStep);
      }
      setCurrentStep(newStep);
    }
  };

  const handleGoBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (step: number) => {
    if (step <= maxStepReached) {
      setCurrentStep(step);
    }
  };

  return (
    <main className="w-screen h-screen bg-blue-100 relative md:flex md:justify-center md:items-center md:p-10">
      <div className="md:flex md:h-[568px] md:w-[940px] md:bg-white md:rounded-lg md:shadow-lg md:p-4">
        {/* Sidebar Wrapper */}
        <div className="w-full md:w-[274px] md:relative">
          {/* Existing Image */}
          <img
            src={isMobile ? mobileImage : desktopImage}
            alt=""
            className="w-full object-cover absolute top-0 left-0 z-0 md:static md:rounded-2xl md:h-full"
          />
          {/* Existing Step Indicators */}
          <section className="my-8 flex justify-center md:-mt-2 items-center gap-4 relative z-10 md:absolute md:top-0 md:left-0 md:w-full md:h-full md:flex-col md:items-start md:justify-start md:p-8 md:gap-5">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className="flex items-center gap-4 cursor-pointer"
                onClick={() => handleStepClick(step)}
              >
                <span
                  className={`size-8 flex justify-center font-bold items-center border-2 rounded-full ${
                    currentStep === step || (currentStep === 5 && step === 4)
                      ? "bg-white text-blue-950 "
                      : "bg-transparent text-white"
                  }`}
                >
                  {step}
                </span>
                <div className="hidden md:flex flex-col ">
                  <span className="text-sm text-gray-400">STEP {step}</span>
                  <span className="text-white font-bold ">
                    {step === 1 && "YOUR INFO"}
                    {step === 2 && "SELECT PLAN"}
                    {step === 3 && "ADD-ONS"}
                    {step === 4 && "SUMMARY"}
                  </span>
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* Content Wrapper */}
        <div className="md:flex-1 md:flex md:flex-col md:justify-between md:px-16 md:py-10 md:relative">
          {/* Existing Form Content */}
          <div className="relative z-10 md:-mt-12 px-4 top-1 md:static md:p-0">
            {currentStep === 1 && <PersonalInfo />}
            {currentStep === 2 && <SelectPlan />}
            {currentStep === 3 && <PickAddons />}
            {currentStep === 4 && <FinishUp />}
            {currentStep === 5 && <Appreciation />}
          </div>

          {/* Existing Navigation */}
          {currentStep < 5 && (
            <div
              className={`bg-white w-full fixed bottom-0 left-0 p-6 flex items-center ${
                currentStep === 1 ? "justify-end" : "justify-between"
              } md:absolute md:-bottom-5 md:left-16  md:bg-transparent md:z-50`}
            >
              {currentStep > 1 && (
                <Button
                  className="text-gray-400 md:absolute md:bottom-8 md:left-4  md:bg-transparent md:z-50"
                  onClick={handleGoBack}
                >
                  Go Back
                </Button>
              )}
              <Button
                className="md:absolute md:bottom-8 md:right-36  md:bg-transparent md:z-50"
                onClick={handleNextStep}
              >
                {currentStep === 4 ? "Confirm" : "Next Step"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
