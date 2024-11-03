"use server";
import { EmailTemplate } from "@/components/mail/EmailTemplate";
import nodemailer from "nodemailer";
import {
  MAIL_DONT_REPLY,
  MAIL_HOST,
  MAIL_PASSWORD,
  MAIL_PORT,
  MAIL_TO,
  MAIL_USER,
} from "./variable";

export interface SendMailOptions {
  subject: string;
  name: string;
  message: string;
  email: string;
}

const generateTransporter = () => {
  return nodemailer.createTransport({
    host: MAIL_HOST,
    port: parseInt(MAIL_PORT),
    secure: false,
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASSWORD,
    },
  });
};

const sendEmail = async ({
  subject,
  name,
  message,
  email
}: SendMailOptions) => {
  const transporter = generateTransporter();

  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(today);

  // Render email dari komponen React ke MJML
  const mailTemplate = EmailTemplate({
    name,
    email,
    subject,
    message,
    date: formattedDate,
  });

  // Opsi email
  const mailOptions = {
    from: MAIL_DONT_REPLY,
    to: MAIL_TO,
    subject,
    html: mailTemplate,
  };

  // Kirim email
  await transporter.sendMail(mailOptions);
};

export default sendEmail;
