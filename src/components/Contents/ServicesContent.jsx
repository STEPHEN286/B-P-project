import Hero from "../hero/Hero";
import sevicesBg  from  "../../assets/img/services.jpeg"
import Card from "../Card";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { DevicePhoneMobileIcon, DocumentTextIcon, ShareIcon } from "@heroicons/react/24/solid";
import Button from "../Ui/Button";
import HeroContent from "../hero/HeroContent";


export default function ServicesContent() {

    const services = [
        {
          icon: ChartBarIcon, // Heroicons name for SEO
          title: "SEO Optimization",
          description: "Boost your website's ranking on search engines and attract more organic traffic with our advanced SEO strategies.",
        },
        {
          icon: ShareIcon, // Heroicons name for social media
          title: "Social Media Marketing",
          description: "Engage with your target audience and increase brand awareness through strategic social media campaigns.",
        },
        {
          icon: DevicePhoneMobileIcon, // Heroicons name for web design
          title: "Website Design",
          description: "Get a stunning, mobile-friendly website that enhances user experience and drives conversions.",
        },
        {
          icon: DocumentTextIcon, // Heroicons name for content marketing
          title: "Content Marketing",
          description: "Deliver high-quality content that educates, informs, and converts visitors into loyal customers.",
        },
      ];
  return (
    <div>
      <Hero bgImage={sevicesBg}>
        <HeroContent title="Transform Your Business with Expert Digital Marketing" subtitle=" Unlock the full potential of your business with our expert digital
          marketing services. Whether you're looking to improve your search
          rankings, grow your social media presence, or create a professional
          website, we have the right solution for you!"/>
       
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

                <div className="  flex flex-col space-y-2 justify-center items-center">
                                 
                                    <p className="text-[#9CA3AF]">Ready to take your business to the next level? Contact us today for a free consultation!</p>
                                  
                                        
                                        <Button butttontext="Get Started Today"  className={"bg-[#001AFF] p-3 "}/>
                                    
                                    </div>
              </div>

            </div>


           
    </div>
  );
}
