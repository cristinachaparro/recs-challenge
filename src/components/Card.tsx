import Image from "next/image";
import Reply from "./Reply";
import { useState } from "react";

type Props = {
  post: {
    author: string;
    date: string;
    content: string;
    likes: number;
    comments: number;
    saved: number;
  };
};

function Card({ post }: Props) {
  const [showComment, setShowComment] = useState(false);
  return (
    <>
      <div className="relative border rounded-lg border-gray-400">
        <div className="p-4">
          <div className="flex mb-4">
            <div className="w-12 h-12 rounded-full bg-emerald-600"></div>
            <div className="ml-2">
              <p className="font-bold">{post.author}</p>
              <p className="text-gray-500">{post.date}</p>
            </div>
            <div className="absolute top-6 right-6">
              <Image width={16} height={16} src="/more.png" alt="more icon" />
            </div>
          </div>
          {post.content.split("\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="border-t-2 border-gray-300 flex justify-around px-4 py-2">
          <button>
            <Image
              className="inline-block"
              width={30}
              height={30}
              src="/like.png"
              alt="like icon"
            />
            <span className="text-gray-500 ml-2">{post.likes}</span>
          </button>
          <button onClick={() => setShowComment(!showComment)}>
            <Image
              className="inline-block"
              width={30}
              height={30}
              src="/comment.png"
              alt="comment icon"
            />
            <span className="text-gray-500 ml-2">{post.comments}</span>
          </button>
          <button>
            <Image
              className="inline-block"
              width={30}
              height={30}
              src="/save.png"
              alt="save icon"
            />
            <span className="text-gray-500 ml-2">{post.saved}</span>
          </button>
        </div>
      </div>
      {showComment && <Reply />}
    </>
  );
}

export default Card;
