import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Stack,
  Grid,
  Avatar,
} from '@mui/material';
import Sidebar from '@/app/components/Sidebar';
import DownloadCVButton from '@/app/components/DownloadCVButton';
import { aboutSections } from '@/app/data/about';
import { getTranslations } from 'next-intl/server';

const AVATAR_SIZE = 50;

const CARD_HOVER_SX = {
  transition: 'transform 0.2s',
  '&:hover': { transform: 'translateY(-4px)' },
} as const;

export default async function HomePage() {
  const t = await getTranslations();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="flex-start">
        <Grid size={{ xs: 12, md: 4, lg: 3 }}>
          <Sidebar />
        </Grid>

        <Grid size={{ xs: 12, md: 8, lg: 9 }}>
          <Stack spacing={3} sx={{ pl: { md: 4 } }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h3" fontWeight={800} gutterBottom>
                {t('home.heading')}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: '1.1rem' }}
              >
                {t('home.intro')}
              </Typography>
              <DownloadCVButton />
            </Box>

            {aboutSections.map((section) => (
              <Card
                key={section.id}
                variant="outlined"
                sx={{
                  borderRadius: 3,
                  ...CARD_HOVER_SX,
                  '&:hover': {
                    ...CARD_HOVER_SX['&:hover'],
                    borderColor: section.color,
                  },
                }}
              >
                <CardContent
                  sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}
                >
                  <Avatar
                    sx={{
                      bgcolor: `${section.color}20`,
                      color: section.color,
                      width: AVATAR_SIZE,
                      height: AVATAR_SIZE,
                    }}
                  >
                    <section.icon />
                  </Avatar>

                  <Box>
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                      {t(`about.${section.id}.title`)}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {t(`about.${section.id}.content`)}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
