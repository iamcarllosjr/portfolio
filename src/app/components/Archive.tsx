' use client'

import ArchiveCard from "@/app/components/ArchiveCard";
import { useState } from "react";
import { motion } from "framer-motion";


const Archive = () => {

  const [showMore, setShowMore] = useState(false)

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-4">
      <div className="w-full flex flex-col items-center">
        <h3 className="text-3xl font-semibold">Other Noteworthy Projects</h3>
        <p className="text-sm text-textGreen">View the Archive</p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard 
        title="Pokemon Slider"
        desc="Lorem ipsum dolor sit, Lorem ipsum dolor sit, amet consectetur adipisicing. amet consectetur adipisicing."
        listItem={["HTML", "CSS", "JAVASCRIPT"]}
        link="https://iamcarllosjr.github.io/projeto-slider-pokemon" />
        <ArchiveCard 
        title="Landing Page"
        desc="Lorem ipsum dolor sit, Lorem ipsum dolor sit, amet consectetur adipisicing. amet consectetur adipisicing."
        listItem={["HTML", "CSS", "JAVASCRIPT"]}
        link="https://iamcarllosjr.github.io/landing-page/" />
        <ArchiveCard 
        title="NFT Card"
        desc="Lorem ipsum dolor sit, Lorem ipsum dolor sit, amet consectetur adipisicing. amet consectetur adipisicing."
        listItem={["HTML", "CSS"]}
        link="https://iamcarllosjr.github.io/nft-preview-card-frontend-mentor/" />
        <ArchiveCard 
        title="Lista de Usuários Via API"
        desc="Lorem ipsum dolor sit, Lorem ipsum dolor sit, amet consectetur adipisicing. amet consectetur adipisicing."
        listItem={["TYPESCRIPT", "TAILWIND", "FETCH API"]}
        link="https://lista-de-usuarios-via-api.vercel.app/" />
        <ArchiveCard 
        title="Pokemon Slider"
        desc="Lorem ipsum dolor sit, Lorem ipsum dolor sit, amet consectetur adipisicing. amet consectetur adipisicing."
        listItem={["HTML", "CSS", "JAVASCRIPT"]}
        link="https://iamcarllosjr.github.io/projeto-slider-pokemon" />
        <ArchiveCard 
        title="Pokemon Slider"
        desc="Lorem ipsum dolor sit, Lorem ipsum dolor sit, amet consectetur adipisicing. amet consectetur adipisicing."
        listItem={["HTML", "CSS", "JAVASCRIPT"]}
        link="https://iamcarllosjr.github.io/projeto-slider-pokemon" />

        {
          showMore && (
            <>
            <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.1}}>

            <ArchiveCard 
              title="Pokemon Slider"
              desc="Lorem ipsum dolor sit, Lorem ipsum dolor sit, amet consectetur adipisicing. amet consectetur adipisicing."
              listItem={["HTML", "CSS", "JAVASCRIPT"]}
              link="https://iamcarllosjr.github.io/projeto-slider-pokemon" />
            </motion.div>

            <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.2}}>
            <ArchiveCard 
              title="Pokemon Slider"
              desc="Lorem ipsum dolor sit, Lorem ipsum dolor sit, amet consectetur adipisicing. amet consectetur adipisicing."
              listItem={["HTML", "CSS", "JAVASCRIPT"]}
              link="https://iamcarllosjr.github.io/projeto-slider-pokemon" />
            </motion.div>

            <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.3}}>
            <ArchiveCard 
              title="Pokemon Slider"
              desc="Lorem ipsum dolor sit, Lorem ipsum dolor sit, amet consectetur adipisicing. amet consectetur adipisicing."
              listItem={["HTML", "CSS", "JAVASCRIPT"]}
              link="https://iamcarllosjr.github.io/projeto-slider-pokemon" />
            </motion.div>
 
            </>
          )
        }
      </div>
      <div className="mt-12 flex items-center justify-center">
        {
          showMore ? <button onClick={()=> setShowMore(false)} className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">Show Less
          </button> : <button onClick={()=> setShowMore(true)} className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">Show More
        </button>
        }
      </div>
    </div>
  )
}

export default Archive;