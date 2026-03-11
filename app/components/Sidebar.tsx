import { Box, Typography, Divider, Stack } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import TerminalIcon from "@mui/icons-material/Terminal";
import TranslateIcon from "@mui/icons-material/Translate";
import SkillSection from "@/app/components/SkillSection";
import { highestSkills, managingSkills, languageSkills } from "@/app/data/skills";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: 270 },
        flexShrink: 0,
        p: 3,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        height: "fit-content",
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Skillset
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Stack spacing={3}>
        <SkillSection title="Highest skills" skills={highestSkills} Icon={CodeIcon} />
        <Divider />
        <SkillSection title="Managing skills" skills={managingSkills} Icon={TerminalIcon} />
        <Divider />
        <SkillSection title="Language skills" skills={languageSkills} Icon={TranslateIcon} />
      </Stack>
    </Box>
  );
}
