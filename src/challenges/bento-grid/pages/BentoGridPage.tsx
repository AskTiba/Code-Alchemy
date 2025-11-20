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
    <main className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-auto gap-4 border md:p-20">
      <div className="md:col-span-2 md:row-span-1 md:col-start-2 md:row-start-1">
        <SocialMedia />
      </div>
      <div className="md:col-span-1 md:row-span-1 md:col-start-2 md:row-start-2">
        <MultipleAccounts />
      </div>
      <div className="md:col-span-1 md:row-span-1 md:col-start-3 md:row-start-2">
        <Maintain />
      </div>
      <div className="md:col-span-1 md:row-span-3 md:col-start-4 md:row-start-1">
        <Schedule />
      </div>
      <div className="md:col-span-2 md:row-span-1 md:col-start-3 md:row-start-3">
        <GrowFollowers />
      </div>
      <div className="md:col-span-1 md:row-span-1 md:col-start-2 md:row-start-3">
        <Audience />
      </div>
      <div className="md:col-span-1 md:row-span-1 md:col-start-1 md:row-start-1">
        <CreatePost />
      </div>
      <div className="md:col-span-1 md:row-span-2 md:col-start-1 md:row-start- md:flex md:items-end">
        <Content />
      </div>
    </main>
  );
}
