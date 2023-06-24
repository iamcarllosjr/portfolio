import {motion} from "framer-motion";
import Link from "next/link";


const Banner = () => {
  return (
    <section id="home" className='max-w-contentContainer  mx-auto py-24 px-4 mdl:px-10  flex flex-col  mdl:items-center 
    gap-4 lgl:gap-8'>
        <motion.h3 
        initial={{y:10, opacity:0 }}
        animate={{y:0, opacity:1}}
        transition={{duration:0.5, delay:0.6}}
        className='text-lg font-normal tracking-wide text-textGreen text-center'>Olá, me chamo
        </motion.h3>

        <motion.h1
        initial={{y:10, opacity:0 }}
        animate={{y:0, opacity:1}}
        transition={{duration:0.5, delay:0.7}}
        className="text-4xl lgl:text-6xl font-semibold flex flex-col text-center"
        >Carlos Junior. 
        <span className="text-textDark mt-2 lgl:mt-4">Eu construo coisas para a web.</span>
        </motion.h1>

        <motion.p
        initial={{y:10, opacity:0 }}
        animate={{y:0, opacity:1}}
        transition={{duration:0.5, delay:0.8}}
        className="text-base md:max-w-[650px] text-textDark font-medium flex flex-col gap-2"
        >Iniciei meus estudos para ser um desenvolvedor front-end. Ainda não tenho experiência profissional, apenas meus projetos pessoais. Estou procurando meu primeiro emprego como desenvolvedor.
        
        </motion.p>
        
        <Link href="https://github.com/iamcarllosjr" target="_blank">
        <motion.button
        initial={{y:10, opacity:0 }}
        animate={{y:0, opacity:1}}
        transition={{duration:0.5, delay:0.9}}
        className="w-52 h-14 text-sm font-medium border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300">
        Check out my project !
        </motion.button>
        </Link>
    </section>
  )
}

export default Banner;
