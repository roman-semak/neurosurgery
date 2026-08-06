import { NextResponse } from "next/server";

import { appointmentFormSchema } from "@/lib/validations/appointment-schema";
import { sendAppointmentEmail } from "@/lib/email/resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { success: false, message: "Некоректний запит" },
      { status: 400 }
    );
  }

  const parsed = appointmentFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Перевірте поля форми",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  // Honeypot tripped: pretend success so bots don't learn, but skip sending.
  if (parsed.data.website) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  try {
    const result = await sendAppointmentEmail(parsed.data);
    return NextResponse.json(
      { success: true, stub: result.stub },
      { status: 200 }
    );
  } catch (error) {
    console.error("[appointment] send failed", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Не вдалося надіслати заявку. Спробуйте пізніше або зателефонуйте нам.",
      },
      { status: 500 }
    );
  }
}
