import post from "../assets/images/illustration-create-post.webp";

export default function CreatePost() {
  return (
    <main className="bg-pink-50 rounded-2xl px-6 py-6 text-start">
      <p className="text-3xl font-bold">
        Create and schedule content{" "}
        <span className="text-purple-500 italic">quicker</span>.
      </p>
      <div className="mt-4 w-3/5">
        <img src={post} alt="" className="" />
      </div>
    </main>
  );
}
