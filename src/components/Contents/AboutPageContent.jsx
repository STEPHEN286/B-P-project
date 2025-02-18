import Hero from "../hero/Hero";
import aboutBg from "../../assets/img/about.avif";
import Card from "../Card";
import { LightBulbIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import TeamCard from "../cards/TeamCard";
import CounterCard from "../cards/CounterCard";

import HeroContent from "../hero/HeroContent";
import BerniceImg from "../../assets/img/bernice.jpg";
import PrinceImg from "../../assets/img/prince.jpg";
import WaccoImg from "../../assets/img/wacco.jpg";
import KwaakyewaaImg from "../../assets/img/Kwakyewaa.jpg";
const companyValues = [
  {
    title: "Mission",
    description:
      "To empower businesses with innovative digital marketing strategies that enhance brand visibility and drive growth.",
    icon: RocketLaunchIcon, // Heroicon for mission
  },
  {
    title: "Vision",
    description:
      "To be a leading digital marketing agency known for excellence, creativity, and results-driven solutions.",
    icon: LightBulbIcon, // Heroicon for vision
  },
];

const teamMembers = [
  {
    name: "Bernice,",
    role: "CEO & Digital Strategist",
    image: BerniceImg,
  },
  {
    name: "Prince",
    role: "Marketing Director",
    image: PrinceImg,
  },
  {
    name: "Wacco,",
    role: "Lead Web Developer",
    image: WaccoImg,
  },
  {
    name: "Kwaakyewaa",
    role: "Social Media Manager",
    image: KwaakyewaaImg,
  },
];

const whyChooseUs = [
  {
    number: 98,
    description: "Client Success Rate",
  },
  {
    number: 200,
    description: "Projects Completed",
  },
  {
    number: 10,
    description: "Team Experts",
  },
  {
    number: 50,
    description: "Years Experience",
  },
];
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
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
