import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/shared/sidebar/dashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <section>
        {/* TODO: application is getting refreshed on navigation, need to see */}
        {/* TODO: style sidebar trigger */}
        <SidebarTrigger className="sidebarTrigger" />
        {children}
      </section>
    </SidebarProvider>
  );
}
