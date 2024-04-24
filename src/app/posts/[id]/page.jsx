import React from 'react';
import getPost from '../../../../lib/getPost';
import Link from "next/link";
import {notFound} from "next/navigation"

const Post = async ({params}) => {
    // console.log(params.id)
    const post = await getPost(params.id)
    if(!post){
        notFound();
    }
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-4">Single Posts : {post.id}</h1>
            <div
            key={post.id}
            className="card w-2/3 mx-auto my-6 bg-gray-100 shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.body}</p>
              <div className="card-actions justify-end">
                <Link href={`/posts`}>
                  <button className="btn btn-primary">Back</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Post;