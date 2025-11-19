import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "tiago40427@gmail.com",
      subject: `Nova mensagem de ${name}`,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong><br/>${message}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
