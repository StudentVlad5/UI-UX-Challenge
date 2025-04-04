import React from "react";

interface Comment {
  id: number;
  user: string;
  text: string;
  date: string;
}

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <div key={comment.id} className="p-4 bg-gray-100 rounded-lg">
          <div className="flex items-center space-x-2 text-gray-700">
            <strong>{comment.user}</strong>
            <span className="text-sm">{comment.date}</span>
          </div>
          <p className="mt-1">{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
