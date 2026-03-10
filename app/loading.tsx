import {
  Container,
  Skeleton,
  Stack,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";

export default function Loading() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        <Skeleton animation="wave" width="60%" sx={{ mx: "auto" }} />
      </Typography>

      <Stack spacing={3} sx={{ mt: 4 }}>
        {[1, 2, 3].map((i) => (
          <Card key={i} variant="outlined">
            <CardContent>
              <Typography variant="h5">
                <Skeleton animation="wave" width="50%" />
              </Typography>
              <Typography variant="subtitle1">
                <Skeleton animation="wave" width="35%" />
              </Typography>
              <Typography variant="body2">
                <Skeleton animation="wave" width="25%" />
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={60}
                  sx={{ borderRadius: 1 }}
                />
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
