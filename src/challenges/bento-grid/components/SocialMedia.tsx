import rating from "../assets/images/illustration-five-stars.webp";

export default function SocialMedia() {
  return (
    <main className="bg-purple-500 text-white py-8 px-4 rounded-2xl grid grid-cols-1 gap-2">
      <p className="text-5xl font-bold">
        Social Media <span className="text-yellow-500 font-semibold">10x</span> Faster with AI
      </p>
      <div className="w-3/5 place-self-center mt-4">
        <img src={rating} alt="" className="" />
      </div>
      <p className="text-xl font-medium">Over 4,000 5-star reviews</p>
    </main>
  );
}
