import { Resend } from "resend";

import { CONTACT } from "@/lib/content/site";
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
  // Comma-separated, so a tester can receive copies: "a@x.com,b@y.com".
  const to = (process.env.DOCTOR_EMAIL_TO || CONTACT.email)
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);
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
