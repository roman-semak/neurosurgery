"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2Icon, Loader2Icon, TriangleAlertIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  appointmentFormDefaultValues,
  appointmentFormSchema,
  type AppointmentFormValues,
} from "@/lib/validations/appointment-schema";

export function AppointmentForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: appointmentFormDefaultValues,
  });

  async function onSubmit(values: AppointmentFormValues) {
    setServerError(null);

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        setServerError(
          body?.message ?? "Не вдалося надіслати заявку. Спробуйте пізніше."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      reset(appointmentFormDefaultValues);
    } catch {
      setServerError("Не вдалося надіслати заявку. Перевірте з'єднання з інтернетом.");
      setStatus("error");
    }
  }

  function onInvalid(invalidErrors: typeof errors) {
    const firstField = Object.keys(invalidErrors)[0] as
      | keyof AppointmentFormValues
      | undefined;
    if (firstField) {
      setFocus(firstField);
    }
  }

  if (status === "success") {
    return (
      <Alert
        role="status"
        aria-live="polite"
        className="border-accent-bright/30 bg-white/70 text-left backdrop-blur-glass"
      >
        <CheckCircle2Icon className="text-success" aria-hidden="true" />
        <AlertTitle className="text-success">Заявку надіслано</AlertTitle>
        <AlertDescription className="text-foreground/80">
          Дякуємо! Ми отримали вашу заявку та зв&apos;яжемось з вами найближчим
          часом, щоб узгодити зручний час консультації.
        </AlertDescription>
        <Button
          variant="outline"
          className="mt-3"
          onClick={() => setStatus("idle")}
        >
          Надіслати ще одну заявку
        </Button>
      </Alert>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      className="mx-auto max-w-xl text-left"
    >
      <FieldGroup>
        {status === "error" && serverError ? (
          <Alert role="alert" variant="destructive">
            <TriangleAlertIcon aria-hidden="true" />
            <AlertTitle>Щось пішло не так</AlertTitle>
            <AlertDescription>{serverError}</AlertDescription>
          </Alert>
        ) : null}

        <Field data-invalid={!!errors.fullName}>
          <FieldLabel htmlFor="fullName">
            Ім&apos;я та прізвище <span aria-hidden="true">*</span>
          </FieldLabel>
          <FieldContent>
            <Input
              id="fullName"
              autoComplete="name"
              aria-required="true"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              {...register("fullName")}
            />
            <FieldError id="fullName-error" errors={[errors.fullName]} />
          </FieldContent>
        </Field>

        <Field data-invalid={!!errors.phone}>
          <FieldLabel htmlFor="phone">
            Номер телефону <span aria-hidden="true">*</span>
          </FieldLabel>
          <FieldContent>
            <Input
              id="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+380XXXXXXXXX"
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              {...register("phone")}
            />
            <FieldError id="phone-error" errors={[errors.phone]} />
          </FieldContent>
        </Field>

        <Field data-invalid={!!errors.message}>
          <FieldLabel htmlFor="message">
            Опис проблеми <span aria-hidden="true">*</span>
          </FieldLabel>
          <FieldContent>
            <Textarea
              id="message"
              rows={5}
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              {...register("message")}
            />
            <FieldError id="message-error" errors={[errors.message]} />
          </FieldContent>
        </Field>

        {/* Honeypot: hidden from real visitors, but bots that autofill every field will trip it. */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Залиште це поле порожнім</label>
          <input
            id="website"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>

        <Field
          orientation="horizontal"
          data-invalid={!!errors.consent}
        >
          <Controller
            control={control}
            name="consent"
            render={({ field }) => (
              <Checkbox
                id="consent"
                checked={field.value}
                onCheckedChange={(checked) => field.onChange(checked === true)}
                onBlur={field.onBlur}
                aria-required="true"
                aria-invalid={!!errors.consent}
                aria-describedby={errors.consent ? "consent-error" : undefined}
              />
            )}
          />
          <FieldContent>
            <FieldLabel htmlFor="consent" className="font-normal">
              Я погоджуюсь на обробку персональних даних <span aria-hidden="true">*</span>
            </FieldLabel>
            <FieldDescription>
              Відповідно до{" "}
              <a href="/privacy">політики конфіденційності</a>.
            </FieldDescription>
            <FieldError id="consent-error" errors={[errors.consent]} />
          </FieldContent>
        </Field>

        <Button type="submit" size="lg" className="h-12 w-full px-6 text-base" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2Icon className="animate-spin" aria-hidden="true" />
              Надсилаємо...
            </>
          ) : (
            "Записатися на консультацію"
          )}
        </Button>
      </FieldGroup>
    </form>
  );
}
