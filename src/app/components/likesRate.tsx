"use client"
import React, { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";

const LikesRate: React.FC = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="flex space-x-4">
      <button
        className="flex items-center space-x-1 text-green-500 hover:text-green-600"
        onClick={() => setLikes(likes + 1)}
      >
        <ThumbsUp className="w-5 h-5" />
        <span>{likes}</span>
      </button>
      <button
        className="flex items-center space-x-1 text-red-500 hover:text-red-600"
        onClick={() => setDislikes(dislikes + 1)}
      >
        <ThumbsDown className="w-5 h-5" />
        <span>{dislikes}</span>
      </button>
    </div>
  );
};

export default LikesRate;