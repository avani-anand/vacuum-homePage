import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import ContactFormModal from '../components/ContactFormModal';
import { CategoryList } from '../components/ui/category-list';
import { Zap, Wind, Clock, Leaf, Hand, Battery, Map, Volume2, Ruler, Scale, Wifi, Smartphone } from 'lucide-react';
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
// import { HeroBackground } from "@/components/ui/hero-odyssey";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const RoboticVacuum = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const features = [
    'AI-powered navigation and mapping',
    'Advanced obstacle detection and avoidance',
    'Adaptive cleaning patterns',
    'Smart home integration',
    'Remote monitoring and control',
    'Long battery life with auto-charging',
    'HEPA filtration system',
    'Customizable cleaning schedules'
  ];

  const specifications = [
    { label: 'Battery Life', value: ' Up to 120 minutes' },
    { label: 'Coverage Area ', value: 'Up to 2000 sq ft' },
    { label: 'Noise Level', value: '<65 dB' },
    { label: 'Dimensions', value: '13.8" x 13.8" x 3.6"' },
    { label: 'Weight', value: '6.5 lbs' },
    { label: 'Connectivity', value: 'Wi-Fi, Bluetooth' },
    { label: 'App Support', value: 'iOS & Android' }
  ];

  const benefits = [
    { title: 'Effortless cleaning automation', subtitle: 'Set it and forget it with intelligent scheduling', icon: 'Zap' },
    { title: 'Improved indoor air quality', subtitle: 'HEPA filters capture 99.97% of allergens', icon: 'Wind' },
    { title: 'Time-saving convenience', subtitle: 'Reclaim hours of your week for what matters', icon: 'Clock' },
    { title: 'Energy-efficient operation', subtitle: 'Smart power management reduces energy costs', icon: 'Leaf' },
    { title: 'Reduced manual cleaning effort', subtitle: 'Less work for you, cleaner floors guaranteed', icon: 'Hand' }
  ];

  const gallery = [
    '/images/vaccum.mp4',
    '/images/img5.jpeg',
    '/images/img2.jpeg',
    '/images/img4.jpeg'
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="relative bg-gray-800 h-[85vh] md:h-[95vh] flex items-center justify-center">
         
         {/* <video
          src="/images/vaccum.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover object-[center_85%] z-0"
        /> */}
        
        <div className="absolute inset-0  z-10" />

        <SectionWrapper className="relative z-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white px-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                AI-Powered Robotic Vacuum Cleaners
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 max-w-3xl mx-auto px-4">
                Smart Home Cleaning with Advanced AI Navigation
              </p>
            </motion.div>
          </div>
        </SectionWrapper>
      </div>

      {/* Product Overview Section */}
      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Product Overview</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              Our AI-powered robotic vacuum cleaners represent the next generation of smart home cleaning, combining cutting-edge robotics with intelligent navigation and automation.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              These advanced robotic vacuum cleaners utilize sophisticated AI algorithms to navigate complex home environments, learning from each cleaning session to optimize performance. The system features advanced obstacle detection, room mapping, and adaptive cleaning patterns that ensure thorough coverage while avoiding potential hazards.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>


      {/* Key Features Section */}
      <SectionWrapper className="bg-white ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Advanced capabilities that make AI-Powered Robotic Vacuum Cleaners stand out
             </p>
           
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 ">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                // className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gray-200 rounded-xl border border-gray-100"
                className="flex justify-center items-center p-4 sm:p-6 bg-gray-200 rounded-xl border border-gray-100"
              >
               
                <span className="text-gray-900 text-center font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>




{/* gallery section  */}
<Carousel className="w-full max-w-lg mx-auto"   opts={{  loop: true, }} > 
     

      <CarouselContent>

        {gallery.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
  
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  {item.endsWith('.mp4') ? (
                    <video
                      src={item}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={item}
                      alt={`Gallery item ${index + 1}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                  )}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

     <CarouselPrevious className="bg-primary text-primary-foreground hover:bg-primary/80" />
      <CarouselNext className="bg-primary text-primary-foreground hover:bg-primary/80" />

    </Carousel>





     {/* specifications and key benfits */}

      <SectionWrapper className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            {/* <div className="flex items-center justify-center gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Technical Specification</h2>
               <p className="text-sm text-gray-600"> Key device specs and connectivity details for performance and compatibility.</p>

            </div> */}
          </motion.div>

          <div className="space-y-8 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <CategoryList
                title="Technical Specification"

                categories={specifications.map((spec, index) => {
                  // icon nodes for each spec to match Key Benefits style
                  const specIconMap = {
                    'Battery Life': <Battery className="w-5 h-5" />,
                    'Coverage Area': <Map className="w-5 h-5" />,
                    'Noise Level': <Volume2 className="w-5 h-5" />,
                    'Dimensions': <Ruler className="w-5 h-5" />,
                    'Weight': <Scale className="w-5 h-5" />,
                    'Connectivity': <Wifi className="w-5 h-5" />,
                    'App Support': <Smartphone className="w-5 h-5" />,
                  };

                  const labelKey = spec.label.trim();

                  return {
                    id: `${labelKey}-${index}`,
                        title: (
                          <>
                            <span>{labelKey}</span>
                            <span className="text-gray-800 font-normal"> - {spec.value.trim()}</span>
                          </>
                        ),
                        subtitle: undefined,
                        icon: specIconMap[labelKey] ?? <span className="w-5 h-5 inline-block">ℹ️</span>,
                    onClick: () => console.log(`Spec selected: ${labelKey}`),
                  };
                })}
                className="bg-white"
              />
            </motion.div>

            {/*  Key Benefits using CategoryList */}
            <motion.div
              initial={{ opacity: 0, y: 1 }}
              whileInView={{ opacity: 1, y: 10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}


            >
              <CategoryList
                title="Key Benefits"
                categories={benefits.map((benefit, index) => {
                  const iconMap = {
                    Zap: <Zap className="w-5 h-5" />,
                    Wind: <Wind className="w-5 h-5" />,
                    Clock: <Clock className="w-5 h-5" />,
                    Leaf: <Leaf className="w-5 h-5" />,
                    Hand: <Hand className="w-5 h-5" />
                  };
                  return {
                    id: index,
                    title: benefit.title,
                    subtitle: benefit.subtitle,
                    icon: iconMap[benefit.icon],
                    onClick: () => console.log(`Selected: ${benefit.title}`),
                  };
                })}
                className="bg-white"
              />
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

  {/* Call to Action */}

      <SectionWrapper className=" bg-blue-300 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-geist text-3xl font-bold text-white mb-6">
            Ready to Transform the Future?
          </h2>
          <p className="font-manrope text-xl text-primary-100 mb-8 leading-relaxed">
            Join us in revolutionizing healthcare and automation with AI-powered robotics. 
            Let's build a smarter, healthier future together.
          </p>
          <div className="font-geist flex flex-col sm:flex-row gap-4 justify-center">
          <button
              onClick={() => setIsModalOpen(true)}
              className="btn-secondary bg-white text-black hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
            >
              Get in Touch
            </button>
            <Link
              to="/about"
              className="btn-secondary bg-transparent text-white border-2 border-white hover:bg-white/10 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 dark:border-gray-200"
            >
              Learn More About Us
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>


      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default RoboticVacuum;

