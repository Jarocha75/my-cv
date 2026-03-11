import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import PsychologyIcon from '@mui/icons-material/Psychology';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

export const aboutSections = [
  {
    id: 'journey',
    title: 'Moja cesta',
    icon: HistoryEduIcon,
    content:
      'Moja cesta do sveta vývoja začala v januári 2025, kedy som položil prvé základy v HTML a CSS. Rýchlo som pochopil, že ma baví tvoriť veci, ktoré ľudia vidia a používajú. Nasledujúce tri mesiace som intenzívne drtil JavaScript, aby som pochopil logiku pod kapotou. V júni 2025 som preskočil do ekosystému React, ktorý ma fascinoval svojou komponentovou štruktúrou. Od jednoduchých stavov cez useState a useEffect som sa postupne prepracoval k pokročilej správe dát pomocou Zustand a efektívnemu asynchrónnemu fetchovaniu s TanStack Query. Moja cesta je o neustálom hľadaní lepších spôsobov, ako písať čistý kód.',
    color: '#3b82f6',
  },
  {
    id: 'motivation',
    title: 'Motivácia',
    icon: PsychologyIcon,
    content:
      'Poháňa ma ten moment, kedy sa zložité riadky kódu premenia na plynulý používateľský zážitok. Fascinuje ma dynamika Frontend sveta – to, čo bolo včera novinkou, je dnes štandardom. Moja motivácia pramení z túžby byť súčasťou tímu, kde môžem riešiť reálne problémy a neustále zvyšovať latku svojich technických zručností.',
    color: '#10b981',
  },
  {
    id: 'vision',
    title: 'Vizie',
    icon: VisibilityIcon,
    content:
      'Mojím cieľom je stať sa všestranným Full-stack developerom. Aktuálne sa zameriavam na prepojenie Reactu s moderným backendom cez Next.js a Prismu, pričom kladiem dôraz na typovú bezpečnosť s TypeScriptom. V blízkej budúcnosti plánujem prehĺbiť svoje znalosti v optimalizácii webov a architektúre škálovateľných aplikácií.',
    color: '#f59e0b',
  },
  {
    id: 'hobby',
    title: 'Hobby',
    icon: SportsEsportsIcon,
    content:
      'Keď práve neladím konzolu alebo nestylujem komponenty, rád sa venujem športu, rodine a fitness. Verím v zdravý balans medzi obrazovkou a aktívnym pohybom.',
    color: '#ec4899',
  },
];
