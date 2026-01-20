"use client";

import { cn } from "@/lib/css";
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PiPaperPlaneRightBold } from "react-icons/pi";
import { toast } from "sonner";
import { FormField } from "./form-field";

interface ContactFormProps {
  translations: {
    name: string;
    project: string;
    message: string;
    sendMessage: string;
    sending?: string;
  };
}

export function ContactForm({ translations }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  async function onSubmit(data: ContactFormData) {
    try {
      console.log("Form data:", data);

      // Simular delay de envio
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast.success("Mensagem enviada com sucesso!");
      reset();
    } catch (error) {
      console.error("Erro ao enviar:", error);
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("grid", "lg:w-184")} noValidate aria-label="Contact form">
      <div className={cn("grid", "lg:grid-cols-2")}>
        <FormField label={translations.name} name="name" type="text" register={register} errors={errors} />
        <FormField label="Email" name="email" type="email" register={register} errors={errors} />
      </div>

      <FormField label={translations.project} name="project" type="text" register={register} errors={errors} />
      <FormField
        label={translations.message}
        name="message"
        type="textarea"
        rows={7}
        register={register}
        errors={errors}
      />

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "button button--flex",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "focus:outline-none focus:ring-4 focus:ring-(--first-color) focus:ring-opacity-50"
          )}
          aria-busy={isSubmitting}
          aria-live="polite"
        >
          {isSubmitting ? (
            <>
              <span className="sr-only">Enviando mensagem</span>
              <span aria-hidden="true">{translations.sending || "Enviando..."}</span>
            </>
          ) : (
            translations.sendMessage
          )}
          <PiPaperPlaneRightBold className="button__icon" aria-hidden="true" />
        </button>
      </div>

      {isSubmitSuccessful && (
        <div role="status" aria-live="polite" className="sr-only">
          Formulário enviado com sucesso
        </div>
      )}
    </form>
  );
}
