import { lazy } from "react";
import heroBg from "../../assets/img/landing.jpeg";
import Card from "../Card";
// import Testimonial from "../carousel/Swipper";

import Hero from "../hero/Hero";
import HeroContent from "../hero/HeroContent";
import Button from "../Ui/Button";


import {
  ChartBarIcon,
  ShareIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const Testimonial = lazy(() => import("../carousel/Swipper"));
const services = [
  {
    title: "SEO Optimization",
    description:
      "Improve search rankings and drive organic traffic to your website with our expert SEO strategies.",
    icon: ChartBarIcon,
  },
  {
    title: "Social Media Marketing",
    description:
      "Build a strong online presence and engage with your audience through targeted social media campaigns.",
    icon: ShareIcon,
  },
  {
    title: "Website Design",
    description:
      "Create a visually appealing, mobile-responsive, and user-friendly website that converts visitors into customers.",
    icon: DevicePhoneMobileIcon,
  },
  {
    title: "Content Marketing",
    description:
      "Craft compelling content that attracts, educates, and retains customers while boosting your online credibility.",
    icon: DocumentTextIcon,
  },
];

export default function HomePageContent() {
  return (
    <div>
      <Hero bgImage={heroBg}>
        <HeroContent
          title="Grow Your Business with Digital Marketing"
          subtitle="We help businesses increase online visibility through SEO, social media marketing, and website design."
        />
      </Hero>
      <div className="bg-white w-full md:h-[500px] py-24">
  <div className="container mx-auto px-5 flex flex-col h-full w-full items-center">
    <p>Our Services</p>
    <h1 className="font-bold text-2xl mb-4">Comprehensive Digital Solutions</h1>
    
   
    <div className="grid grid-cols-1 md:grid-cols-4 gap-7 w-full">
      {services.map((service) => (
        <Card
          key={service.title}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      ))}
    </div>
  </div>
</div>

      <Testimonial />
      <div className="container mx-auto h-[400px]">
        <div className=" h-full w-full flex flex-col gap-7 justify-center items-center px-5">
         <div className="text-center">
              <h1 className="font-bold text-2xl">Get in Touch </h1>
              <p className="text-[#9CA3AF]">Ready to transform your business</p>
         </div>
          <div className="flex space-x-2 justify-center  w-full">
            <input
              type="email"
              name=""
              id=""
              placeholder="enter your mail"
              className=" w-[400px] rounded border-[#9CA3AF] border-1 py-3 px-2 "
            />
            <Button butttontext="Subscribe" className={"bg-[#001AFF] text-white p-3 "} />
          </div>
        </div>
      </div>
    </div>
  );
}
