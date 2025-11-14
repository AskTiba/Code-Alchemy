import Audience from "../components/Audience";
import Content from "../components/Content";
import CreatePost from "../components/CreatePost";
import GrowFollowers from "../components/GrowFollowers";
import Maintain from "../components/Maintain";
import MultipleAccounts from "../components/MultipleAccounts";
import Schedule from "../components/Schedule";
import SocialMedia from "../components/SocialMedia";

export function BentoGridPage() {
  return (
    <main className="grid grid-cols-1 gap-4">
      <SocialMedia />
      <MultipleAccounts />
      <Maintain />
      <Schedule />
      <GrowFollowers />
      <Audience/>
      <CreatePost/>
      <Content/>
    </main>
  );
}
