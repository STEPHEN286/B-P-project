
import heroBg from "../../assets/img/home-bg.avif";
import Card from "../Card";
import Testimonial from "../carousel/Swipper";
import SwiperCarousel from "../carousel/Swipper";
import Hero from '../Hero';
import Button from '../Ui/Button';



import { ChartBarIcon, ShareIcon, DevicePhoneMobileIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

const services = [
  {
    title: "SEO Optimization",
    description: "Improve search rankings and drive organic traffic to your website with our expert SEO strategies.",
    icon: ChartBarIcon
  },
  {
    title: "Social Media Marketing",
    description: "Build a strong online presence and engage with your audience through targeted social media campaigns.",
    icon: ShareIcon
  },
  {
    title: "Website Design",
    description: "Create a visually appealing, mobile-responsive, and user-friendly website that converts visitors into customers.",
    icon: DevicePhoneMobileIcon
  },
  {
    title: "Content Marketing",
    description: "Craft compelling content that attracts, educates, and retains customers while boosting your online credibility.",
    icon: DocumentTextIcon
  }
];



export default function HomePageContent() {
  return (
    <div>
        <Hero bgImage={heroBg}> 
        <h1 className='text-5xl font-bold w-200'>Grow Your Business with Digital Marketing</h1>
        <p className='text-md  w-200'>We help businesses increase online visibility through SEO, social media marketing, and website design.</p>
        <div><Button className={"bg-[#001AFF] w-auto py-[14px] px-[32px]"} butttontext="Get Started" /></div>
    </Hero> 
    <div className="white w-full md:h-[500px] py-24">
        <div className="flex flex-col  h-full  items-center">
                <p>Our Services</p>
                <h1 className="font-bold text-2xl">Comprehensive Digital Solutions </h1>
                <div className="grid grid-cols-2 md:grid-cols-4 space-x-7 h-fit">
                    {services.map(service => (
                    <Card key={service.title}  title={service.title} description={service.description} icon={service.icon}/>
                    )
                    )}
                   
                  
                </div>

                
        </div>
              
                  </div>
                <Testimonial />
                <div className="h-[400px]">
                        <div className="h-full w-full flex flex-col space-y-2 justify-center items-center">
                        <h1 className="font-bold text-2xl">Get in Touch </h1>
                        <p className="text-[#9CA3AF]">Ready to transform your business</p>
                        <div className="flex space-x-2 mt-3">
                            <input type="email" name="" id="" placeholder="enter your mail"  className=" w-[400px] rounded border-[#9CA3AF] border-1 py-3 px-2 "/>
                            <Button butttontext="Subscribe"  className={"bg-[#001AFF] p-3 "}/>
                        </div>
                        </div>
                </div>
                
    </div>
  )
}
