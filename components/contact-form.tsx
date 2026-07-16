"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { validateContactPayload, type ValidationResult } from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [errors, setErrors] = React.useState<ValidationResult["errors"]>({});
  const [formError, setFormError] = React.useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const validation = validateContactPayload(data);
    setErrors(validation.errors);
    if (!validation.valid) return;

    setStatus("submitting");
    setFormError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setFormError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-secondary/40 px-6 py-16 text-center"
        role="status"
      >
        <CheckCircle2 className="h-10 w-10 text-primary" />
        <h3 className="font-display text-xl font-semibold">Message sent</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thanks for reaching out — I read every message personally and
          typically reply within one business day.
        </p>
        <Button variant="outline" size="sm" className="mt-2" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">
            Name <span className="text-primary">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your full name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-destructive">
              {errors.name}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-primary">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-destructive">
              {errors.email}
            </p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-primary">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          minLength={10}
          placeholder="Tell me a bit about the role or project you have in mind..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <div
          className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
          role="alert"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {formError}
        </div>
      )}

      <Magnetic strength={0.15} className="inline-block w-full sm:w-auto">
        <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send message"
          )}
        </Button>
      </Magnetic>
    </form>
  );
}
