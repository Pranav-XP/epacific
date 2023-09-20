import React from "react";
import { Logo } from "./Logo";
import SidebarRoutes from "./SidebarRoutes";

const Sidebar = () => {
  return (
    <aside className="h-full border-r flex flex-col overflow-y-auto bg-white-shadow-sm">
      <div className="">
        <Logo></Logo>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes></SidebarRoutes>
      </div>
    </aside>
  );
};

export default Sidebar;
