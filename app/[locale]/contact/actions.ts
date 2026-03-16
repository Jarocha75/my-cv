'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { guestbookSchema, GuestbookFormState } from '@/lib/validations/contact';

export async function createEntry(
  _prevState: GuestbookFormState,
  formData: FormData
): Promise<GuestbookFormState> {
  const raw = {
    name: formData.get('name') as string,
    message: formData.get('message') as string,
  };

  const result = guestbookSchema.safeParse(raw);

  if (!result.success) {
    return { errors: z.flattenError(result.error).fieldErrors };
  }

  await prisma.guestbookEntry.create({
    data: result.data,
  });

  revalidatePath('/contact');
  return { success: true };
}
