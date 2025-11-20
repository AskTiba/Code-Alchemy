import accounts from "../assets/images/illustration-multiple-platforms.webp";

export default function MultipleAccounts() {
  return (
    <main className="bg-white rounded-2xl p-3 ">
      <div className="md:my-3">
        <img src={accounts} alt="" className="" />
      </div>
      <p className="text-black font-bold text-2xl md:text-3xl text-start p-3 md:px-5">
        Manage multiple accounts and platforms.
      </p>
    </main>
  );
}
