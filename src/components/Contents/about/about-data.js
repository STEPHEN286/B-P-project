import { RocketLaunchIcon, LightBulbIcon } from "@heroicons/react/24/solid";
import BerniceImg from "../../../assets/img/Bernice.jpg";
import PrinceImg from "../../../assets/img/prince.jpg";
import WaccoImg from "../../../assets/img//wacco.jpg";
import KwaakyewaaImg from "../../../assets/img/Kwakyewaa.jpg";

const companyValues = [
  {
    title: "Mission",
    description:
      "To empower businesses with innovative digital marketing strategies that enhance brand visibility and drive growth.",
    icon: RocketLaunchIcon,
  },
  {
    title: "Vision",
    description:
      "To be a leading digital marketing agency known for excellence, creativity, and results-driven solutions.",
    icon: LightBulbIcon,
  },
];

const teamMembers = [
  {
    name: "Bernice",
    role: "CEO & Digital Strategist",
    image: BerniceImg,
  },
  {
    name: "Prince",
    role: "Marketing Director",
    image: PrinceImg,
  },
  {
    name: "Wacco",
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

export { companyValues, teamMembers, whyChooseUs };
