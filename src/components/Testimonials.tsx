import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Rajesh Kumar",
      role: "IT Professional",
      content: "I had been suffering from lower back pain for months. After just three sessions with D. Galisaheb, I felt a significant improvement. His expertise in physiotherapy techniques made a huge difference.",
      rating: 5,
      image: "/smile.jpg"
    },
    {
      name: "Sai",
      role: "Business man",
      content: "Body maintenance is crucial for me. D. Galisaheb's massage therapy helps me stay flexible and pain-free. I appreciate that he comes to my home, making it super convenient.",
      rating: 5,
      image: "/smile.jpg"
    },
    {
      name: "Kumar",
      role: "IT software",
      content: "D. Galisaheb's deep tissue massage and physiotherapy sessions have been essential in my marathon training. His techniques help me recover faster and prevent injuries. Highly recommended!",
      rating: 5,
      image: "/smile.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm uppercase tracking-wider text-teal-600 font-semibold">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
            What Our Clients Say
          </h3>
          <p className="mt-6 text-gray-600">
            Don't just take our word for it. Hear from individuals who have experienced the therapeutic 
            benefits of D. Galisaheb's massage and physiotherapy services.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="absolute -top-5 -right-5 bg-teal-100 p-3 rounded-full">
                <Quote className="h-6 w-6 text-teal-600" />
              </div>
              
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#booking" 
            className="px-8 py-4 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition inline-block"
          >
            Experience It Yourself
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;