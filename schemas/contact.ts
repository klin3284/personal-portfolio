import { z } from "zod";

export const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export type Contact = z.infer<typeof contactSchema>;
