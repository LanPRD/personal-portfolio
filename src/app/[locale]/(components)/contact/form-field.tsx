"use client";

import { cn } from "@/lib/css";
import type { ContactFormData } from "@/lib/validations/contact-form";
import { useId } from "react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

interface FormFieldProps {
  label: string;
  name: keyof ContactFormData;
  type?: "text" | "email" | "textarea";
  rows?: number;
  register: UseFormRegister<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
  required?: boolean;
}

export function FormField({ label, name, type = "text", rows, register, errors, required = true }: FormFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const error = errors[name];

  const baseClasses = cn(
    "w-full bg-(--input-color) text-(--text-color) text-(length:--normal-font-size)",
    "border-none outline-none p-[0.25rem_0.5rem_0.5rem_0]"
  );

  return (
    <div
      className={cn(
        "bg-(--input-color) rounded-lg p-[0.75rem_1rem_0.25rem]",
        "transition-all duration-100",
        "focus-within:ring-4 focus-within:ring-(--first-color) focus-within:ring-opacity-30",
        "focus-within:border-2 focus-within:border-(--first-color)",
        error && "ring-2 ring-red-500 ring-opacity-30 border-2 border-red-500"
      )}
    >
      <label htmlFor={id} className="text-(length:--smaller-font-size) text-(--title-color) cursor-pointer block mb-1">
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-label="required">
            *
          </span>
        )}
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          rows={rows ?? 7}
          className={cn(baseClasses, "resize-none")}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          aria-required={required}
          {...register(name)}
        />
      ) : (
        <input
          id={id}
          type={type}
          className={baseClasses}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          aria-required={required}
          autoComplete={name === "name" ? "name" : name === "email" ? "email" : undefined}
          {...register(name)}
        />
      )}

      {error && (
        <span
          id={errorId}
          className="text-red-500 text-(length:--smaller-font-size) mt-1 block"
          role="alert"
          aria-live="polite"
        >
          {error.message as string}
        </span>
      )}
    </div>
  );
}
