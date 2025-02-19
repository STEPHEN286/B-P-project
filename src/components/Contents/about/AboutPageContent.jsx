import Hero from "../../hero/Hero";
import aboutBg from "../../../assets/img/about.avif";
import Card from "../../Card";

import TeamCard from "../../cards/TeamCard";
import CounterCard from "../../cards/CounterCard";

import HeroContent from "../../hero/HeroContent";
import { companyValues, teamMembers, whyChooseUs } from "./about-data";

export default function AboutPageContent() {
  //    function handleOnEnter () {
  //     setCouterOn(true)
  //    }
  return (
    <div>
      <Hero bgImage={aboutBg}>
        <HeroContent
          title="Who We Are"
          subtitle=" We are a team of digital marketing experts dedicated to helping
          businesses thrive in the digital world. With years of experience, we
          provide strategic marketing solutions that drive measurable results."
        />
      </Hero>

      <div className="bg-white py-24">
        <div className=" container mx-auto flex flex-col items-center justify-center h-full">
          <h1 className="font-bold text-2xl">Our Mission & Vision</h1>

          <div className="flex flex-col md:flex-row  gap-7  px-5">
            {companyValues.map((value) => (
              <Card
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#F9F9F9] py-26">
        <div className=" container  mx-auto flex flex-col items-center  gap-7 justify-center h-full">
          <h1 className="font-bold text-2xl">Meet Our Teams</h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-7 justify-items-center  px-5 ">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.name}
                name={member.name}
                image={member.image}
                role={member.role}
                
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white  py-24">
        <div className="container mx-auto flex flex-col w-full items-center justify-center ">
          <h1 className="font-bold text-2xl">Why Choose Us</h1>

          <div className="w-full grid grid-cols-2 md:grid-cols-4  justify-items-center  gap-7   mt-9">
            {whyChooseUs.map((item) => (
              <CounterCard
                key={item.description}
                description={item.description}
                number={item.number}
                memo={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
