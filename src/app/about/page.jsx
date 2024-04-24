import React from 'react';
import Image from 'next/image';
import myPic from "@/app/public/images/Kongkon.jpg"

import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


const About = () => {
    return (
        <div className={roboto.className}>
            <h1 className="text-3xl font-bold text-center my-4">This is About page</h1>
            <div className="flex justify-evenly items-center">
            <Image className='rounded-full border-4 p-2' src="https://static-files.cricket-australia.pulselive.com/headshots/440/651-camedia.png" width={300} height={300} alt="soumya sarkar"/>
            <Image className='rounded-full border-4 p-2' src={myPic} alt="my-pic" width={200} height={150}/>
            </div>
        </div>
    );
};

export default About;