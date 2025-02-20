import Hero from "../../hero/Hero";
import contactBg from "../../../assets/img/pexels-photo-7688173.jpeg";
import HeroContent from "../../hero/HeroContent";
import InputGroup from "../../Ui/Input-Group";
import ContactInfo from "./ContactInfo";


export default function ContactPageContent() {
  return (
    <div>
      <Hero bgImage={contactBg}>
        <HeroContent
          title="Let's Connect & Grow Together"
          subtitle="Have questions or need expert digital marketing solutions? Reach out
          to us today and let’s take your business to the next level!"
        />
      </Hero>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Let's discuss how we can help transform your business
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <ContactInfo
                    icon="fas fa-map-marker-alt"
                    title="Office Location"
                    content="Accra"
                  />
                  <ContactInfo
                    icon="fas fa-phone"
                    title="Phone"
                    content="+233 50 920 5311"
                    link="tel:+233509205311"
                  />
                  <ContactInfo
                    icon="fas fa-envelope"
                    title="Email"
                    content="bandg@gmail.com"
                    link="mailto:bandg@gmail.com"
                  />
                </div>
                <div className="mt-8">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Business Hours
                  </h4>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputGroup
                    label="Name"
                    type="text"
                    name="name"
                    required
                    placeholder="Full name"
                  />
                  <InputGroup
                    label="Email"
                    type="email"
                    name="email"
                    required
                    placeholder="Email address"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputGroup
                    label="Phone"
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                  />
                  <InputGroup
                    label="Date"
                    type="datetime-local"
                    name="date"
                    required
                  />
                </div>

                <InputGroup
                  label="Message"
                  name="message"
                  isTextArea
                  placeholder="Your message"
                />
              
                <button
                  type="submit"
                  className="!rounded-button w-full bg-indigo-600 text-white px-6 py-3 font-semibold hover:bg-indigo-700 transition-colors whitespace-nowrap"
                >
                  Send Message
                </button>
            
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
