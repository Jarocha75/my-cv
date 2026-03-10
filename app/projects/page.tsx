import prisma from '@/lib/prisma';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Box,
  CardMedia,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        align="center"
        sx={{ mb: 6 }}
      >
        Moje Projekty
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component="img"
                height="180"
                image={
                  project.imageUrl ||
                  'https://via.placeholder.com/400x200?text=Projekt'
                }
                alt={project.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.techStack.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                {project.githubUrl && (
                  <Button
                    size="small"
                    startIcon={<GitHubIcon />}
                    href={project.githubUrl}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                )}
                {project.liveUrl && (
                  <Button
                    size="small"
                    startIcon={<LaunchIcon />}
                    href={project.liveUrl}
                    target="_blank"
                    color="secondary"
                  >
                    Live Demo
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
