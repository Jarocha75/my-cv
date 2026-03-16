import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import PsychologyIcon from '@mui/icons-material/Psychology';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

export const aboutSections = [
  { id: 'journey', icon: HistoryEduIcon, color: '#3b82f6' },
  { id: 'motivation', icon: PsychologyIcon, color: '#10b981' },
  { id: 'vision', icon: VisibilityIcon, color: '#f59e0b' },
  { id: 'hobby', icon: SportsEsportsIcon, color: '#ec4899' },
] as const;

export type AboutSectionId = (typeof aboutSections)[number]['id'];
