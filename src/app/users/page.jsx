import Link from 'next/link'

import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "User page",
  description: "User page description",
};

const Users = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    // console.log(users)
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-4">All Users : {users.length}</h1>
            <div className={roboto.className}>
            {
                users?.map((user)=>{
                    return <div key={user.id} className="card bg-gray-100 shadow-xl w-1/2 mx-auto my-6">
                    <div className="card-body">
                      <h2 className="card-title">{user.name}</h2>
                      <p>{user.email}</p>
                      <p>{user.phone}</p>
                      <p className='btn-link cursor-pointer'>{user.website}</p>
                      <div className="card-actions justify-end">
                        <Link href={`/users/${user.id}`}><button className="btn btn-primary">See More</button></Link>
                      </div>
                    </div>
                  </div>
                })
            }
            </div>
        </div>
    );
};

export default Users;