import Hero from "../../hero/Hero";
import sevicesBg from "../../../assets/img/services.jpeg";
import Card from "../../Card";

import Button from "../../Ui/Button";
import HeroContent from "../../hero/HeroContent";
import { services } from "./data";
import { createContext, useContext, useState } from "react";
import Modal from "../../Modal";

const ServicesCtx = createContext();

export function useServiceContext (){
  return  useContext(ServicesCtx)
   
}

export default function ServicesContent() {
  const [isOpen, setIsOpen] = useState (false)
  const toggleModal = () => setIsOpen((prev) => !prev);
  const ctxValue = {
    isOpen,
    toggleModal
  };
  return (
    <ServicesCtx.Provider value={ctxValue}>
      <div>
        <Hero bgImage={sevicesBg}>
          <HeroContent
            title="Transform Your Business with Expert Digital Marketing"
            subtitle=" Unlock the full potential of your business with our expert digital
            marketing services. Whether you're looking to improve your search
            rankings, grow your social media presence, or create a professional
            website, we have the right solution for you!"
          />
        </Hero>

        <div className="bg-white h-fit py-24">
          <div className="container mx-auto flex space-y-8 flex-col items-center justify-center h-full">
            <h1 className="font-bold text-2xl">Our Mission & Vision</h1>

            <div className="grid  gap-7 md:grid-cols-4  mt-9 px-5">
              {services.map((value) => (
                <Card
                  key={value.title}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>

            <div className="flex px-5 flex-col space-y-2 justify-center items-center">
              <p className="text-[#9CA3AF]">
                Ready to take your business to the next level? Contact us today
                for a free consultation!
              </p>

                
              <Button
                butttontext="Get Started Today"
                className={"bg-[#001AFF] p-3 text-white"}
                onClick = {toggleModal}
              />
            </div>
          </div>
        </div>

        <Modal />
      </div>
    </ServicesCtx.Provider>
  );
}
