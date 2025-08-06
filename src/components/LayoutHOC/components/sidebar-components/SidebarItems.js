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
    url: 'akideh',
    icon: <IconBook2 />,
  },
  {
    title: 'Menhexh',
    url: 'menhexh',
    icon: <IconFeatherFilled />,
  },
  {
    title: 'Kuran',
    url: 'kuran',
    icon: <QuranInline />,
  },
  {
    title: 'Hadith',
    url: 'hadith',
    icon: <SalutationsIcon />,
  },
  {
    title: 'Fikh',
    url: 'fikh',
    icon: <IconLicense />,
  },
  {
    title: 'Etikë',
    url: 'etike',
    icon: <SparklesIcon />,
  },
  {
    title: 'Daueh',
    url: 'daueh',
    icon: <MessageSquare />,
  },
  {
    title: 'Dituria',
    url: 'dituria',
    icon: <IconBooks />,
  },
  {
    title: 'Sira',
    url: 'sira',
    icon: <TheProphetsNameIcon />,
  },
  {
    title: 'Sahabët',
    url: 'sahabet',
    icon: <RadijAllahuAnhuIcon />,
  },
  {
    title: 'Dijetarët',
    url: 'dijetaret',
    icon: <ScholarIcon />,
  },
  {
    title: 'Motrat',
    url: 'motrat',
    icon: <HijabIconFilled />,
  },
  {
    title: 'Refuzime',
    url: 'refuzime',
    icon: <IconBan />,
  },
  {
    title: 'Bidat',
    url: 'bidat',
    icon: <FireIcon />,
  },
  {
    title: 'Sektet',
    url: 'sektet',
    icon: <IconUsersGroup />,
  },
  {
    title: 'Histori',
    url: 'histori',
    icon: <HistoryIcon />,
  },
  {
    title: 'Muaji i Ramazanit',
    url: 'muaji-i-ramazanit',
    icon: <RamadanMonthIconFilled />,
  },
  {
    title: 'Shoqatat',
    url: 'shoqatat',
    icon: <IconUsers />,
  },
  {
    title: 'Politikë',
    url: 'politike',
    icon: <IconGraph />,
  },
  {
    title: 'Demonstratat',
    url: 'demonstratat',
    icon: <IconBuildingOff />,
  },
  {
    title: 'Aktualitet',
    url: 'aktualitet',
    icon: <IconAccessPoint />,
  },
  {
    title: 'Fetua rreth Mjekësisë',
    url: 'fetua-rreth-mjekesise',
    icon: <ActivityIcon />,
  },
  {
    title: 'Rreth Teorive Shkencore',
    url: 'rreth-teorive-shkencore',
    icon: <IconPlanet />,
  },
];

export default SidebarItems;
