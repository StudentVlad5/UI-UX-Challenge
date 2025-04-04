import React from "react";
import Image from "next/image";
import ButtonComment from "./buttonComment";

const Comment = ({ user, text, likes, dislike, replies }: { user: string; text: string; likes: number; dislike:number; replies: number }) => (
  <div className="p-4 border-b border-gray-700">
    <div className="flex items-center space-x-2">
      <Image  src='/icons/Avatar_gray.svg' alt="avatar gray" width={48} height={53} />
      <p>
        <span className="font-semibold text-white">{user}</span>
        <span className="font-semibold text-gray-500 text-[10px] pl-[18px]">2d 7h ago</span>
        <span className="font-semibold text-gray-500 text-[10px] pl-[7px]">(edited)</span>
      </p>
    </div>
    {text && text.split('.').map((it, index)=>{return(<p key={index} className="text-gray-300 mt-2">{it}</p>)})}
    <div className="flex justify-between">
      <div className="flex items-center mt-2 space-x-2 text-gray-400">
        <ButtonComment  img={'/icons/replie.svg'} but_name={"Reply"}/>
        <ButtonComment but_name={'View replies ('+ replies + ')'}/>
        <ButtonComment but_name={'...'}/>
      </div>
      <div className="flex items-center mt-2 space-x-2 text-gray-400">
        <ButtonComment  img={'/icons/thumbs-up.svg'} but_name={`${likes}k`}/>
        <ButtonComment img={'/icons/thumbs-down.svg'} but_name={!dislike || dislike == 0 ? '' : `${dislike}k`}/>
      </div>
    </div>
  </div>
);

export default Comment