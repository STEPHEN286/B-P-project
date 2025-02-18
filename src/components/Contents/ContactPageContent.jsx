import Hero from "../hero/Hero";
import contactBg from "../../assets/img/pexels-photo-7688173.jpeg";
import HeroContent from "../hero/HeroContent";

export default function ContactPageContent() {
  return (
    <div>
      <Hero bgImage={contactBg}>
        <HeroContent  title="Let's Connect & Grow Together" subtitle="Have questions or need expert digital marketing solutions? Reach out
          to us today and let’s take your business to the next level!"/>
      
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
                  <div className="flex items-start space-x-4">
                    <i className="fas fa-map-marker-alt text-indigo-600 mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Office Location
                      </h4>
                      <p className="text-gray-600">
                      Accra
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <i className="fas fa-phone text-indigo-600 mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <a href="tel:+233 50 920 5311" className="text-gray-600">+233 50 920 5311</a>
                     
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <i className="fas fa-envelope text-indigo-600 mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">Princeobeng891@gmail.com</p>
                    </div>
                  </div>
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
              <div className="mt-8">
                <img
                  src="https://public.readdy.ai/ai/img_res/b4cf6b432e56609d95f2182f4bcdb59d.jpg"
                  alt="Office Interior"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Please describe your project or inquiry..."
                    required
                  ></textarea>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    required
                  />
                  <label
                    htmlFor="privacy"
                    className="ml-2 text-sm text-gray-600"
                  >
                    I agree to the privacy policy and terms of service
                  </label>
                </div>
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
