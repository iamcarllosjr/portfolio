import SectionTitle from '@/app/components/SectionTitle';
import { Amazon, Apple, Google, ReactBD, Splash } from './works'
import {useState} from 'react';

const Experience = () => {
  const [workReactbd, setWorkReactbd] = useState(true);
  const [workGoogle, setWorkGoole] = useState(false);
  const [workApple, setApple] = useState(false);
  const [workSplash, setWorkSplash] = useState(false);
  const [workAmazon, setWorkAmazon] = useState(false);

  const handleReactbd = () => {
    setWorkReactbd(true);
    setWorkGoole(false);
    setApple(false);
    setWorkAmazon(false);
    setWorkSplash(false);
  }
  const handleGoogle = () => {
    setWorkReactbd(false);
    setWorkGoole(true);
    setApple(false);
    setWorkAmazon(false);
    setWorkSplash(false);
  }
  const handleApple = () => {
    setWorkReactbd(false);
    setWorkGoole(false);
    setApple(true);
    setWorkAmazon(false);
    setWorkSplash(false);
  }
  const handleAmazon = () => {
    setWorkReactbd(false);
    setWorkGoole(false);
    setApple(false);
    setWorkAmazon(true);
    setWorkSplash(false);
  }
  const handleSplash = () => {
    setWorkReactbd(false);
    setWorkGoole(false);
    setApple(false);
    setWorkAmazon(false);
    setWorkSplash(true);
  }

  return (
    <section id="experience" className="max-w-containerxs mx-auto px-20 py-10 lgl:py-24">
     <SectionTitle title='Where i have Worked' />
     <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
        <ul className='md:w-32 flex flex-col'>
            <li onClick={handleReactbd} className={`${workReactbd ? 
            "border-l-textGreen text-textGreen" : 
            "border-l-hoverColor text-textDark" } 
            border-l-2 bg:transparent hover:bg-[#112240] 
            py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>ReactBD</li>

            <li onClick={handleGoogle} className={`${workGoogle ? 
            "border-l-textGreen text-textGreen" : 
            "border-l-hoverColor text-textDark" } 
            border-l-2 bg:transparent hover:bg-[#112240] 
            py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Google</li>
            
            <li onClick={handleApple} className={`${workApple ? 
            "border-l-textGreen text-textGreen" : 
            "border-l-hoverColor text-textDark" } 
            border-l-2 bg:transparent hover:bg-[#112240] 
            py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Apple</li>

            <li onClick={handleAmazon} className={`${workAmazon ? 
            "border-l-textGreen text-textGreen" : 
            "border-l-hoverColor text-textDark" } 
            border-l-2 bg:transparent hover:bg-[#112240] 
            py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Amazon</li>

            <li onClick={handleSplash} className={`${workSplash ? 
            "border-l-textGreen text-textGreen" : 
            "border-l-hoverColor text-textDark" } 
            border-l-2 bg:transparent hover:bg-[#112240] 
            py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Splash</li>
        </ul>
        {workReactbd && <ReactBD/>}
        {workGoogle && <Google/>}
        {workApple && <Apple/>}
        {workAmazon && <Amazon/>}
        {workSplash && <Splash/>}
     </div>
    </section>
  )
}

export default Experience;