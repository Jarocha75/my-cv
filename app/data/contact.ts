import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import { SvgIconComponent } from '@mui/icons-material';

export type ContactCard = {
  title: string;
  value: string;
  icon: SvgIconComponent;
  link: string;
};

export const contactCards: ContactCard[] = [
  {
    title: 'Email',
    value: 'jarocha75@gmail.com',
    icon: EmailIcon,
    link: 'mailto:jarocha75@gmail.com',
  },
  {
    title: 'LinkedIn',
    value: 'Jaroslav Pecha',
    icon: LinkedInIcon,
    link: 'https://www.linkedin.com/in/jaroslav-pecha-525b4a39b',
  },
  {
    title: 'GitHub',
    value: 'github.com/Jarocha75',
    icon: GitHubIcon,
    link: 'https://github.com',
  },
  {
    title: 'Telefón',
    value: '0949 433 262',
    icon: PhoneIcon,
    link: 'tel:0949433262',
  },
];
