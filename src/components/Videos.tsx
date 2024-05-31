"use client"
import React, { useEffect } from 'react'
import youTube from "@/images/youTube1.jpg"
import Image from 'next/image';
import {FaEdit, FaTrash} from "react-icons/fa";
import Office from "@/images/kel-office.jpg"
// import useScroll from './custom/scroll';
// import { Video } from '@prisma/client';

const videos = [
    {
      name: "canva",
      descrition: "about canva design",
      image:"some url",
      link:"link url"
    },
    {
      name: "canva",
      descrition: "about canva design",
      image:"some url",
      link:"link url"
    },
    {
      name: "canva",
      descrition: "about canva design",
      image:"some url",
      link:"link url"
    },
    {
      name: "canva",
      descrition: "about canva design",
      image:"some url",
      link:"link url"
    },
  ]

export default function Videos() {
  // const {ref} = useScroll({name:"videos",threshold:0.3});
  
  return (
    <section className='w-[85%] max-w-[1200px] mx-auto py-[2rem] ' id="video">
        <h2 className='font-extrabold text-2xl sm:text-3xl text-textColor text-center'>Videos</h2>
      <div className=' grid gap-x-12 gap-y-8 pt-[3rem] mt-8 md:grid-cols-2 '>
        {videos.map((video,index)=>{
          return (
            <div key={index} className={'rounded-lg overflow-hidden  text-textColor shadow-md border border-primary p-2'}>
              <div className="">
                <Image
                alt="youube video"
                src={Office}
                width={350}
                height={300}
                className='w-full h-[15rem] object-cover rounded-t-lg '
                  />
              </div>
               <div className='py-6 px-6 bg-bgGray flex flex-col gap-4'>
                <a href={video.link} target='_blank'>Watch video</a>
                <h4 className='text-center text-lg md:text-2xl font-bold capitalize'>{video.name}</h4>
                <p className='text-gray-500'>{video.descrition}.</p>
               </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}