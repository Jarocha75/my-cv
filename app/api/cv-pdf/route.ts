import { renderToBuffer } from '@react-pdf/renderer';
import CVDocument from '@/app/components/CVDocument';
import prisma from '@/lib/prisma';
import React from 'react';

type Locale = 'sk' | 'en';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const raw = searchParams.get('locale') ?? 'sk';
  const locale: Locale = raw === 'en' ? 'en' : 'sk';

  const projects = await prisma.project.findMany({
    orderBy: [{ isFeatured: 'desc' }, { createdAt: 'asc' }],
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const element = React.createElement(CVDocument, { locale, projects }) as any;
  const buffer = await renderToBuffer(element);

  return new Response(new Uint8Array(buffer), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="jaroslav-pecha-cv-${locale}.pdf"`,
    },
  });
}
