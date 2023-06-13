"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";
import { logo } from "../../../public"
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialTwitter, SlSocialLinkedin, SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);
  const handeScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    //Update the classname of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  const handleClick = (e:any) => {
    if(e.target.contains(ref.current)){
      setShowMenu(false);
    }
  }

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className='max-w-container h-full mx-auto py-1 font-light flex items-center justify-between'>

        {/* IMAGE */}
        <motion.div 
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        transition={{duration:0.5}}>
        {/* <Image className="w-14" src={logo} alt="logo"/> */}
        <h1 className="text-4xl tracking-widest font-bold">CJ</h1>
        </motion.div>
        {/* IMAGE */}

        {/* LINKS NAVIGATION */}
        <div className="hidden mdl:inline-flex items-center gap-7">
            <ul className="flex text-[15px] gap-7">
                <Link href="#home"
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                onClick={handeScroll} >
                <motion.li
                initial={{y:-10, opacity:0}} 
                animate={{y:0, opacity:1}} 
                transition={{duration:0.1}}
                >Home</motion.li>
                </Link>

                <Link href="#about"
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                onClick={handeScroll} >
                <motion.li
                initial={{y:-10, opacity:0}} 
                animate={{y:0, opacity:1}} 
                transition={{duration:0.1, delay:0.1}}
                >About</motion.li>
                </Link>

                <Link href="#experience"
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                onClick={handeScroll} >
                <motion.li
                initial={{y:-10, opacity:0}} 
                animate={{y:0, opacity:1}} 
                transition={{duration:0.1, delay:0.2}}
                >Experience</motion.li>
                </Link>

                <Link href="#project"
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                onClick={handeScroll} >
                <motion.li
                initial={{y:-10, opacity:0}} 
                animate={{y:0, opacity:1}} 
                transition={{duration:0.1, delay:0.3}}
                >Project</motion.li>
                </Link>

                <Link href="#contact"
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                onClick={handeScroll} >
                <motion.li
                initial={{y:-10, opacity:0}} 
                animate={{y:0, opacity:1}} 
                transition={{duration:0.1, delay:0.4}}
                >Contact</motion.li>
                </Link>
            </ul>

            <a href="/inserir-url-curriculo.pdf" target="_blank">
            <motion.button
            initial={{y:-10, opacity:0}} 
            animate={{y:0, opacity:1}} 
            transition={{delay: 0.5}}
            className="px-4 py-1 rounded-md text-textGreen text-[15px] border border-textGreen hover:bg-hoverColor duration-300"
            >Resume</motion.button>
            </a>

        </div>
        {/* LINKS NAVIGATION */}

        {/* SMALL ICON SECTION */}
        <div onClick={() => setShowMenu(true)} className="w-6 h-5 flex flex-col justify-between items-end mdl:hidden 
        text-4xl text-textGreen cursor-pointer overflow-hidden group">
            <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        
        {/* RESPONSIVE MENU */}
        {
          showMenu && (
            <div ref={(node) => (ref.current = node)} 
              onClick={handleClick} 
              className="absolute mdl:hidden top-0 right-0 w-full h-screen
            bg-black bg-opacity-50 flex flex-col items-end">
              <motion.div 
              initial={{x: 20, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.1,}}
              className="w-[80%] h-full overflow-y-none scrollbarHide bg-[#112240]
              flex flex-col items-center px-4 py-10 relative">
              <MdOutlineClose onClick={() => setShowMenu(false)}
              className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4" />

                <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-[15px] gap-7">
                <Link href="#home"
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                onClick={handeScroll} >
                <motion.li
                initial={{y:-10, opacity:0}} 
                animate={{y:0, opacity:1}} 
                transition={{duration:0.1, delay:0.2, ease:"easeIn"}}
                >Home</motion.li>
                </Link>

                <Link href="#about"
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                onClick={handeScroll} >
                <motion.li
                initial={{y:-10, opacity:0}} 
                animate={{y:0, opacity:1}} 
                transition={{duration:0.1, delay:0.3, ease:"easeIn"}}
                >About</motion.li>
                </Link>

                <Link href="#experience"
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                onClick={handeScroll} >
                <motion.li
                initial={{y:-10, opacity:0}} 
                animate={{y:0, opacity:1}} 
                transition={{duration:0.1, delay:0.4, ease:"easeIn"}}
                >Experience</motion.li>
                </Link>

                <Link href="#project"
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                onClick={handeScroll} >
                <motion.li
                initial={{y:-10, opacity:0}} 
                animate={{y:0, opacity:1}} 
                transition={{duration:0.1, delay:0.5, ease:"easeIn"}}
                >Project</motion.li>
                </Link>

                <Link href="#contact"
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                onClick={handeScroll} >
                <motion.li
                initial={{y:-10, opacity:0}} 
                animate={{y:0, opacity:1}} 
                transition={{duration:0.1, delay:0.6, ease:"easeIn"}}
                >Contact</motion.li>
                </Link>
            </ul>

                 <a href="https://drive.google.com/file/d/14LpmMFCf13aiJNGq3W-j2caRJMrBVWES/view?usp=sharing" target="_blank">
                 <motion.button
                 initial={{y:-10, opacity:0}} 
                 animate={{y:0, opacity:1}} 
                 transition={{delay: 0.7, ease:"easeIn"}}
                 className="px-4 py-1 rounded-md text-textGreen text-[15px] border border-textGreen hover:bg-hoverColor duration-300"
                 >Resume
                 </motion.button>
                 </a>

                 <div className="flex gap-4">
                <motion.a
                initial={{y: 20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 0.70, ease: "easeIn"}}
                href="https://github.com/iamcarllosjr" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
                    justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <TbBrandGithub/>
                    </span>
                </motion.a >
                <motion.a
                initial={{y: 20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 0.75, ease: "easeIn"}} 
                href="https://twitter.com/iamcarllosjr" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
                    justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <SlSocialTwitter/>
                    </span>
                </motion.a>
                <motion.a 
                initial={{y: 20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 0.80, ease: "easeIn"}}
                href="https://www.linkedin.com/in/iamcarllosjr/" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
                    justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <SlSocialLinkedin/>
                    </span>
                </motion.a>
                <motion.a 
                initial={{y: 20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 0.85, ease: "easeIn"}}
                href="https://www.facebook.com/iamcarlosjr" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
                    justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <SlSocialFacebook/>
                    </span>
                </motion.a>
                <motion.a
                initial={{y: 20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 0.90, ease: "easeIn"}}
                 href="https://www.instagram.com/iamcarllosjr/" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
                    justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <SlSocialInstagram/>
                    </span>
                </motion.a>
            </div>
                </div>

              </motion.div>

            </div>
          )
        }
        {/* RESPONSIVE MENU */}

      </div>
    </div>
  )
}

export default Navbar