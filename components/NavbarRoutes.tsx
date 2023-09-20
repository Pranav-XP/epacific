"use client";

import { UserButton } from "@clerk/nextjs";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

const NavbarRoutes = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isPlayerPage ? (
        <Button>
          <LogOut className="h-4 w-4 mr-2" />
          Exit
        </Button>
      ) : (
        <Link href="/teacher/courses">
          <Button className="text-slate-700" size="sm" variant={"ghost"}>
            Teacher Mode
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/"></UserButton>
    </div>
  );
};

export default NavbarRoutes;
