import { GlobeAltIcon } from "@heroicons/react/16/solid";
import { GlobeAmericasIcon } from "@heroicons/react/24/outline";


export default function Card({icon: Icon, title, description}) {
  return (
    <div className='bg-white w-full rounded md:max-w-[300px] shadow '>
        <div className='p-4'>
            <p className="text-sm bg-[#F9FAFB] rounded w-fit p-2 mb-5"><Icon className="size-6" /></p>
            <h3 className="font-semibold mb-2"> {title}</h3>
            <p className="text-gray-500  text-sm">{description}</p>
        </div>  
    </div>
  )
}
