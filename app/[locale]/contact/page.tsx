import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Divider,
  Paper,
  Stack,
} from '@mui/material';
import GuestbookForm from './GuestbookForm';
import prisma from '@/lib/prisma';
import { contactCards } from '@/app/data/contact';
import { getTranslations, getLocale } from 'next-intl/server';

const GUESTBOOK_ENTRY_BORDER = '4px solid #3b82f6';
const GUESTBOOK_ENTRIES_LIMIT = 5;
const CARD_HOVER_TRANSITION = '0.3s';
const PAPER_BORDER = '1px solid rgba(255, 255, 255, 0.08)';

export default async function ContactPage() {
  const t = await getTranslations('contact');
  const locale = await getLocale();
  let entries: Awaited<ReturnType<typeof prisma.guestbookEntry.findMany>> = [];
  try {
    entries = await prisma.guestbookEntry.findMany({
      orderBy: { createdAt: 'desc' },
      take: GUESTBOOK_ENTRIES_LIMIT,
    });
  } catch {
    // DB nedostupná
  }

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        textAlign="center"
        sx={{ fontWeight: 'bold' }}
      >
        {t('pageTitle')}
      </Typography>

      <Grid container spacing={3} sx={{ mb: 8, mt: 2 }}>
        {contactCards.map((item) => (
          <Grid size={{ xs: 12, sm: 4 }} key={item.title}>
            <Card
              sx={{
                textAlign: 'center',
                height: '100%',
                transition: CARD_HOVER_TRANSITION,
                '&:hover': { transform: 'translateY(-5px)', boxShadow: 4 },
              }}
            >
              <CardContent>
                <Box sx={{ color: 'primary.main', mb: 1 }}>
                  <item.icon />
                </Box>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.value}
                </Typography>
                <Button
                  size="small"
                  href={item.link}
                  target="_blank"
                  sx={{ mt: 1 }}
                >
                  {t('cardButtonLabel')}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ mb: 8 }} />

      <Grid container spacing={5}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'medium' }}>
            {t('guestbookTitle')}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            {t('guestbookDescription')}
          </Typography>

          <Paper
            elevation={0}
            variant="outlined"
            sx={{
                p: 3,
                border: PAPER_BORDER,
              }}
          >
            <GuestbookForm />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h6" gutterBottom>
            {t('entriesTitle')}
          </Typography>
          <Stack spacing={2}>
            {entries.length === 0 && (
              <Typography color="text.disabled">{t('noEntries')}</Typography>
            )}
            {entries.map((entry) => (
              <Paper
                key={entry.id}
                sx={{ p: 2, borderLeft: GUESTBOOK_ENTRY_BORDER }}
              >
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                  {entry.name}
                </Typography>
                <Typography variant="body2">{entry.message}</Typography>
                <Typography variant="caption" color="text.disabled">
                  {new Date(entry.createdAt).toLocaleDateString(locale)}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
