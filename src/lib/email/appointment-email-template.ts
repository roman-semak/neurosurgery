import type { AppointmentFormValues } from "@/lib/validations/appointment-schema";

type AppointmentEmailData = Pick<
  AppointmentFormValues,
  "fullName" | "phone" | "message"
>;

export function buildAppointmentEmailSubject(data: AppointmentEmailData) {
  return `Нова заявка на консультацію — ${data.fullName}`;
}

export function buildAppointmentEmailText(data: AppointmentEmailData) {
  return [
    "Надійшла нова заявка на консультацію з сайту.",
    "",
    `Ім'я та прізвище: ${data.fullName}`,
    `Телефон: ${data.phone}`,
    "",
    "Опис проблеми:",
    data.message,
  ].join("\n");
}
