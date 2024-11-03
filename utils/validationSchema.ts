import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const messageSchema = z.object({
  name: z.string().min(1, "Nama harus diisi").min(3, "Nama minimal 3 karakter"),
  phone: z
    .string()
    .min(1, "No Telepon/HP harus diisi")
    .min(4, "No Telepon/HP minimal 4 karakter")
    .regex(phoneRegex, "Nomor tidak valid"),
  email: z.string().email("Email tidak valid"),
  subject: z
    .string()
    .min(1, "Subjek harus diisi")
    .min(3, "Subjek minimal 3 karakter"),
  message: z
    .string()
    .min(1, "Pesan harus diisi")
    .min(3, "Pesan minimal 3 karakter")
    .max(500, "Maksimal pajang pesan 500 karakter"),
});
