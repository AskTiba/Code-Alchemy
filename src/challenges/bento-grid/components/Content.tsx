import content from "../assets/images/illustration-ai-content.webp";

export default function Content() {
  return (
    <main className="p-6 text-start bg-yellow-300 rounded-2xl grid grid-cols-1 gap-6">
      <p className="text-3xl font-bold">Write your content using AI.</p>
      <div className="w-5/7">
        <img src={content} alt="" className="" />
      </div>
    </main>
  );
}
