import React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface ButtonCommentProps {
  img?: string;
  but_name: string;
}

const ButtonComment: React.FC<ButtonCommentProps> = ({ img, but_name }) => {
  return (
      <button type="button" className="flex flex-wrap gap-2 mt-2">
          <Badge className="bg-gray-700 text-white text-[12px] px-2 py-1 rounded-md">
                {img && <Image src={img} alt={but_name} width={16} height={16} className="mr-1"/>}
                <span className="text-sm text-gray-400 font-normal">{but_name}</span>
          </Badge>
      </button>
  );
};

export default ButtonComment;
