import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations/contact-form";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json({ error: "RESEND_API_KEY não configurada no servidor." }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const body = await req.json();
    const data = contactFormSchema.parse(body);

    const result = await resend.emails.send({
      from: "Contato <onboarding@resend.dev>",
      to: ["allanp.vba@gmail.com"],
      replyTo: data.email,
      subject: `Novo contato: ${data.project}`,
      html: `
        <p><b>Nome:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Projeto:</b> ${data.project}</p>
        <p><b>Mensagem:</b> ${data.message}</p>
      `
    });

    if (result.error) {
      return Response.json({ error: result.error.message }, { status: result.error.statusCode ?? 400 });
    }

    return Response.json({ success: true });
  } catch (err: any) {
    return Response.json({ error: err?.message ?? "Erro inesperado" }, { status: 400 });
  }
}
