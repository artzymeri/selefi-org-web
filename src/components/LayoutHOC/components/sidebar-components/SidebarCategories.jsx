'use client';

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { IconStackFront } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { cn } from '@/lib/utils';
import { ChevronDown, HomeIcon } from 'lucide-react';

const SidebarCategories = ({ items }) => {
  const router = useRouter();

  const currentCategory = router.pathname.split('/')[1];

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuButton
            className={cn(
              router.pathname === '/' &&
                'bg-secondary-foreground active:bg-secondary-foreground [&_*]:text-secondary hover:bg-secondary-foreground hover:[&_*]:text-secondary shadow-md cursor-default'
            )}
            onClick={() => router.push('/')}
          >
            <HomeIcon />
            <span>Ballina</span>
          </SidebarMenuButton>
          <Collapsible defaultOpen className="group/collapsible">
            <CollapsibleTrigger asChild>
              <SidebarMenuButton className="mb-1">
                <IconStackFront />
                <span className="font-bold">Kategoritë</span>
                <ChevronDown className="ml-auto transition-all group-data-[state=open]/collapsible:rotate-180" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {items.map((item) => (
                  <SidebarMenuSubItem key={item.title}>
                    <SidebarMenuSubButton
                      tooltip={item.title}
                      className={cn(
                        currentCategory === item?.url &&
                          'bg-secondary-foreground active:bg-secondary-foreground [&_*]:text-secondary hover:bg-secondary-foreground hover:[&_*]:text-secondary shadow-md cursor-default'
                      )}
                      onClick={() => {
                        if (currentCategory !== item?.url) {
                          router.push(item?.url);
                        }
                      }}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </Collapsible>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default SidebarCategories;
