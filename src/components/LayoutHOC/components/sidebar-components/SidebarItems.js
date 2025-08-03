import {
  IconAccessPoint,
  IconBan,
  IconBook2,
  IconBooks,
  IconBuildingOff,
  IconFeatherFilled,
  IconGraph,
  IconLicense,
  IconPlanet,
  IconUsers,
  IconUsersGroup,
} from '@tabler/icons-react';
import QuranInline from '@/assets/icons/QuranIconInline';
import SalutationsIcon from '@/assets/icons/SalutationsIcon';
import {
  ActivityIcon,
  HistoryIcon,
  MessageSquare,
  SparklesIcon,
} from 'lucide-react';
import TheProphetsNameIcon from '@/assets/icons/TheProphetsNameIcon';
import RadijAllahuAnhuIcon from '@/assets/icons/RadijAllahuAnhuIcon';
import ScholarIcon from '@/assets/icons/ScholarIcon';
import HijabIconFilled from '@/assets/icons/HijabIconFilled';
import FireIcon from '@/assets/icons/FireIcon';
import RamadanMonthIconFilled from '@/assets/icons/RamadanMonthIconFilled';
import * as React from 'react';

const SidebarItems = [
  {
    title: 'Akideh',
    url: '#',
    icon: <IconBook2 />,
  },
  {
    title: 'Menhexh',
    url: '#',
    icon: <IconFeatherFilled />,
  },
  {
    title: 'Kuran',
    url: '#',
    icon: <QuranInline />,
  },
  {
    title: 'Hadith',
    url: '#',
    icon: <SalutationsIcon />,
  },
  {
    title: 'Fikh',
    url: '#',
    icon: <IconLicense />,
  },
  {
    title: 'Etikë',
    url: '#',
    icon: <SparklesIcon />,
  },
  {
    title: 'Daueh',
    url: '#',
    icon: <MessageSquare />,
  },
  {
    title: 'Dituria',
    url: '#',
    icon: <IconBooks />,
  },
  {
    title: 'Sira',
    url: '#',
    icon: <TheProphetsNameIcon />,
  },
  {
    title: 'Sahabët',
    url: '#',
    icon: <RadijAllahuAnhuIcon />,
  },
  {
    title: 'Dijetarët',
    url: '#',
    icon: <ScholarIcon />,
  },
  {
    title: 'Motrat',
    url: '#',
    icon: <HijabIconFilled />,
  },
  {
    title: 'Refuzime',
    url: '#',
    icon: <IconBan />,
  },
  {
    title: 'Bidat',
    url: '#',
    icon: <FireIcon />,
  },
  {
    title: 'Sektet',
    url: '#',
    icon: <IconUsersGroup />,
  },
  {
    title: 'Histori',
    url: '#',
    icon: <HistoryIcon />,
  },
  {
    title: 'Muaji i Ramazanit',
    url: '#',
    icon: <RamadanMonthIconFilled />,
  },
  {
    title: 'Shoqatat',
    url: '#',
    icon: <IconUsers />,
  },
  {
    title: 'Politikë',
    url: '#',
    icon: <IconGraph />,
  },
  {
    title: 'Demonstratat',
    url: '#',
    icon: <IconBuildingOff />,
  },
  {
    title: 'Aktualitet',
    url: '#',
    icon: <IconAccessPoint />,
  },
  {
    title: 'Fetua rreth Mjekësisë',
    url: '#',
    icon: <ActivityIcon />,
  },
  {
    title: 'Rreth Teorive Shkencore',
    url: '#',
    icon: <IconPlanet />,
  },
];

export default SidebarItems;
