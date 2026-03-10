import { Container, Skeleton, Stack } from "@mui/material";

export default function Loading() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Stack spacing={2}>
        {[1, 2, 3].map((i) => (
          <Skeleton
            key={i}
            variant="rectangular"
            width="100%"
            height={150}
            sx={{ borderRadius: 2 }}
          />
        ))}
      </Stack>
    </Container>
  );
}
