export interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Partial<Record<"name" | "email" | "message", string>>;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(body: ContactPayload): ValidationResult {
  const errors: ValidationResult["errors"] = {};

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name) errors.name = "Please enter your name.";
  if (!email) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!message) {
    errors.message = "Please add a short message.";
  } else if (message.length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
