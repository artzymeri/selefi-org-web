import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import * as React from 'react';

const AppSidebarHeader = () => {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild className="flex items-center">
            <a href="/">
              <img
                className="h-16 dark:invert-0 invert aspect-square"
                src="/selefi-org-transparent-mono.png"
                alt="Selefi.org"
              />
              <Separator orientation="vertical" />
              <p className="text-muted-foreground text-center text-xs">
                Lidhja juaj me dijetarët e sunnetit.
              </p>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
};

export default AppSidebarHeader;
