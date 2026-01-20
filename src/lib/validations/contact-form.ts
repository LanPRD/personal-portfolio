import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Campo obrigatório"),
  email: z.email("Email inválido"),
  project: z.string().min(5, "Que tipo de projeto você deseja fazer?"),
  message: z.string().min(10, "Descreva seu projeto com o máximo de detalhes possíveis.")
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
