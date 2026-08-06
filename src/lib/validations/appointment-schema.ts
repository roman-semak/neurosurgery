import { z } from "zod";

const UA_PHONE_REGEX = /^(?:\+380|380|0)\d{9}$/;

export const appointmentFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Вкажіть ім'я та прізвище")
    .max(100, "Занадто довге значення"),
  phone: z
    .string()
    .trim()
    .transform((value) => value.replace(/[\s\-()]/g, ""))
    .pipe(
      z
        .string()
        .regex(
          UA_PHONE_REGEX,
          "Введіть коректний номер телефону, напр. +380XXXXXXXXX"
        )
    ),
  message: z
    .string()
    .trim()
    .min(10, "Опишіть проблему детальніше (мінімум 10 символів)")
    .max(2000, "Занадто довгий опис"),
  consent: z
    .boolean()
    .refine((value) => value === true, "Потрібна згода на обробку персональних даних"),
  // Honeypot: real visitors never fill this in; bots that autofill every field do.
  website: z.string().max(0, "").optional(),
});

export type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

export const appointmentFormDefaultValues: z.input<typeof appointmentFormSchema> = {
  fullName: "",
  phone: "",
  message: "",
  consent: false,
  website: "",
};
