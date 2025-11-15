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

interface PersonalInfoProps {
  onNext: () => void;
  onSaveData: (data: PersonalInfoSchema) => void;
}

export default function PersonalInfo({ onNext, onSaveData }: PersonalInfoProps) {
  const form = useForm<PersonalInfoSchema>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
  });

  const onSubmit = (data: PersonalInfoSchema) => {
    onSaveData(data);
    onNext();
  };

  return (
    <main className="bg-[#e0d3c2] p-4 rounded-lg">
      <h2 className="text-2xl font-bold mt-4">Personal Info</h2>
      <p className="my-2 text-xl">
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
                  type="text"
                  className="border border-[#3d2b1f] py-2 rounded-lg"
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
                  className="border border-[#3d2b1f] py-2 rounded-lg"
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
                  className="border border-[#3d2b1f] py-2 rounded-lg"
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
