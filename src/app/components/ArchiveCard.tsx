import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import Link from "next/link";

interface Props {
  title:string;
  desc:string;
  listItem:string[];
  link:string
}

const ArchiveCard = ({title, desc, listItem, link}:Props) => {
  return (
    <Link href={link} target="_blank" className="">
        <div className="w-full h-90 mdl:h-60 rounded-lg bg-[#112240] p-5 flex flex-col justify-center
    gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        <div className="flex justify-between items-center">
           <a href="https://github.com/iamcarllosjr/projeto-slider-pokemon" target="_blank">
           <FaRegFolder className="text-4xl text-textGreen" />
           </a>
           <a href="https://iamcarllosjr.github.io/projeto-slider-pokemon/" target="_blank">
           <RxOpenInNewWindow className="text-4xl hover:text-textGreen" />
           </a>
        </div>
        <div>
            <h2 className="text-xl font-semibold tracking-wide group-hover:text-textGreen">{title}</h2>
            <p className="text-sm mt-3">{desc}</p>
        </div>
        <ul className="mdl:text-sm h-full text-textDark flex justify-center gap-2
         flex-wrap xl:items-end">
            {
              listItem.map((item, i) => (
                <li key={i}>{item}</li>
              ))
            }
        </ul>
    </div>
    </Link>
  )
}

export default ArchiveCard;