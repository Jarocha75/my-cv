'use client';

import { Box, Typography, Divider, Stack } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import TranslateIcon from '@mui/icons-material/Translate';
import SkillSection from '@/app/components/SkillSection';
import { highestSkills, managingSkills, languageSkills } from '@/app/data/skills';
import { useTranslations } from 'next-intl';

export default function Sidebar() {
  const t = useTranslations('sidebar');

  return (
    <Box
      sx={{
        width: { xs: '100%', md: 270 },
        flexShrink: 0,
        p: 3,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        height: 'fit-content',
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {t('skillset')}
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Stack spacing={3}>
        <SkillSection title={t('highestSkills')} skills={highestSkills} Icon={CodeIcon} />
        <Divider />
        <SkillSection title={t('managingSkills')} skills={managingSkills} Icon={TerminalIcon} />
        <Divider />
        <SkillSection title={t('languageSkills')} skills={languageSkills} Icon={TranslateIcon} />
      </Stack>
    </Box>
  );
}
