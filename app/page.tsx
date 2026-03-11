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
import { aboutSections } from '@/app/data/about';

export default async function HomePage() {
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
                Kto som?
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: '1.1rem' }}
              >
                Zatiaľ Frontend vývojár, ktorý verí, že kód by mal byť rovnako
                krásny ako funkčný.
              </Typography>
            </Box>

            {aboutSections.map((section) => (
              <Card
                key={section.id}
                variant="outlined"
                sx={{
                  borderRadius: 3,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
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
                      width: 50,
                      height: 50,
                    }}
                  >
                    <section.icon />
                  </Avatar>

                  <Box>
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                      {section.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {section.content}
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
