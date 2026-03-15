import {
  Container,
  Skeleton,
  Stack,
  Typography,
  Card,
  CardContent,
  Box,
  Grid,
  Divider,
} from "@mui/material";

function SidebarSkeleton() {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="h6">
        <Skeleton width="60%" />
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Stack spacing={3}>
        {[1, 2, 3].map((i) => (
          <Box key={i}>
            <Skeleton width="50%" height={20} sx={{ mb: 1 }} />
            {[1, 2, 3].map((j) => (
              <Skeleton key={j} width="80%" height={16} sx={{ mb: 0.5 }} />
            ))}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default function Loading() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="flex-start">
        <Grid size={{ xs: 12, md: 4, lg: 3 }}>
          <SidebarSkeleton />
        </Grid>

        <Grid size={{ xs: 12, md: 8, lg: 9 }}>
          <Stack spacing={3} sx={{ pl: { md: 4 } }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h3">
                <Skeleton width="40%" />
              </Typography>
              <Typography variant="body1">
                <Skeleton width="75%" />
              </Typography>
            </Box>

            {[1, 2, 3].map((i) => (
              <Card key={i} variant="outlined" sx={{ borderRadius: 3 }}>
                <CardContent sx={{ display: "flex", gap: 3, alignItems: "flex-start" }}>
                  <Skeleton variant="circular" width={50} height={50} />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h5">
                      <Skeleton width="40%" />
                    </Typography>
                    <Skeleton width="100%" />
                    <Skeleton width="90%" />
                    <Skeleton width="70%" />
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
