import growth from "../assets/images/illustration-audience-growth.webp"

export default function Audience() {
  return (
    <main className="py-3 px-6 border text-start bg-white rounded-2xl grid grid-cols-1 gap-1">
      <h1 className="font-bold">&gt;56%</h1>
      <p className="font-semibold text-xl"> faster audience growth</p>
      <div className="w-3/5 my-4">
        <img src={growth} alt="" className="" />
      </div>
    </main>
  );
}
