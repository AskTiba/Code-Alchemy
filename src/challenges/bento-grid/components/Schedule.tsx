import schdule from "../assets/images/illustration-schedule-posts.webp";

export default function Schedule() {
  return (
    <main className="bg-purple-200 rounded-2xl px-6 py-6 grid grid-cols-1 gap-4 md:gap-8 md:py-10">
      <p className="text-2xl font-bold text-center md:text-left md:text-3xl">
        Schedule to social media.
      </p>
      <div className="md:scale-110 md:my-4.5">
        <img src={schdule} alt="" className="" />
      </div>
      <p className="font-medium text-xl text-center md:text-left">
        Optimize post timings to publish content at the perfect time for your
        audience.
      </p>
    </main>
  );
}
