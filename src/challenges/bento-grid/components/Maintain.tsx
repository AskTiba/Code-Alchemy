import schedule from "../assets/images/illustration-consistent-schedule.webp";

export default function Maintain() {
  return (
    <main className="px-6 pt-4 rounded-2xl bg-yellow-500 flex flex-col gap-4">
      <p className="text-2xl md:text-3xl text-start font-bold w-4/5">
        Maintain a consistent posting schedule.
      </p>
      <div className="w-2/3">
        <img src={schedule} alt="" className="" />
      </div>
    </main>
  );
}
