import Image from "next/image";
import SectionTitle from "@/app/components/SectionTitle";
import { github, fullmint, dapp } from "../../../public";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx"


const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
       <SectionTitle title="Algumas coisas que construí"/>
       {/* Project One */}
       <div className="w-full flex flex-col items-center item-center justify-between gap-28 mt-10">
       <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
            <a className="w-full xl:w-1/2 h-auto relative group" href="https://dapp-rouge.vercel.app/" target="_blank">
                <Image className="h-full" src={fullmint} alt="project"/>
            </a>
            
        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-center
                        text-right xl:-ml-16 z-10">
          <p className="font-medium text-textGreen text-sm tracking-wide">Projeto em Destaque</p>
          <h3 className="text-2xl font-bold">Full Mint Website</h3>
          <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md text-center">
          Website com suporte a mint de NFTS</p>
            <ul className="text-xs md:text-sm font-medium tracking-wide flex gap-2
              md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>TailwindCSS</li>
              <li>Solidity</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a href="https://github.com/iamcarllosjr/full-mint-dapp" target="_blank">
                <TbBrandGithub />
              </a>
              <a href="https://dapp-rouge.vercel.app/" target="_blank">
                <RxOpenInNewWindow />
              </a>
            </div>
        </div>
        </div>
       </div>
       {/* Project Two */}
       <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a className="w-full xl:w-1/2 h-auto relative group" href="https://github-user-pearl.vercel.app/" target="_blank">
                <Image className="h-full" src={github} alt="project"/>
            </a>
            
        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-center
                        text-right xl:-mr-16 z-10">
          <p className="font-medium text-textGreen text-sm tracking-wide">Projeto em Destaque</p>
          <h3 className="text-2xl font-bold">Github User Finder</h3>
          <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md text-center">
          Projeto criado para fazer buscas de usuários do Github, utilizando a API do próprio.</p>
            <ul className="text-xs md:text-sm font-medium tracking-wide flex gap-2
              md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>TailwindCSS</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a href="https://github.com/iamcarllosjr/github-user" target="_blank">
                <TbBrandGithub />
              </a>
              <a href="https://github-user-pearl.vercel.app/" target="_blank">
                <RxOpenInNewWindow />
              </a>
            </div>
        </div>
        </div>
       </div>
       {/* Project Three */}
       <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
            <a className="w-full xl:w-1/2 h-auto relative group" href="https://tailwind-clone-spotify.vercel.app/" target="_blank">
                <Image className="h-full" src={dapp} alt="project"/>
            </a>
            
        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-center
                        text-right xl:-ml-16 z-10">
          <p className="font-medium text-textGreen text-sm tracking-wide">Projeto em Destaque</p>
          <h3 className="text-2xl font-bold">Dapp para envio de mensagens</h3>
          <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md text-center">
          Dapp criado para enviar mensagens a blockchain e retorná-las ao frontend</p>
            <ul className="text-xs md:text-sm font-medium tracking-wide flex gap-2
              md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>TailwindCSS</li>
              <li>Solidity</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a href="https://github.com/iamcarllosjr/send-messages-dapp" target="_blank">
                <TbBrandGithub />
              </a>
              <a href="https://github.com/iamcarllosjr/send-messages-dapp" target="_blank">
                <RxOpenInNewWindow />
              </a>
            </div>
        </div>
        </div>
       </div>
       </div>
    </section>
  )
}

export default Projects;