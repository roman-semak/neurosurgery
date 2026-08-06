import { Resend } from "resend";

import type { AppointmentFormValues } from "@/lib/validations/appointment-schema";
import {
  buildAppointmentEmailSubject,
  buildAppointmentEmailText,
} from "@/lib/email/appointment-email-template";

type AppointmentEmailData = Pick<
  AppointmentFormValues,
  "fullName" | "phone" | "message"
>;

export async function sendAppointmentEmail(data: AppointmentEmailData) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.DOCTOR_EMAIL_TO ?? "doctor@example.com";
  const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
  const subject = buildAppointmentEmailSubject(data);
  const text = buildAppointmentEmailText(data);

  if (!apiKey) {
    console.log("[Resend stub] RESEND_API_KEY не задано — заявку не надіслано, лише залоговано:", {
      to,
      from,
      subject,
      ...data,
    });
    return { stub: true as const };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({ from, to, subject, text });

  if (error) {
    throw new Error(error.message);
  }

  return { stub: false as const };
}
