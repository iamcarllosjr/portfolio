"use client"

import { motion } from "framer-motion";
import { LeftSide, Navbar, About, Banner, Experience, Projects, Archive, Contact, Footer } from "./components"

export default function Home() {
  return (
    <main className="w-full h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll
    scrollbar scrollbar-track-textGreen/20 scrollbar-thumb-textDark/20">
      <Navbar />
      <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1.5}}
        className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
        <LeftSide />
        </motion.div>
        <div className='h-[88vh] mx-auto px-20'>
          <Banner />
          <About />
          {/* <Experience /> */}
          <Projects />
          <Archive />
          <Contact />
          <Footer />
        </div>
      </div>
      
    </main>
  );
}
