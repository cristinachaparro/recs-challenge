import React, { useState } from "react";
import Card from "./Card";
import Reply from "./Reply";

type Post = {
  id: number;
  author: string;
  date: string;
  content: string;
  likes: number;
  comments: Post[];
  saved: number;
};

type Props = {
  post: Post;
};

function Post({ post }: Props) {
  const [showComments, setShowComment] = useState(false);
  return (
    <div className="flex flex-col items-end">
      <Card post={post} toggleReply={() => setShowComment(!showComments)} />
      {showComments && (
        <>
          <Reply />
          {post.comments.map((post) => (
            <section className="w-4/5" key={post.id}>
              <Card post={post} />
            </section>
          ))}
        </>
      )}
      {/* replies */}
    </div>
  );
}

export default Post;
