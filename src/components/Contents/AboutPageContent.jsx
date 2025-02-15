
import Hero from "../Hero";
import aboutBg from "../../assets/img/about.avif";
import Card from "../Card";
import { LightBulbIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import TeamCard from "../cards/TeamCard";
import CounterCard from "../cards/CounterCard";

import { useElementInView } from "../../hooks/useElementInView";

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
    name: "John Doe",
    role: "CEO & Digital Strategist",
    image:
      "https://images.pexels.com/photos/3777556/pexels-photo-3777556.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",
  },
  {
    name: "Jane Smith",
    role: "Marketing Director",
    image:
      "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",
  },
  {
    name: "Michael Johnson",
    role: "Lead Web Developer",
    image:
      "https://images.pexels.com/photos/3785086/pexels-photo-3785086.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",
  },
  {
    name: "Emily Davis",
    role: "Social Media Manager",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",
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
  const { inView, } = useElementInView();

  //    function handleOnEnter () {
  //     setCouterOn(true)
  //    }
  return (
    <div>
      <Hero bgImage={aboutBg}>
        <h1 className="text-5xl font-bold w-200">Who We Are</h1>
        <p className="text-md  w-200">
          We are a team of digital marketing experts dedicated to helping
          businesses thrive in the digital world. With years of experience, we
          provide strategic marketing solutions that drive measurable results.
        </p>
      </Hero>

      <div className="bg-white h-[400px]">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="font-bold text-2xl">Our Mission & Vision</h1>

          <div className="flex space-x-8  mt-9">
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

      <div className="bg-[#F9F9F9] h-[400px]">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="font-bold text-2xl">Meet Our Teams</h1>

          <div className="flex space-x-8  mt-9">
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
      <div className="bg-white h-[400px] p-24">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="font-bold text-2xl">Why Choose Us</h1>

          <div className="flex justify-between w-full  mt-9">
           {whyChooseUs.map(item => (
                <CounterCard key={item.description} description={item.description} number={item.number} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
