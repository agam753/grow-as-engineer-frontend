"use client";
import { DashboardNavbar } from "@/components/shared/dashboard/DashboardNavbar";
import { Toaster } from "@/components/ui/toaster";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {<DashboardNavbar />}
      {children}
      <Toaster />
    </main>
  );
}
