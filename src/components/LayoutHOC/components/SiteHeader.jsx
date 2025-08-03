import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { IconBrandYoutubeFilled } from '@tabler/icons-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import LinkButtons from '@/components/LayoutHOC/components/site-header-components/LinkButtons';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import HeaderSearch from '@/components/LayoutHOC/components/site-header-components/HeaderSearch';

export function SiteHeader({ title = '' }) {
  return (
    <header className="bg-white/30 dark:bg-black/30 backdrop-blur-sm sticky top-0 z-50 flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6 h-full">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">{title}</h1>
        <div className="flex items-center gap-2 ml-auto">
          <HeaderSearch />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
          <LinkButtons />
        </div>
      </div>
    </header>
  );
}
