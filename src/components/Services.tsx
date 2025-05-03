import React from 'react';
import { Heart, Activity, Award, Zap, Flame, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const benefits = [
    {
      icon: <Activity className="w-6 h-6 text-teal-600" />,
      title: "Sports Massage",
      description: "Specialized techniques for muscle recovery and performance enhancement.",
      image: "/images/sports massage.jpg"
    },
    {
      icon: <Zap className="w-6 h-6 text-teal-600" />,
      title: "Deep Tissue Massage",
      description: "Targeting chronic muscle tension and deep-seated knots.",
      image: "/images/deep tissue massage.jpg"
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-teal-600" />,
      title: "Recovery Therapy",
      description: "Post-workout recovery and injury rehabilitation techniques.",
      image: "/images/Recovery Therapy.jpg"
    },
    {
      icon: <Flame className="w-6 h-6 text-teal-600" />,
      title: "Therapeutic Massage",
      description: "Relief from chronic pain and muscle stiffness.",
      image: "/images/Therapeutic Massage for men  .jpg"
    },
    {
      icon: <Award className="w-6 h-6 text-teal-600" />,
      title: "Posture Correction",
      description: "Techniques to improve posture and reduce related pain.",
      image: "/images/Posture Correction.jpg"
    },
    {
      icon: <Heart className="w-6 h-6 text-teal-600" />,
      title: "Stress Relief",
      description: "Relaxation techniques to reduce stress and tension.",
      image: "/images/Stress Relief.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-teal-600 font-semibold">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
            Professional Massage Services for Men
          </h3>
          <p className="mt-6 text-gray-600">
            Experience expert massage therapy tailored specifically for men's needs, 
            available both at our center and through home service.
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img 
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.15 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-teal-100 transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">{benefit.title}</h4>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl p-10 text-white overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div 
            className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <div className="flex flex-col md:flex-row items-center relative z-10">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h4 className="text-2xl font-bold mb-4">Expert Care for Men's Wellness</h4>
              <p className="opacity-90">
                Choose between visiting our professional center or enjoying the convenience of 
                home service. Our male therapist ensures your comfort and provides targeted treatment.
              </p>
            </div>
            <div className="md:w-1/3 md:text-right">
              <motion.a 
                href="#booking" 
                className="inline-block px-6 py-3 bg-white text-teal-600 rounded-full font-medium hover:bg-gray-100 transition"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Session
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;