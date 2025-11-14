import accounts from "../assets/images/illustration-multiple-platforms.webp";

export default function MultipleAccounts() {
  return (
    <main className="bg-white rounded-2xl p-3 ">
      <div className="">
        <img src={accounts} alt="" className="" />
      </div>
      <p className="text-black font-bold text-2xl text-start p-3">
        Manage multiple accounts and platforms.
      </p>
    </main>
  );
}
