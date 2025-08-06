'use client';

import * as React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import SidebarCategories from '@/components/LayoutHOC/components/sidebar-components/SidebarCategories';
import ModeToggle from '@/components/LayoutHOC/components/sidebar-components/ModeToggle';
import sidebarItems from '@/components/LayoutHOC/components/sidebar-components/SidebarItems';
import AppSidebarHeader from '@/components/LayoutHOC/components/site-header-components/AppSidebarHeader';
import { HomeIcon } from 'lucide-react';

const AppSidebar = ({ ...props }) => {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <AppSidebarHeader />
      <Separator />
      <SidebarContent>
        <SidebarCategories items={sidebarItems} />
      </SidebarContent>
      <SidebarFooter className="border-t border-t-gray-200 dark:border-t-gray-600/30">
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
