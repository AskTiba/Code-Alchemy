import checkmark from "../assets/images/icon-checkmark.svg";

import { Controller, useForm } from "react-hook-form";
import { multiStepFormSchema } from "../features/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const addonsSchema = multiStepFormSchema.pick({
  addons: true,
});

type AddonsSchema = z.infer<typeof addonsSchema>;

const addons = [
  {
    id: "online-service",
    name: "onlineService",
    title: "Online service",
    description: "Access to multiplayer games",
    price: 1,
  },
  {
    id: "larger-storage",
    name: "largeStorage",
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    id: "customizable-profile",
    name: "customizableProfile",
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    price: 2,
  },
] as const;

export default function PickAddons() {
  const form = useForm<AddonsSchema>({
    resolver: zodResolver(addonsSchema),
    defaultValues: {
      addons: {
        onlineService: false,
        largeStorage: false,
        customizableProfile: false,
      },
    },
  });

  const onSubmit = (data: AddonsSchema) => {
    console.log("Add-ons Submitted:", data);
  };

  return (
    <main className="bg-white p-4 rounded-lg ">
      <h2 className="text-2xl font-bold mt-4">Pick add-ons</h2>
      <p className="my-2 text-lg text-gray-500">
        Add-ons help enhance your gaming experience.
      </p>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 text-sm mt-6">
          {addons.map((addon) => (
            <Controller
              key={addon.id}
              control={form.control}
              name={`addons.${addon.name}`}
              render={({ field }) => {
                const isSelected = field.value;
                return (
                  <div
                    className={`flex items-center gap-4 border p-4 rounded-lg cursor-pointer ${
                      isSelected
                        ? "border-purple-700 bg-purple-50"
                        : "border-gray-500"
                    }`}
                    onClick={() => field.onChange(!field.value)}
                  >
                    <div className="relative h-5 w-5">
                      <input
                        type="checkbox"
                        id={addon.id}
                        checked={isSelected}
                        onChange={() => field.onChange(!field.value)}
                        className="absolute opacity-0 h-0 w-0"
                        ref={field.ref}
                      />
                      <span
                        className={`h-5 w-5 inline-block rounded border ${
                          isSelected
                            ? "bg-purple-700 border-purple-700"
                            : "border-gray-500"
                        }`}
                      ></span>
                      {isSelected && (
                        <img
                          src={checkmark}
                          alt=""
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                      )}
                    </div>
                    <label htmlFor={addon.id} className="grow">
                      <h3 className="font-bold text-base">{addon.title}</h3>
                      <p className="text-sm font-medium text-gray-500">
                        {addon.description}
                      </p>
                    </label>
                    <p className="ml-auto text-gray-500 font-bold">{`+$${addon.price}/mo`}</p>
                  </div>
                );
              }}
            />
          ))}
        </div>
      </form>
    </main>
  );
}
