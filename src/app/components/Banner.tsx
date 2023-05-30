import {motion} from "framer-motion";

const Banner = () => {
  return (
    <section id="home" className='max-w-contentContainer mx-auto py-10 px-20 mdl:py-24 flex flex-col 
    gap-4 lgl:gap-8'>
        <motion.h3 
        initial={{y:10, opacity:0 }}
        animate={{y:0, opacity:1}}
        transition={{duration:0.5, delay:0.6}}
        className='text-lg font-normal tracking-wide text-textGreen'>Hi, my name is
        </motion.h3>

        <motion.h1
        initial={{y:10, opacity:0 }}
        animate={{y:0, opacity:1}}
        transition={{duration:0.5, delay:0.7}}
        className="text-4xl lgl:text-6xl font-semibold flex flex-col"
        >Carlos Junior. 
        <span className="text-textDark mt-2 lgl:mt-4">I build things for the web.</span>
        </motion.h1>

        <motion.p
        initial={{y:10, opacity:0 }}
        animate={{y:0, opacity:1}}
        transition={{duration:0.5, delay:0.8}}
        className="text-base md:max-w-[650px] text-textDark font-medium flex flex-col gap-2"
        >I am front end developer. I still dont have professional experience, just my personal projects. Im looking for my first job as a developer.
        <a href="" target="_blank">
        <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">Learn More
        <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
        </span>
        </a>
        </motion.p>

        <motion.button
        initial={{y:10, opacity:0 }}
        animate={{y:0, opacity:1}}
        transition={{duration:0.5, delay:0.9}}
        className="w-52 h-14 text-sm font-medium border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300">
        Check out my project !
        </motion.button>
    </section>
  )
}

export default Banner;
