import { z } from 'zod';

export const guestbookSchema = z.object({
  name: z
    .string()
    .min(2, 'Meno musí mať aspoň 2 znaky')
    .max(50, 'Meno môže mať najviac 50 znakov'),
  message: z
    .string()
    .min(5, 'Správa musí mať aspoň 5 znakov')
    .max(500, 'Správa môže mať najviac 500 znakov'),
});

export type GuestbookFormState = {
  errors?: {
    name?: string[];
    message?: string[];
  };
  success?: boolean;
};
