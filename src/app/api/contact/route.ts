import { contactFormSchema } from "@/lib/validations/contact-form";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = contactFormSchema.parse(body);

    const result = await resend.emails.send({
      from: "Contato <onboarding@resend.dev>",
      to: ["allanp.vba@gmail.com"],
      replyTo: data.email,
      subject: `[Portfólio] Novo contato: ${data.project}`,
      html: `
        <h2>Novo contato pelo portfólio</h2>
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Projeto:</strong> ${data.project}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${data.message}</p>
      `
    });

    if (result.error) {
      return Response.json(
        { error: result.error.message, code: result.error.name },
        { status: result.error.statusCode ?? 400 }
      );
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (err: any) {
    const message = typeof err?.message === "string" ? err.message : "Erro ao enviar e-mail";
    return Response.json({ error: message }, { status: 400 });
  }
}
