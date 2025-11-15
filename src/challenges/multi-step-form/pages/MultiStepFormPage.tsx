import { Button } from "@/components/ui/button";
import PersonalInfo from "../components/PersonalInfo";

export function MultiStepFormPage() {
  return (
    <main className="min-w-screen min-h-screen p-4 bg-green-500">
      <PersonalInfo />
      <Button className="fixed bg-blue-950 bottom-4 right-4 z-50">
        Next Step
      </Button>
    </main>
  );
}
