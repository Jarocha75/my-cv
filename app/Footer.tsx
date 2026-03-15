import {
  Box,
  Container,
  Stack,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const INTRO = {
  title: 'Jaroslav Pecha',
  subtitle: 'Full-stack Developer špecializujúci sa na Next.js a React.',
  description:
    'Jaroslav Pecha. Všetky práva vyhradené. Postavené na Next.js 15 & MUI.',
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{ bgcolor: 'background.paper', py: 6, mt: 'auto' }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Box>
            <Typography variant="h6" fontWeight={700} color="primary">
              {INTRO.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {INTRO.subtitle}
            </Typography>
          </Box>

          <Stack direction="row" spacing={1}>
            <IconButton
              href="https://github.com/tvoj-profil"
              target="_blank"
              color="inherit"
              sx={{ '&:hover': { color: 'primary.main' } }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/tvoj-profil"
              target="_blank"
              color="inherit"
              sx={{ '&:hover': { color: 'primary.main' } }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="mailto:tvoj@email.com"
              color="inherit"
              sx={{ '&:hover': { color: 'primary.main' } }}
            >
              <EmailIcon />
            </IconButton>
          </Stack>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          © {currentYear} {INTRO.description}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
