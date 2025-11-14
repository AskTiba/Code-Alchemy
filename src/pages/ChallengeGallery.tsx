import { Link } from "react-router-dom";

export function ChallengeGallery() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Frontend Mentor Challenges</h1>
      <ul>
        <li>
          <Link to="/challenges/multi-step-form">Multi-Step Form</Link>
        </li>
        <li>
          <Link to="/challenges/bento-grid">Bento Grid</Link>
        </li>
      </ul>
    </div>
  );
}
