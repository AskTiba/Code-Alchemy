import schdule from "../assets/images/illustration-schedule-posts.webp";

export default function Schedule() {
  return (
    <main className="bg-purple-300 rounded-2xl px-6 py-6 grid grid-cols-1 gap-4">
      <p className="text-2xl font-bold text-center ">
        Schedule to social media.
      </p>
      <div className="">
        <img src={schdule} alt="" className="" />
      </div>
      <p className="font-medium text-xl text-center">
        Optimize post timings to publish content at the perfect time for your
        audience.
      </p>
    </main>
  );
}
