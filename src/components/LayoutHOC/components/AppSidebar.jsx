"use client"

import * as React from "react"
import {
  IconAccessPoint,
  IconBallpen, IconBan,
  IconBook2,
  IconBooks, IconBuildingBurjAlArab, IconBuildingOff,
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase, IconFeatherFilled,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder, IconGraph,
  IconHelp, IconLicense,
  IconListDetails, IconPageBreak, IconPlanet,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers, IconUsersGroup,
} from "@tabler/icons-react"

import {
  Sidebar,
  SidebarContent, SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {Separator} from "@/components/ui/separator";
import SidebarNavMain from "@/components/LayoutHOC/components/SidebarNavMain";
import SidebarNavSecondary from "@/components/LayoutHOC/components/SidebarNavSecondary";
import HijabIconFilled from "@/assets/icons/HijabIconFilled";
import RamadanMonthIconFilled from "@/assets/icons/RamadanMonthIconFilled";
import {ActivityIcon, HistoryIcon, MessageSquare, SparklesIcon, Users2Icon} from "lucide-react";
import QuranInline from "@/assets/icons/QuranIconInline";
import SalutationsIcon from "@/assets/icons/SalutationsIcon";
import TheProphetsNameIcon from "@/assets/icons/TheProphetsNameIcon";
import RadijAllahuAnhuIcon from "@/assets/icons/RadijAllahuAnhuIcon";
import FireIcon from "@/assets/icons/FireIcon";
import SectsIcon from "@/assets/icons/SectsIcon";
import ScholarIcon from "@/assets/icons/ScholarIcon";

const data = {
  navMain: [
    {
      title: "Akideh",
      url: "#",
      icon: <IconBook2 />,
    },
    {
      title: "Menhexh",
      url: "#",
      icon: <IconFeatherFilled />,
    },
    {
      title: "Kuran",
      url: "#",
      icon: <QuranInline />,
    },
    {
      title: "Hadith",
      url: "#",
      icon: <SalutationsIcon />,
    },
    {
      title: "Fikh",
      url: "#",
      icon: <IconLicense />,
    },
    {
      title: "Etikë",
      url: "#",
      icon: <SparklesIcon />,
    },
    {
      title: "Daueh",
      url: "#",
      icon: <MessageSquare />,
    },
    {
      title: "Dituria",
      url: "#",
      icon: <IconBooks />,
    },
    {
      title: "Sira",
      url: "#",
      icon: <TheProphetsNameIcon />,
    },
    {
      title: "Sahabët",
      url: "#",
      icon: <RadijAllahuAnhuIcon />,
    },
    {
      title: "Dijetarët",
      url: "#",
      icon: <ScholarIcon />,
    },
    {
      title: "Motrat",
      url: "#",
      icon: <HijabIconFilled />,
    },
    {
      title: "Refuzime",
      url: "#",
      icon: <IconBan />,
    },
    {
      title: "Bidat",
      url: "#",
      icon: <FireIcon />,
    },
    {
      title: "Sektet",
      url: "#",
      icon: <IconUsersGroup />,
    },
    {
      title: "Histori",
      url: "#",
      icon: <HistoryIcon />,
    },
    {
      title: "Muaji i Ramazanit",
      url: "#",
      icon: <RamadanMonthIconFilled />,
    },
    {
      title: "Shoqatat",
      url: "#",
      icon: <IconUsers />,
    },
    {
      title: "Politikë",
      url: "#",
      icon: <IconGraph />,
    },
    {
      title: "Demonstratat",
      url: "#",
      icon: <IconBuildingOff />,
    },
    {
      title: "Aktualitet",
      url: "#",
      icon: <IconAccessPoint />,
    },
    {
      title: "Fetua rreth Mjekësisë",
      url: "#",
      icon: <ActivityIcon />,
    },
    {
      title: "Rreth Teorive Shkencore",
      url: "#",
      icon: <IconPlanet />,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: IconDatabase,
    },
    {
      name: "Reports",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: IconFileWord,
    },
  ],
}

const AppSidebar = ({
  ...props
}) => {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="flex items-center">
              <a href="#">
                  <img
                      className="h-16 invert aspect-square"
                      src="/selefi-org-transparent-mono.png"
                      alt="Selefi.org"
                  />
                <Separator orientation="vertical" />
                <p className="text-muted-foreground text-center text-xs">Lidhja juaj me dijetarët e sunnetit.</p>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarNavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="border-t border-t-gray-200">
        <SidebarNavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;