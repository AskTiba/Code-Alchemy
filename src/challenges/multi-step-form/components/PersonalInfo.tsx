import { Controller, useForm } from "react-hook-form";
import { multiStepFormSchema } from "../features/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

const personalInfoSchema = multiStepFormSchema.pick({
  name: true,
  email: true,
  phoneNumber: true,
});

type PersonalInfoSchema = z.infer<typeof personalInfoSchema>;

export default function PersonalInfo() {
  const form = useForm<PersonalInfoSchema>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
  });

  const onSubmit = (data: PersonalInfoSchema) => {
    console.log("Personal Info Submitted:", data);
  };

  return (
    <main className="bg-white p-4 rounded-lg">
      <h2 className="text-2xl font-bold mt-4">Personal Info</h2>
      <p className="my-2 text-lg text-gray-500">
        Please provide your name, email address, and phone number.
      </p>
      <form className="my-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <Controller
            control={form.control}
            name="name"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                <input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  type="text"placeholder="eg. Mwesigwe Redempta"
                  className="border border-[#3d2b1f] py-2 rounded-lg px-3"
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Email Address</FieldLabel>
                <input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  type="email"
                  placeholder="eg. redjade@forever.com"
                  className="border border-[#3d2b1f] py-2 rounded-lg px-3"
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            control={form.control}
            name="phoneNumber"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Phone Number</FieldLabel>
                <input
                  id={field.name}
                  {...field}
                  aria-invalid={fieldState.invalid}
                  type="text"
                  placeholder="eg. +256 783 568 231"
                  className="border border-[#3d2b1f] py-2 rounded-lg px-3"
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </FieldGroup>
      </form>
    </main>
  );
}
