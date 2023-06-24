import SectionTitle from '@/app/components/SectionTitle';
import {AiFillThunderbolt} from 'react-icons/ai';
import Image from 'next/image';
import profile from '../../../public/images/wtap.jpeg';

const About = () => {
  return (
    <section id="about" className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'>
        <SectionTitle title='Sobre'/>
        <div className='flex flex-col lgl:flex-row gap-16'>
          <div className='w-full lgl:w=2/3 text-base text-textDark font-medium flex flex-col gap-4'>
            <p>
              Olá ! Meu nome é Carlos, gosto de criar coisas para internet, meu interesse em ser Web Developer veio através de jogos online, e NFTs.
              Comecei a estudar em janeiro de 2022. Tenho o objetivo de entrar no mundo do desenvolvimento web, e ser um grande desenvolvedor !
            </p>
            <p>Aqui estão algumas tecnologias e estruturas com as quais tenho trabalhado recentemente</p>
            <ul className='m-w-[450px] text-sm font-semibold grid grid-cols-2 gap-2 mt-6'>
              <li className='flex items-center gap-2'>
                <span className='text-textGreen'><AiFillThunderbolt/></span>HTML 5
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-textGreen'><AiFillThunderbolt/></span>Javascript (ES6+)
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-textGreen'><AiFillThunderbolt/></span>CSS
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-textGreen'><AiFillThunderbolt/></span>Typescript
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-textGreen'><AiFillThunderbolt/></span>TailwindCSS
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-textGreen'><AiFillThunderbolt/></span>Nextjs
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-textGreen'><AiFillThunderbolt/></span>React
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-textGreen'><AiFillThunderbolt/></span>Solidity
              </li>
            </ul>
          </div>

          <div className='w-full lgl:w-1/3 h-80 relative group'>
            <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
              <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
                <Image className='rounded-lg h-full object-cover' src={profile} alt='profile' />
                <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300'>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About