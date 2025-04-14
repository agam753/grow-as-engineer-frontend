"use client";

import { Button } from "@/components/ui/button";
import { userLogout } from "@/helpers/adminHttpHelper";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const DashboardNavbar = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const logoutHandler = async () => {
    try {
      setIsLoading(true);
      await userLogout();
      toast({
        title: "Logged out successfully",
        description: "You have been logged out",
        variant: "default",
      });
      router.replace("/login");
    } catch (error) {
      console.error(error);
      const errorMessage = (error as Error).message || "Failed to logout";
      toast({
        title: "Logout Error",
        description: `${errorMessage}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <nav className="navigationBar flex justify-between align-middle p-4 mb-4 gap-2 border-b backdrop-blur-lg sticky top-0 z-20 bg-opacity-70">
      {" "}
      <div>
        <Button variant={"ghost"} className="text-lg px-4 capitalize">
          <Link href={"/control-panel"}>My Profile</Link>
        </Button>
        <Button variant={"ghost"} className="text-lg px-4">
          <Link href={"/control-panel/jobs"}>Jobs</Link>
        </Button>
        <Button variant={"ghost"} className="text-lg px-4">
          <Link href={"/control-panel/users"}>Users</Link>
        </Button>
      </div>
      <div>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded"
          onClick={logoutHandler}
        >
          {isLoading ? "Logging out..." : "Logout"}
        </button>
      </div>
    </nav>
  );
};
