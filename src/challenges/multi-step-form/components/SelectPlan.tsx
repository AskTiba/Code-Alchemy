import { Controller, useForm } from "react-hook-form";
import { multiStepFormSchema } from "../features/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Switch } from "../../../components/ui/switch";
import { Label } from "../../../components/ui/label";

import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";

const selectPlanSchema = multiStepFormSchema.pick({
  selectPlan: true,
});
type SelectPlanSchema = z.infer<typeof selectPlanSchema>;

const plans = [
  {
    id: "arcade",
    icon: iconArcade,
    monthlyPrice: 9,
    yearlyPrice: 90,
    description: "2 months free",
  },
  {
    id: "advanced",
    icon: iconAdvanced,
    monthlyPrice: 12,
    yearlyPrice: 120,
    description: "2 months free",
  },
  {
    id: "pro",
    icon: iconPro,
    monthlyPrice: 15,
    yearlyPrice: 150,
    description: "2 months free",
  },
];

export default function SelectPlan() {
  const form = useForm<SelectPlanSchema>({
    resolver: zodResolver(selectPlanSchema),
    defaultValues: {
      selectPlan: {
        planType: "arcade",
        billingCycle: "monthly",
      },
    },
  });

  const onSubmit = (data: SelectPlanSchema) => {
    console.log("Selected Plan Submitted:", data);
  };

  return (
    <main className="bg-white p-4 rounded-lg">
      <h2 className="text-2xl font-bold mt-4">Select your plan</h2>
      <p className="my-2 text-lg text-gray-500">
        You have the option of monthly or yearly billing.
      </p>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          {plans.map((plan) => (
            <Controller
              key={plan.id}
              control={form.control}
              name="selectPlan.planType"
              render={({ field }) => {
                const isSelected = field.value === plan.id;
                const isYearly =
                  form.watch("selectPlan.billingCycle") === "yearly";
                return (
                  <div
                    className={`flex flex-col justify-between border p-4 rounded-lg cursor-pointer w-full md:w-1/3 ${
                      isSelected
                        ? "border-blue-950 bg-purple-50"
                        : "border-gray-400"
                    }`}
                    onClick={() => field.onChange(plan.id)}
                  >
                    <input
                      type="radio"
                      id={plan.id}
                      value={plan.id}
                      checked={isSelected}
                      onChange={() => field.onChange(plan.id)}
                      className="sr-only" // Visually hide the radio button
                      ref={field.ref}
                    />
                    <label
                      htmlFor={plan.id}
                      className="flex md:flex-col gap-4 h-full cursor-pointer"
                    >
                      <img
                        src={plan.icon}
                        alt={`${plan.id} icon`}
                        className="w-14 h-14"
                      />
                      <div className="flex flex-col gap-1">
                        <h3 className="font-medium text-base">
                          {plan.id.charAt(0).toUpperCase() + plan.id.slice(1)}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {isYearly
                            ? `$${plan.yearlyPrice}/yr`
                            : `$${plan.monthlyPrice}/mo`}
                        </p>
                        {isYearly && (
                          <p className="text-sm font-medium text-primary">
                            {plan.description}
                          </p>
                        )}
                      </div>
                    </label>
                  </div>
                );
              }}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 bg-blue-50 p-6 rounded-lg mt-6">
          <Label
            htmlFor="billing-cycle"
            className={`${
              form.watch("selectPlan.billingCycle") === "monthly"
                ? "text-purple-700 font-bold"
                : "text-gray-500"
            }`}
          >
            Monthly
          </Label>
          <Controller
            control={form.control}
            name="selectPlan.billingCycle"
            render={({ field }) => (
              <Switch
                id="billing-cycle"
                checked={field.value === "yearly"}
                onCheckedChange={(checked) =>
                  field.onChange(checked ? "yearly" : "monthly")
                }
                className="data-[state=checked]:bg-[#FF00AA] data-[state=unchecked]:bg-[#222222]"
                thumbClassName="data-[state=checked]:bg-[#00FFAA] data-[state=unchecked]:bg-[#FFD700]"
              />
            )}
          />
          <Label
            htmlFor="billing-cycle"
            className={`${
              form.watch("selectPlan.billingCycle") === "yearly"
                ? "text-purple-700 font-bold"
                : "text-gray-500"
            }`}
          >
            Yearly
          </Label>
        </div>
      </form>
    </main>
  );
}
