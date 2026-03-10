'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createProject(formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const techStackString = formData.get('techStack') as string;

  const techStack = techStackString.split(',').map((s) => s.trim());

  await prisma.project.create({
    data: {
      title,
      description,
      techStack,
    },
  });

  revalidatePath('/projects');
}
