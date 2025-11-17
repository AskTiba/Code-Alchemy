import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import multiStepFormPreview from "../challenges/multi-step-form/docs/preview.jpg";
import bentoGridPreview from "../challenges/bento-grid/docs/preview.jpg";

const challenges = [
  {
    title: "Multi-Step Form",
    description: "A responsive multi-step form with client-side validation.",
    path: "/challenges/multi-step-form",
    image: multiStepFormPreview,
  },
  {
    title: "Bento Grid",
    description: "A responsive bento grid layout for showcasing features.",
    path: "/challenges/bento-grid",
    image: bentoGridPreview,
  },
];

export function ChallengeGallery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Frontend Mentor Challenges
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {challenges.map((challenge) => (
          <Link
            to={challenge.path}
            key={challenge.path}
            className="no-underline text-current"
          >
            <Card className="h-full flex flex-col transition-all hover:border-primary">
              <CardHeader>
                <CardTitle>{challenge.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <img
                  src={challenge.image}
                  alt={challenge.title}
                  className="rounded-md mb-4"
                />
                <CardDescription>{challenge.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <p>View Challenge</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}