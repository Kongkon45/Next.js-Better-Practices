import Link from 'next/link';
import React from 'react';

const Blogs = async () => {
    const res = await fetch("http://localhost:5000/blogs", {
      cache : "no-store"
    });
    const blogs = await res.json();
    // console.log(blogs)
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-4">This is Blogs page</h1>
            <div>
                {blogs.map((blog)=>(
                    <div
                    key={blog.id}
                    className="card w-2/3 mx-auto my-6 bg-gray-100 shadow-xl"
                  >
                    <div className="card-body">
                      <h2 className="card-title">{blog.title}</h2>
                      <p>{blog.description.length > 100 ? blog.description.slice(0,120)+ "..." : blog.description}</p>
                      <p>Likes : {blog.likesCount}</p>
                      <div className="card-actions justify-end">
                        <Link href={`/blogs/${blog.id}`}>
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

export default Blogs;