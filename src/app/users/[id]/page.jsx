import Link from 'next/link';
import React from 'react';

export const generateMetadata = async ({params})=> {
  const {id} = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    title: user.name,
    description: user.email,
    }
};

const UserDetails = async ({params}) => {
    // console.log(params.id)
    const {id} = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    // console.log(user)

    
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-4">Single User : {user.name}</h1>
            <div className="card bg-gray-100 shadow-xl w-1/2 mx-auto my-6">
                    <div className="card-body">
                      <h2 className="card-title">{user.name}</h2>
                      <p>{user.email}</p>
                      <p>{user.phone}</p>
                      <p className='btn-link cursor-pointer'>{user.website}</p>
                      <div className="card-actions justify-end">
                        <Link href="/users"><button className="btn btn-primary">Back</button></Link>
                      </div>
                    </div>
                  </div>
        </div>
    );
};

export default UserDetails;