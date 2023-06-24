import { motion } from "framer-motion";
import {MdOutlineKeyboardDoubleArrowRight} from "react-icons/md";

const Splash = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className="w-full">
        <h3 className="flex gap-1 font-medium text-xl">Front End Developer 
        <span className="text-textGreen tracking-wide">@Your Company</span></h3>
        <p className="text-sm mt-1 font-medium text-textDark">Seja a primeira empresa a estar aqui !</p>
        <ul className="mt-5 flex flex-col gap-3">
            <li className="text-base flex gap-1 items-center text-textDark mt-2">
            <span className="text-textGreen"><MdOutlineKeyboardDoubleArrowRight/></span>
            Write modern, perfomant, maintainable code for a diverse array of
            client and internal projects.</li>
            <li className="text-base flex gap-1 items-center text-textDark mt-2">
            <span className="text-textGreen"><MdOutlineKeyboardDoubleArrowRight/></span>
            Write modern, perfomant, maintainable code for a diverse array of
            client and internal projects.</li>
            <li className="text-base flex gap-1 items-center text-textDark mt-2">
            <span className="text-textGreen"><MdOutlineKeyboardDoubleArrowRight/></span>
            Write modern, perfomant, maintainable code for a diverse array of
            client and internal projects.</li>
        </ul>
    </motion.div>
  )
}

export default Splash;