"use client";

import { Category } from "@prisma/client";
import {
  FcBriefcase,
  FcComboChart,
  FcEngineering,
  FcMoneyTransfer,
  FcMultipleDevices,
  FcSalesPerformance,
} from "react-icons/fc";

import { MdScience } from "react-icons/md";
import { IconType } from "react-icons";

import { CategoryItem } from "./categories-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  Business: FcMoneyTransfer,
  Law: FcBriefcase,
  "Environmental Science": MdScience,
  Economics: FcComboChart,
  Accounting: FcSalesPerformance,
  "Computer Science": FcMultipleDevices,
  Engineering: FcEngineering,
};

export const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  );
};
