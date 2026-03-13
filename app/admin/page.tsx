'use client';

import {
  Container,
  Typography,
  TextField,
  Box,
  Paper,
  Stack,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { createProject } from './actions';
import SubmitButton from './SubmitButton';
import { toast } from 'sonner';

export default function AdminPage() {
  async function clientAction(formData: FormData) {
    const result = await createProject(formData);

    if (result?.success) {
      toast.success('Projekt bol úspešne pridaný!');
      (document.getElementById('project-form') as HTMLFormElement).reset();
    } else {
      toast.error(result?.error || 'Niekde nastala chyba');
    }
  }

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Pridať nový projekt
        </Typography>

        <Box
          id="project-form"
          component="form"
          action={clientAction}
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
          <FormControlLabel
            control={<Checkbox name="isFeatured" color="primary" />}
            label="Označiť ako hlavný projekt (Featured)"
            sx={{ mb: 2, display: 'block' }}
          />

          <Stack direction="row" spacing={2}>
            <TextField name="githubUrl" label="GitHub URL" fullWidth />
            <TextField
              name="imageUrl"
              label="Image URL"
              placeholder="/images/nazov-suboru.png"
              fullWidth
            />
            <TextField
              name="videoUrl"
              label="Video URL"
              placeholder="/videos/vision-demo.WebM"
              fullWidth
            />
          </Stack>
          <SubmitButton />
        </Box>
      </Paper>
    </Container>
  );
}
