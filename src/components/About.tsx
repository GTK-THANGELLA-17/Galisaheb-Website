import React from 'react';
import { Award, Activity, Brain, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const specialties = [
    {
      icon: <Activity className="text-teal-600" />,
      title: "Sports Therapy",
      description: "Specialized techniques for athletes and sports enthusiasts"
    },
    {
      icon: <Brain className="text-teal-600" />,
      title: "Neuromuscular Therapy",
      description: "Advanced treatment for chronic pain and muscle tension"
    },
    {
      icon: <Heart className="text-teal-600" />,
      title: "Therapeutic Massage",
      description: "Customized massage techniques for optimal healing"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={ref}
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-teal-400 rounded-xl"></div>
              <img 
                src="/massage 2.jpg" 
                alt="Sports Massage Technique" 
                className="w-full h-auto rounded-xl shadow-xl relative z-10 hover:transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative mt-12">
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-teal-400 rounded-xl"></div>
              <img 
                src="/massage 3.jpg" 
                alt="Physiotherapy Session" 
                className="w-full h-auto rounded-xl shadow-xl relative z-10 hover:transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative col-span-2 mt-4">
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-teal-400 rounded-xl"></div>
              <img 
                src="/massage 4.jpg" 
                alt="Deep Tissue Massage" 
                className="w-full h-auto rounded-xl shadow-xl relative z-10 hover:transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center">
                <Award className="text-teal-600 mr-3" />
                <h2 className="text-sm uppercase tracking-wider text-teal-600 font-semibold">Expert Male Therapist</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
                Meet D.GALISAHEB
              </h3>
              
              <p className="mt-6 text-gray-600">
                With over 10 years of experience in sports massage and physiotherapy, D.GALISAHEB specializes in 
                providing professional massage services exclusively for men, both at Star Sports Massage Den and through 
                home visits.
              </p>
              
              <p className="mt-4 text-gray-600">
                Our comprehensive approach combines traditional massage techniques with modern physiotherapy methods, 
                ensuring effective treatment for various conditions including:
              </p>
              
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="text-teal-600 mr-2">•</span>
                  Chronic pain management
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-teal-600 mr-2">•</span>
                  Sports injuries and rehabilitation
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-teal-600 mr-2">•</span>
                  Postural correction
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-teal-600 mr-2">•</span>
                  Muscle tension and stress relief
                </li>
              </ul>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {specialties.map((specialty, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-50 p-5 rounded-lg border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.2 }}
                  >
                    <div className="flex items-center mb-3">
                      {specialty.icon}
                      <h4 className="font-bold text-gray-800 ml-2">{specialty.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{specialty.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;