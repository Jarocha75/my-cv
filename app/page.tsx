import prisma from "@/lib/prisma";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import dayjs from "dayjs";
import Sidebar from "@/app/components/Sidebar";

export default async function HomePage() {
  const experiences = await prisma.experience.findMany({
    orderBy: { startDate: "desc" },
  });

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Môj Profesionálny Životopis
      </Typography>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4, mt: 4, alignItems: "flex-start" }}>
        <Sidebar />

        <Box sx={{ flex: 1 }}>
          <Stack spacing={3}>
            {experiences.map((exp) => (
              <Card key={exp.id} variant="outlined">
                <CardContent>
                  <Typography variant="h5" color="primary">
                    {exp.position}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {exp.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {dayjs(exp.startDate).format("MMMM YYYY")} -{" "}
                    {exp.endDate
                      ? dayjs(exp.endDate).format("MMMM YYYY")
                      : "Súčasnosť"}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body1">{exp.description}</Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}

            {experiences.length === 0 && (
              <Typography align="center" color="text.secondary">
                Zatiaľ tu nie sú žiadne skúsenosti. Pridaj ich v DataGripe!
              </Typography>
            )}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
