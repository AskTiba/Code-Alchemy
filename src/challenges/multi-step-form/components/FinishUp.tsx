export default function FinishUp() {
  return (
    <main className="bg-white p-4 rounded-lg">
      <h2 className="text-2xl font-bold mt-4">Finishing up</h2>
      <p className="my-2  text-gray-500">
        Double-check everything looks OK before confirming.
      </p>
      <section className="bg-blue-50 flex flex-col gap-4 p-4 rounded-lg mt-8">
        <div className="flex justify-between items-center">
          <article className="">
            <div className="font-medium text-base">Arcade(Yearly)</div>
            <div className="underline text-gray-500 text-sm">Change</div>
          </article>
          <div className="text-sm font-medium">$90/yr</div>
        </div>
        <hr className="border border-gray-500ay" />
        <div className="flex justify-between items-center text-sm">
          <article className="">
            <div className="text-gray-500 ">Online service</div>
          </article>
          <div className="text-sm text-gray-500">+$10/yr</div>
        </div>
        <div className="flex justify-between items-center text-sm">
          <article className="">
            <div className="text-gray-500 ">Larger storage</div>
          </article>
          <div className="text-sm  text-gray-500">+$20/yr</div>
        </div>
      </section>

      <div className="flex justify-between items-center p-4">
        <article className="">
          <div className="text-gray-500 text-sm">Total(per year)</div>
        </article>
        <div className="font-medium">$120/yr</div>
      </div>
    </main>
  );
}
