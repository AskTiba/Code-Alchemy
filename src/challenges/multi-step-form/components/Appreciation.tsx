import thanks from "../assets/images/icon-thank-you.svg";
export default function Appreciation() {
  return (
    <main className="bg-white p-4 flex flex-col rounded-lg text-center gap-4 py-20 md:mt-14">
      <img src={thanks} alt="" className="mx-auto" />
      <h2 className="text-2xl font-bold mt-4">Thank you!</h2>
      <p className="text-base text-gray-500 px-4">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </main>
  );
}
