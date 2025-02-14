import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    feedback: "Our business saw a 200% increase in website traffic within 3 months! Highly recommend their services.",
    image: "https://via.placeholder.com/100"
  },
  {
    name: "Jane Smith",
    position: "Marketing Manager",
    feedback: "They transformed our social media strategy, and engagement skyrocketed!",
    image: "https://via.placeholder.com/100"
  },
  {
    name: "Michael Brown",
    position: "Founder, StartupX",
    feedback: "Professional, efficient, and results-driven! Our conversion rates improved dramatically.",
    image: "https://via.placeholder.com/100"
  }
];

export default function Testimonial() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600">What our clients say about us</p>
        </div>

        {/* Swiper Testimonial Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1} // Show one slide at a time
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000,  }}
          loop={true} // Enable infinite loop
          className="max-w-4xl mx-auto bg-white"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className=" p-8 text-center flex flex-col items-center">
                {/* <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-4"
                /> */}
                <p className="text-xl text-gray-600 mb-4 italic">{testimonial.feedback}</p>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
