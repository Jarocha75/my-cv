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
import { getTranslations, getLocale } from 'next-intl/server';

const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/400x200?text=Projekt';

const CARD_MEDIA_HEIGHT = {
  featured: 350,
  regular: 200,
};

export default async function ProjectsPage() {
  const t = await getTranslations('projects');
  const locale = await getLocale();
  let projects: Awaited<ReturnType<typeof prisma.project.findMany>> = [];
  try {
    projects = await prisma.project.findMany({
      orderBy: [{ isFeatured: 'desc' }, { createdAt: 'asc' }],
    });
  } catch {
    // DB nedostupná (napr. v testovacom prostredí)
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        align="center"
        sx={{ mb: 6 }}
      >
        {t('pageTitle')}
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid
            key={project.id}
            size={{
              xs: 12,
              md: project.isFeatured ? 12 : 6,
              lg: project.isFeatured ? 12 : 4,
            }}
          >
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component={project.videoUrl ? 'video' : 'img'}
                height="240"
                image={
                  !project.videoUrl
                    ? project.imageUrl || PLACEHOLDER_IMAGE
                    : undefined
                }
                src={project.videoUrl ? project.videoUrl : undefined}
                alt={project.title}
                {...(project.videoUrl
                  ? { controls: true, autoPlay: true, muted: true, loop: true }
                  : {})}
                sx={{
                  objectFit: 'cover',
                  height: project.isFeatured ? CARD_MEDIA_HEIGHT.featured : CARD_MEDIA_HEIGHT.regular,
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {locale === 'en' ? (project.titleEn ?? project.title) : project.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {locale === 'en' ? (project.descriptionEn ?? project.description) : project.description}
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
                    {t('githubButton')}
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
                    {t('liveDemoButton')}
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
