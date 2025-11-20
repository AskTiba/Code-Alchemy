import grow from "../assets/images/illustration-grow-followers.webp";

export default function GrowFollowers() {
  return (
    <main className="bg-purple-500 rounded-2xl py-8 grid grid-cols-1 md:grid-cols-2 md:items-center">
      <div className="place-self-center w-2/3 mb-4">
        <img src={grow} alt="" className="" />
      </div>
      <p className="text-white text-4xl px-6 font-medium text-center md:-ml-5 md:text-left md:px-0">
        Grow followers with non-stop content.
      </p>
    </main>
  );
}
