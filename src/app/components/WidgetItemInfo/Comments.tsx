import React from "react";
import DownloadButton from "../ReusableComponents/downloadButton";
import Comment from "../ReusableComponents/comment";
import Image from "next/image";

const CommentItem = () => {
  return (
    <div className="bg-black min-h-screen text-white w-full max-w-[724px]">
      <h1 className="text-xl font-bold text-gray-500 mb-[16px]">Example Output</h1>
      <DownloadButton/>
      <div className="mt-[64px]">
        <div className="flex items-center gap-2 mb-[32px]">
          <Image  src='/icons/Avatar_gray.svg' alt="avatar gray" width={48} height={53} />
          <h2 className="text-lg font-semibold text-[16px] text-gray-500">Share your thoughts...</h2>
        </div>
        <Comment
          user="dolrogue"
          text="I wouldn't call concurrent futures more 'advanced' - it's a simpler interface that works very much the same regardless of whether you use multiple threads or multiple processes as the underlying parallelization gimmick. Personally, I think that to import multiprocessing as mp def mp_factorizer_map(nums, nprocs): with mp.Pool(nprocs) as pool: return {num: factors for num, factors in zip(nums, pool.map(factorize_naive, nums))}"
          likes={18} dislike={2} replies={3}
        />
        <div className="ml-[40px]">
          <Comment
            user="dolrogue"
            text="I wouldn't call concurrent futures more 'advanced' - it's a simpler interface that works very much the same regardless of whether you use multiple threads or multiple processes as the underlying parallelization gimmick. Personally, I think that to import multiprocessing as mp def mp_factorizer_map(nums, nprocs): with mp.Pool(nprocs) as pool: return {num: factors for num, factors in zip(nums, pool.map(factorize_naive, nums))}"
            likes={18} dislike={2} replies={3}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentItem