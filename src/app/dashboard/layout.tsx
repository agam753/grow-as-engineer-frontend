"use client";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider, useAuth } from "@/contexts/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { token } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (token === null) {
      router.replace("/dashboard/login");
    }
  }, [token, router]);

  return <>{children}</>;
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <main>
        <ProtectedContent>{children}</ProtectedContent>
        <Toaster />
      </main>
    </AuthProvider>
  );
}
