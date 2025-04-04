import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";


const DownloadButton = () => (
  <Card className="p-4 flex items-center space-x-4 bg-gray-800 text-white border-none max-w-[260px] hover:bg-gray-500 transition duration-200">
    <button type="button" area-label="download" className="flex items-center space-x-2 w-full h-full rounded-lg">
      <Image src='/icons/file-text.svg' width={28} height={28} alt="File text" />
        <div>
          <p className="text-[16px]">Marketing_Campaign.pdf</p>
          <p className="text-sm text-gray-400">example output</p>
        </div>
    </button>
  </Card>
);
export default DownloadButton