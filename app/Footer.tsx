'use client';

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
import { useTranslations } from 'next-intl';

const TITLE = 'Jaroslav Pecha';

const Footer = () => {
  const t = useTranslations('footer');
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
              {TITLE}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('subtitle')}
            </Typography>
          </Box>

          <Stack direction="row" spacing={1}>
            <IconButton
              href="https://github.com/Jarocha75"
              target="_blank"
              color="inherit"
              sx={{ '&:hover': { color: 'primary.main' } }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/jaroslav-pecha-525b4a39b"
              target="_blank"
              color="inherit"
              sx={{ '&:hover': { color: 'primary.main' } }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="mailto:jarocha75@gmail.com"
              color="inherit"
              sx={{ '&:hover': { color: 'primary.main' } }}
            >
              <EmailIcon />
            </IconButton>
          </Stack>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          © {currentYear} {t('description')}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
