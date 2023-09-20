"use client";

import { UserButton } from "@clerk/nextjs";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

const NavbarRoutes = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayer = pathname?.includes("/chapter");

  return (
    <div className="flex gap-x-2 ml-auto">
      <UserButton></UserButton>
    </div>
  );
};

export default NavbarRoutes;
