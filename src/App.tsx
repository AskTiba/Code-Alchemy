import { Routes, Route } from "react-router-dom";
import { ChallengeGallery } from "./pages/ChallengeGallery";
import { MultiStepFormPage } from "./challenges/multi-step-form/pages/MultiStepFormPage";
import { BentoGridPage } from "./challenges/bento-grid/pages/BentoGridPage";
import "./App.css";

function App() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center">
      <Routes>
        <Route path="/" element={<ChallengeGallery />} />
        <Route
          path="/challenges/multi-step-form"
          element={<MultiStepFormPage />}
        />
        <Route
          path="/challenges/bento-grid"
          element={<BentoGridPage />}
        />
      </Routes>
    </main>
  );
}

export default App;
