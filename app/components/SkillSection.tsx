import { Box, Typography, Stack, LinearProgress, Chip } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

interface Props {
  title: string;
  skills: { name: string; level: number }[];
  Icon: SvgIconComponent;
}

export default function SkillSection({ title, skills, Icon }: Props) {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
        <Icon fontSize="small" color="primary" />
        <Typography variant="subtitle1" fontWeight="bold">
          {title}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
        {skills.map((skill) => (
          <Chip
            key={skill.name}
            label={skill.name}
            size="small"
            color="primary"
            variant="outlined"
          />
        ))}
      </Box>

      <Stack spacing={1.5}>
        {skills.map((skill) => (
          <Box key={skill.name}>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}
            >
              <Typography variant="body2">{skill.name}</Typography>
              <Typography variant="caption" color="text.secondary">
                {skill.level}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={skill.level}
              sx={{ borderRadius: 1, height: 6 }}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
