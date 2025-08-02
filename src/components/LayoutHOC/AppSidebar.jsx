"use client"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
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
import SidebarNavMain from "@/components/LayoutHOC/SidebarNavMain";
import SidebarNavDocuments from "@/components/LayoutHOC/SidebarNavDocuments";
import SidebarNavSecondary from "@/components/LayoutHOC/SidebarNavSecondary";

const data = {
  navMain: [
    {
      title: "Akideh",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Menhexh",
      url: "#",
      icon: IconListDetails,
    },
    {
      title: "Kuran",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Hadith",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "Fikh",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Etikë",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Daue",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Dituria",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Sira",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Sahabët",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Dijetarët",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Motrat",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Refuzime",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Bidat",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Sektet",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Histori",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Muaji i Ramazanit",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Shoqatat",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Politikë",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Demonstratat",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Aktualitet",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Fetua rreth Mjekësisë",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Rreth Teorive Shkencore",
      url: "#",
      icon: IconUsers,
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
      <SidebarFooter>
        <SidebarNavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;