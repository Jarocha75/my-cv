import {
  Container,
  Skeleton,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from '@mui/material';

export default function Loading() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" align="center" sx={{ mb: 6 }}>
        <Skeleton animation="wave" width="40%" sx={{ mx: 'auto' }} />
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12 }}>
          <Card sx={{ display: 'flex', flexDirection: 'column' }}>
            <Skeleton
              variant="rectangular"
              width="100%"
              height={350}
              animation="wave"
            />
            <CardContent>
              <Typography variant="h5">
                <Skeleton width="35%" animation="wave" />
              </Typography>
              <Skeleton width="80%" animation="wave" />
              <Skeleton width="60%" animation="wave" />
              <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                <Skeleton
                  variant="rounded"
                  width={60}
                  height={24}
                  animation="wave"
                />
                <Skeleton
                  variant="rounded"
                  width={60}
                  height={24}
                  animation="wave"
                />
                <Skeleton
                  variant="rounded"
                  width={60}
                  height={24}
                  animation="wave"
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {[1, 2, 3, 4].map((i) => (
          <Grid key={i} size={{ xs: 12, md: 6, lg: 4 }}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <Skeleton
                variant="rectangular"
                width="100%"
                height={200}
                animation="wave"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5">
                  <Skeleton width="50%" animation="wave" />
                </Typography>
                <Skeleton width="90%" animation="wave" />
                <Skeleton width="70%" animation="wave" />
                <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                  <Skeleton
                    variant="rounded"
                    width={55}
                    height={24}
                    animation="wave"
                  />
                  <Skeleton
                    variant="rounded"
                    width={55}
                    height={24}
                    animation="wave"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
