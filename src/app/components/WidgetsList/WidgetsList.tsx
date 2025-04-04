import React from "react";
import AdCard from "./WidgetItem/AdCard";

interface BreadcrumbsProps {
  items: Array<{ label: string; 
    href: string; 
    name: string; 
    rate: number;
    price: number;
    project_name: string;
    views: number;
    requests: number;
    tags: Array<string>;
}> };

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="bg-black p-4 flex items-center justify-center">
      <ul className="grid grid-cols-2 gap-4 items-center">
        {items.map((item, index) => (
          <li key={index} className="flex">
            <AdCard {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;

