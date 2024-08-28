import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email(),
  message: z.string().min(1, { message: "Message cannot be empty" }),
});

export type Contact = z.infer<typeof contactSchema>;
