'use client';

import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { useLocale } from 'next-intl';

export default function DownloadCVButton() {
  const locale = useLocale();
  const label = locale === 'sk' ? 'Stiahnuť CV' : 'Download CV';

  return (
    <Button
      variant="outlined"
      size="small"
      startIcon={<DownloadIcon />}
      href={`/api/cv-pdf?locale=${locale}`}
      download={`jaroslav-pecha-cv-${locale}.pdf`}
      component="a"
      sx={{ mt: 1 }}
    >
      {label}
    </Button>
  );
}
