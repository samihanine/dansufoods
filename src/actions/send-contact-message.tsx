"use server";

import { sendEmail } from "./send-email";

export default async function sendContactMessage(props: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}): Promise<{ success: boolean; message?: string }> {
  const { name, email, phone, message } = props;

  try {
    const text = `Nom: ${name}<br><br>Email: ${email}<br><br>Téléphone: ${
      phone || "Non renseigné"
    }<br><br>Message: ${message}`;

    const result = await sendEmail({
      to: process.env.CONTACT_EMAIL as string,
      subject: "Nouveau message de contact",
      title: `${name} vous a envoyé un message`,
      text,
    });

    if (result.error) {
      throw new Error(result.error.message);
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,

      message:
        "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.",
    };
  }
}
