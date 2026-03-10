import { Container, Typography, TextField, Box, Paper } from '@mui/material';
import { createProject } from './actions';
import SubmitButton from './SubmitButton';

export default function AdminPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Pridať nový projekt
        </Typography>

        <Box
          component="form"
          action={createProject}
          sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
        >
          <TextField name="title" label="Názov projektu" required fullWidth />
          <TextField
            name="description"
            label="Popis"
            multiline
            rows={4}
            required
            fullWidth
          />
          <TextField
            name="techStack"
            label="Technológie (oddelené čiarkou)"
            placeholder="Next.js, Prisma, MUI"
            fullWidth
          />
          <SubmitButton />
        </Box>
      </Paper>
    </Container>
  );
}
