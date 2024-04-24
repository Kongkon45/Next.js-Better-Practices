import React from "react";
import getAllPosts from "../../../lib/getAllPosts";
import Link from "next/link";

const Posts = async () => {
  const posts = await getAllPosts();
  // console.log(posts)
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">
        All Posts : {posts.length}
      </h1>
      <div>
        {posts.map((post) => (
          <div
            key={post.id}
            className="card w-2/3 mx-auto my-6 bg-gray-100 shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.body}</p>
              <div className="card-actions justify-end">
                <Link href={`/posts/${post.id}`}>
                  <button className="btn btn-primary">See More</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
