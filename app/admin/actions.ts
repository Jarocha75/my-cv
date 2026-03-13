'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createProject(formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const techStackString = formData.get('techStack') as string;
  const githubUrl = formData.get('githubUrl') as string;
  const imageUrl = formData.get('imageUrl') as string;
  const videoUrl = formData.get('videoUrl') as string;
  const isFeatured = formData.get('isFeatured') === 'on';

  const techStack = techStackString
    ? techStackString.split(',').map((s) => s.trim())
    : [];

  try {
    await prisma.project.create({
      data: {
        title,
        description,
        techStack,
        githubUrl: githubUrl || null,
        imageUrl: imageUrl || null,
        videoUrl: videoUrl || null,
        isFeatured,
      },
    });

    revalidatePath('/projects');
    return { success: true };
  } catch {
    return { success: false, error: 'Nepodarilo sa uložiť projekt.' };
  }
}
