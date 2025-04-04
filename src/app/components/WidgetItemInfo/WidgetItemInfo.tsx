import React from "react";
import AdCard from "./AdCard";
import CommentItem from "./Comments";


interface BreadcrumbInfoProps {
  item: { label: string; 
    href: string; 
    name: string; 
    rate: number;
    price: number;
    project_name: string;
    views: number;
    requests: number;
    tags: Array<string>;
}};

const BreadcrumbInfo: React.FC<BreadcrumbInfoProps> = ({ item }) => {
  return (
    <nav className="bg-black p-4 flex flex-col items-center justify-center max-w-[724px] mx-auto">
      <AdCard {...item}/>
      <CommentItem/>
    </nav>
  );
};

export default BreadcrumbInfo;

