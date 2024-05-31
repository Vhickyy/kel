"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import Img from "@/images/aboutImg3.png"
import Office from "@/images/kel-office.jpg"
import {motion} from "framer-motion";
// import {useInView} from "react-intersection-observer";
// import usePortfolioContext from '../context//PortfolioContext';
// import useScroll from './custom/scroll';

function About() {
  // const {ref} = useScroll({name:"about",threshold:0.5});
  
  return (
    <section className='w-[85%] max-w-[1200px] mx-auto pt-[3rem] pb-[5rem]' id="about">
        <h2 className='font-extrabold text-2xl sm:text-3xl text-textColor text-center'>About Me</h2>
      <Image src={Office} alt='kel-office'  className='w-full h-[10rem] object-cover md:object-fill  md:h-[25rem]  mb-8 mt-[5rem] rounded-xl'/>
      <div className='flex gap-4 flex-col lg:flex-row lg:items-center lg:justify-between'>
        <motion.div className='lg:w-[60%]'
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1}}
        >
          <p className='text-textgray leading-loose tracking-wider'>
          I am a Business Management graduate, a Business Assistant and a <span className="text-primary font-bold ">Canva Expert</span> with more than 3years experience. I am also a <span className="text-primary font-bold">Canvassador</span>. I take my client&apos;s work very seriously and always deliver on time.
          </p>
          <p className='text-textgray leading-loose mt-6   tracking-wider'>
          {/* My works are always exceptional and extraordinary; reason why my clients stick with me. */}
          I create attractive and scroll-stopping designs for business owners that help them grab the attention of their target/potential customers.
          I also tutor people on how to make better use of Canva. I have trained over a thousand people.
          </p>
        </motion.div>
        <motion.div className='relative w-[20rem] h-[20rem] bg-primary sm:w-[25rem] sm:h-[25rem] rounded-[50%] overflow-x-hidden mt-4'
        // initial={{x:-100}}
        // whileInView={{x:0}}
        // transition={{duration:0.5}}
        >
          <Image
          alt="About image"
          width={350}
          height={300}
          src={Img}
          // className='absolute top-0 left-1/2'
          className=' absolute top-0 h-full object-cover left-1/2 transform -translate-x-1/2'
          />
        </motion.div>
      </div>
    </section>
  )
}

export default About