import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RatingStars from "../../ReusableComponents/ratingStars";
import Image from "next/image";

interface AdCardProps {
  name: string;
  rate: number;
  price: number;
  project_name: string;
  views: number;
  requests: number;
  tags: string[];
  href: string;
  label: string;
}

const AdCard: React.FC<AdCardProps> = ({ name, rate, price, project_name, views, requests, tags, href, label }) => {
  return (
    <Card className="w-[370px] min-h-[134px] p-4 flex flex-col justify-between border rounded-xl shadow-md bg-primary">
      <div className="flex justify-between items-start flex-col gap-1">
        <div>
          <h2 className="text-base font-semibold text-white" > {name.length > 40 ? name.substring(0, 40) + "..." : name}</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex space-x-1 text-yellow-400">
            <RatingStars rating={rate}/>
            <h2 className="text-sm font-semibold text-white" >{rate.toFixed(1)}</h2>
          </div>
          <div className="flex flex-row gap-2">
            <Image src='/icons/Subtract.svg' alt='price' width={10} height={16}/>
            <h2 className="text-sm font-semibold text-white" >{price.toFixed(0)}</h2>
          </div>
          <div className="flex flex-row">
            <h2 className="text-sm font-semibold text-white" >          
              <a href={"/widgets/"+href} className="text-sm text-white hover:underline">{project_name}</a></h2>
          </div>
        </div>
        <div className="flex justify-between items-center gap-6">
          <div className="flex flex-row gap-1 items-end">
            <h2 className="text-sm font-semibold text-gray-500" >          
              {views}k
            </h2>
              <span className="text-xs font-semibold text-gray-500">views</span>
          </div>
          <div className="flex flex-row gap-1 items-end">
            <h2 className="text-sm font-semibold text-gray-500" >          
              {requests}
            </h2>
              <span className="text-xs font-semibold text-gray-500">requests</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag, index) => (
          <Badge key={index} variant="outline" className="text-xs px-2 py-1 text-white">
            {tag}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

export default AdCard;