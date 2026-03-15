import {
  Container,
  Skeleton,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Stack,
  Paper,
} from '@mui/material';

export default function Loading() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" align="center" sx={{ mb: 4 }}>
        <Skeleton animation="wave" width="30%" sx={{ mx: 'auto' }} />
      </Typography>

      <Grid container spacing={3} sx={{ mb: 8, mt: 2 }}>
        {[1, 2, 3].map((i) => (
          <Grid key={i} size={{ xs: 12, sm: 4 }}>
            <Card sx={{ textAlign: 'center', height: '100%' }}>
              <CardContent>
                <Skeleton
                  variant="circular"
                  width={24}
                  height={24}
                  sx={{ mx: 'auto', mb: 1 }}
                />
                <Typography variant="h6">
                  <Skeleton width="60%" sx={{ mx: 'auto' }} animation="wave" />
                </Typography>
                <Skeleton width="80%" sx={{ mx: 'auto' }} animation="wave" />
                <Skeleton
                  variant="rounded"
                  width={70}
                  height={28}
                  sx={{ mx: 'auto', mt: 1 }}
                  animation="wave"
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ mb: 8 }} />

      <Grid container spacing={5}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h5">
            <Skeleton width="60%" animation="wave" />
          </Typography>
          <Skeleton width="90%" animation="wave" sx={{ mb: 3 }} />
          <Paper elevation={0} variant="outlined" sx={{ p: 3 }}>
            <Stack spacing={2}>
              <Skeleton
                variant="rounded"
                width="100%"
                height={48}
                animation="wave"
              />
              <Skeleton
                variant="rounded"
                width="100%"
                height={100}
                animation="wave"
              />
              <Skeleton
                variant="rounded"
                width="30%"
                height={36}
                animation="wave"
              />
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h6">
            <Skeleton width="50%" animation="wave" />
          </Typography>
          <Stack spacing={2} sx={{ mt: 1 }}>
            {[1, 2, 3].map((i) => (
              <Paper
                key={i}
                sx={{ p: 2, borderLeft: '4px solid rgba(59,130,246,0.3)' }}
              >
                <Skeleton width="40%" height={20} animation="wave" />
                <Skeleton width="90%" animation="wave" />
                <Skeleton width="30%" height={14} animation="wave" />
              </Paper>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
