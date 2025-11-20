import growth from "../assets/images/illustration-audience-growth.webp";

export default function Audience() {
  return (
    <main className="py-3 md:py-3.5 px-6 border text-start bg-white rounded-2xl grid grid-cols-1 gap-1 md:gap-2">
      <h1 className="font-semibold md:my-1">&gt;56%</h1>
      <p className="font-semibold text-xl md:text-lg md:my-1 md:text-center">
        faster audience growth
      </p>
      <div className="w-4/5 my-4 md:place-self-center">
        <img src={growth} alt="" className="" />
      </div>
    </main>
  );
}
