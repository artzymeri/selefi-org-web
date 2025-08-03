import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar";
import AppSidebar from "@/components/LayoutHOC/components/AppSidebar";
import {SiteHeader} from "@/components/LayoutHOC/components/SiteHeader";


const LayoutHOC = ({children, title, className = 'p-6'}) => {
    return (
        <SidebarProvider
            style={{
                "--sidebar-width": "calc(var(--spacing) * 72)",
                "--header-height": "calc(var(--spacing) * 12)",
            }}
        >
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader title={title} />
                <div className={className}>
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}

export default LayoutHOC;