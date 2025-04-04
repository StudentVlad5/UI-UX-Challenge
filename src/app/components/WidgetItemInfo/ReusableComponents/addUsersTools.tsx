import { userTools } from "@/CONSTANTS";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const AddUsersTools: React.FC = () => {
  return (
    <>
    <div className="flex flex-row gap-[8px] mr-12">
    {userTools.map(it=> {return(
      <Link key={it.label} href={it.link} aria-label={it.label}>
        <Image  src={it.href} alt={it.label} width={36} height={36} />
      </Link>
    )})}
    </div>
    
    </>
  );
};

export default AddUsersTools;
