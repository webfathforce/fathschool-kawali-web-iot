import { z } from "zod";

const AuthSchema = z.object({
  nisn: z.string().min(1, 'NISN tidak boleh kosong'),
  birthdate: z.string().min(1, 'Password tidak boleh kosong'),
})

type Auth = z.infer<typeof AuthSchema>;

export { AuthSchema, type Auth };