import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RatingStars from "./ReusableComponents/ratingStars";
import Image from "next/image";
import AddUsersTools from "./ReusableComponents/addUsersTools";

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

const AdCard: React.FC<AdCardProps> = ({ name, rate, price, project_name, views, requests, tags, href }) => {
  return (
    <Card className="w-[740px] flex bg-black text-white overflow-hidden shadow-lg p-4 gap-4 border-none">
      <div className="flex flex-col justify-between w-full gap-[16px]">
        {/* Title */}
        <h2 className="text-2xl font-bold leading-[138%]">
          {name.length > 50 ? name.substring(0, 50) + "..." : name}
        </h2>

        <div className={"flex items-center gap-2 flex-row"}>
          <div className="w-[468px] h-[292px] relative rounded-lg overflow-hidden">
            <Image src="/images/project_img.svg" alt={name} layout="fill" objectFit="cover" />
          </div>
        
          <div className={"flex items-center flex-col justify-center ml-auto mr-auto"}>
            <div className="flex items-center mt-[28px] p-[10px, 12px] flex-col">
              <span className="text-sm font-semibold mb-[6px]">{rate.toFixed(1)}</span>
              <div className="flex items-center gap-1 text-yellow-400 mb-[10px]">
                <RatingStars rating={rate} />
              </div>
              <span className="text-sm text-gray-400 mb-[22px]">1 Rating</span>
            </div>
          
            <h3 className="text-[12px] font-bold leading-[138%] text-cyan-400 mb-[8px]">
              You have 2 free runs
            </h3>

          <div className="flex items-center justify-between">
            <div className="flex flex-row gap-2 mb-[12px]">
              <Image src='/icons/Subtract.svg' alt='price' width={10} height={16}/>
              <h2 className="text-sm font-semibold text-white" >{price.toFixed(0)}</h2>
              <span className="text-[10px] text-yellow-400 flex items-center">-10%</span>
            </div>
          </div>
            <button type="button" aria-label="start" className="bg-yellow-500 text-black text-sm font-semibold px-4 py-2 rounded-lg">GET STARTED</button>
          </div>
        </div>
        {/* Tags */}
        <div className="flex flex-wrap justify-between w-full">
          <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => (
                <Badge key={index} className="bg-gray-700 text-white text-[12px] px-2 py-1 rounded-md">
                  {tag}
                </Badge>
              ))}
          </div>
              <AddUsersTools/>
        </div>
      </div>
    </Card>
  );
};

export default AdCard;