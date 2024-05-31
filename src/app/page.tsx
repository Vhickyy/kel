import Header from "@/components/Header";
import Image from "next/image";
import Profile from "@/images/aboutImg3.png"
import Office from "@/images/kel-office.jpg"
import {motion} from "framer-motion";
import About from "@/components/About";
import Videos from "@/components/Videos";
import Project from "@/components/Projects";

export default function Home() {
  return (
    <>
    <Header/>
      <section className="flex w-[85%] max-w-[1200px] mx-auto justify-between items-center py-[8rem]">
        <aside>
          {/* <motion.div className="pt-[10rem]  md:pt-[4rem]" */}
        {/* initial={{opacity:0, x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1}}
        > */}
            <p className="text-primary text-lg">Hi 👋, my name is</p>
            <h1 className="text-textColor text-3xl font-extrabold mt-6 tracking-wide md:text-5xl leading-normal md:leading-normal ">Kelechi Augustine Okorie
            <br/>
            <div className='flex gap-4'>
            - <p className='text'>Graphic Designer.</p>
            </div>
           </h1>
            <p className='text-textgray leading-loose mt-6 lg:w-[40rem] tracking-wider'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, aut quisquam. Esse doloribus. Esse doloribus.</p>
        {/* </motion.div>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1,y:-20}}
        transition={{duration:1,y:0}}
        > */}
          <div className=' mt-10 flex gap-4 text-primary items-center lg:hidden'>
            {/* <FaFacebook className="h-[1.5rem] w-[1.5rem]"/>
            <FaInstagram className="h-[1.5rem] w-[1.5rem]"/>
            <FaYoutube className="h-[2rem] w-[1.5rem]"/> */}
          </div>
          <div className='flex gap-4 mt-6 lg:mt-[3rem]'>
            <button className='text-lg tracking-wide border-primary border-2 py-2 px-4 rounded-lg text-primary font-medium'>Download CV</button>
            <button className='text-lg tracking-wide border-primary border-2 py-2 px-4 rounded-lg bg-primary font-medium text-accent'>Portfolio</button>
          </div>
        {/* </motion.div> */}
        </aside>
        <div className='h-[17rem] w-[10rem] sm:w-[17rem] bg-blur  top-[15%] right-0 -z-10 blur-[7rem] rounded-full'></div>
        {/* <aside className="w-[40%]">
          <div className="w-full h-[25rem] rounded-full relative  overflow-hidden">
            <Image src={Profile} alt="" width={350} height={350}  className=" w-full absolute inset-0 -mt-9 object-contain"/>
          </div>
            <button>Hire Me</button>
        </aside> */}
      </section>
      <About />
      <Project />
      <Videos />
      {/* <section>
        <h2>About Me</h2>
        <Image src={Office} alt="" width={350} height={350}  className=" w-full "/>
        <p className='text-textgray leading-loose tracking-wider'>
          I am a Business Management graduate, a Business Assistant and a <span className="text-primary font-bold ">Canva Expert</span> with more than 3years experience. I am also a <span className="text-primary font-bold">Canvassador</span>. I take my client's work very seriously and always deliver on time.
          </p>
          <p className='text-textgray leading-loose mt-6   tracking-wider'>
          My works are always exceptional and extraordinary; reason why my clients stick with me.
          I create attractive and scroll-stopping designs for business owners that help them grab the attention of their target/potential customers.
          I also tutor people on how to make better use of Canva. I have trained over a thousand people.
          </p>
      </section> */}
    </>
  );
}
