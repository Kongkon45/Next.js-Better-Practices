import React from 'react';
import Link from 'next/link';

export async function generateStaticParams({}) {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  const ids = blogs.map((blog)=>{
    return {
      id : blog.id + ""
    }
  })
  // console.log(ids)
  return ids;
}

const BlogDetails = async ({params}) => {
    // console.log(params.id)
    const res = await fetch(`http://localhost:5000/blogs/${params.id}`);
    const blog = await res.json();
    
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-4">Single blogs : {params.id}</h1>
            <div
            key={blog.id}
            className="card w-2/3 mx-auto my-6 bg-gray-100 shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title">{blog.title}</h2>
              <p>{blog.description}</p>
              <p>Likes : {blog.likesCount}</p>
              <div className="card-actions justify-end">
                <Link href={`/blogs`}>
                  <button className="btn btn-primary">Back</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    );
};

export default BlogDetails;