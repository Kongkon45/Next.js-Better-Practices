import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='bg-blue-500 flex justify-center items-center h-12 gap-10'>
                <Link href='/' className='text-white text-2xl font-bold'>Home</Link>
                <Link href='/about' className='text-white text-2xl font-bold'>About</Link>
                <Link href='/blogs' className='text-white text-2xl font-bold'>Blogs</Link>
                <Link href='/posts' className='text-white text-2xl font-bold'>Posts</Link>
                <Link href='/users' className='text-white text-2xl font-bold'>Users</Link>
            </nav>
        </div>
    );
};

export default Navbar;