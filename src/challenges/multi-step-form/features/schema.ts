import { z } from "zod";

export const multiStepFormSchema = z.object({
  name: z.string().min(3).max(20),
  email: z.email(),
  phoneNumber: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  selectPlan: z.object({
    planType: z.enum(["arcade", "advanced", "pro"]),
    billingCycle: z.enum(["monthly", "yearly"]),
  }),
  addons: z.object({
    onlineService: z.boolean(),
    largeStorage: z.boolean(),
    customizableProfile: z.boolean(),
  }),
});

export type MultiStepFormSchema = z.infer<typeof multiStepFormSchema>;
