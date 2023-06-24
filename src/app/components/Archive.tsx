' use client'

import ArchiveCard from "@/app/components/ArchiveCard";
import { useState } from "react";
import { motion } from "framer-motion";


const Archive = () => {

  const [showMore, setShowMore] = useState(false)

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-4">
      <div className="w-full flex flex-col items-center text-center">
        <h3 className="text-3xl font-semibold">Outros Projetos</h3>
        <p className="text-sm text-textGreen">Veja os arquivos</p>
      </div>
      <div className="grid grid-cols-1 md:grid-col-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard 
        title="Pokemon Slider"
        desc="Um slider feito para mostrar alguns cards do famoso desenho Pokemon"
        listItem={["HTML", "CSS", "JAVASCRIPT"]}
        link="https://iamcarllosjr.github.io/projeto-slider-pokemon" />
        <ArchiveCard 
        title="Landing Page"
        desc="Lorem ipsum dolor sit, Lorem ipsum dolor sit, amet consectetur adipisicing. amet consectetur adipisicing."
        listItem={["HTML", "CSS", "JAVASCRIPT"]}
        link="https://iamcarllosjr.github.io/landing-page/" />
        <ArchiveCard 
        title="NFT Card"
        desc="Um card estildo NFT feito em através de um desafio do Front end Mentor."
        listItem={["HTML", "CSS"]}
        link="https://iamcarllosjr.github.io/nft-preview-card-frontend-mentor/" />
        <ArchiveCard 
        title="Lista de Usuários Via API"
        desc="Projeto criado para aprimorar conhecimento em API, buscando dados e os tratando no front web"
        listItem={["TYPESCRIPT", "TAILWIND", "FETCH API"]}
        link="https://lista-de-usuarios-via-api.vercel.app/" />
        <ArchiveCard 
        title="Javascript Age Calculator"
        desc="App para calcular data de nascimento"
        listItem={["NEXTJS", "TAILWIND", "TYPESCRIPT"]}
        link="https://javascript-age-calculator-eight.vercel.app/" />
        <ArchiveCard 
        title="Dapp para Envio de Crypto Moedas"
        desc="Dapp cuja finalidade é receber cryptomoedas, usando um smart-contract escrito na linguagem Solidity"
        listItem={["NEXTJS", "TAILWIND", "TYPESCRIPT", "SOLIDITY"]}
        link="https://github.com/iamcarllosjr/give-me-money/tree/main" />

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