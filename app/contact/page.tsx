import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  Divider,
  Paper,
  Stack,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { createEntry } from './actions';
import prisma from '@/lib/prisma';
import { contactCards } from '@/app/data/contact';

const GUESTBOOK_FORM_BG = '#f9f9f9';
const GUESTBOOK_ENTRY_BORDER = '4px solid #1976d2';

const TEXT = {
  pageTitle: 'Kontakt',
  cardButtonLabel: 'Otvoriť',
  guestbookTitle: 'Návštevná kniha ✍️',
  guestbookDescription:
    'Nechaj mi tu odkaz, že si tu bol! Dáta sa ukladajú cez Prismu do Postgresu.',
  fieldName: 'Meno',
  fieldMessage: 'Správa',
  submitButton: 'Odoslať odkaz',
  entriesTitle: 'Posledné odkazy:',
  noEntries: 'Zatiaľ žiadne správy.',
};

export default async function ContactPage() {
  const entries = await prisma.guestbookEntry.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
  });

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        textAlign="center"
        sx={{ fontWeight: 'bold' }}
      >
        {TEXT.pageTitle}
      </Typography>

      {/* 1. SEKCIA: KONTAKTNÉ KARTY */}
      <Grid container spacing={3} sx={{ mb: 8, mt: 2 }}>
        {contactCards.map((item) => (
          <Grid size={{ xs: 12, sm: 4 }} key={item.title}>
            <Card
              sx={{
                textAlign: 'center',
                height: '100%',
                transition: '0.3s',
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
                  {TEXT.cardButtonLabel}
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
            {TEXT.guestbookTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            {TEXT.guestbookDescription}
          </Typography>

          <Paper
            elevation={0}
            variant="outlined"
            sx={{ p: 3, bgcolor: GUESTBOOK_FORM_BG }}
          >
            <form action={createEntry}>
              <Stack spacing={2}>
                <TextField
                  name="name"
                  label={TEXT.fieldName}
                  fullWidth
                  required
                  variant="filled"
                />
                <TextField
                  name="message"
                  label={TEXT.fieldMessage}
                  fullWidth
                  multiline
                  rows={3}
                  required
                  variant="filled"
                />
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                  size="large"
                >
                  {TEXT.submitButton}
                </Button>
              </Stack>
            </form>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h6" gutterBottom>
            {TEXT.entriesTitle}
          </Typography>
          <Stack spacing={2}>
            {entries.length === 0 && (
              <Typography color="text.disabled">{TEXT.noEntries}</Typography>
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
                  {new Date(entry.createdAt).toLocaleDateString()}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
