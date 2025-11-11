import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import ContactFormModal from '../components/ContactFormModal';
import { DottedSurface } from '../components/ui/dotted-surface';
import { CategoryList } from '../components/ui/category-list';
import { Zap, Wind, Clock, Leaf, Hand } from 'lucide-react';

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
    { label: 'Battery Life', value: 'Up to 120 minutes' },
    { label: 'Coverage Area', value: 'Up to 2000 sq ft' },
    { label: 'Noise Level', value: '<65 dB' },
    // { label: 'Dimensions', value: '13.8" x 13.8" x 3.6"' },
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
      {/* Hero Section */}
      <div className="relative bg-gray-800 h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center">
        <video
          src="/images/vaccum.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover object-[center_85%] z-0"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />
        
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
      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced capabilities that make AI-Powered Robotic Vacuum Cleaners stand out
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gray-50 rounded-xl border border-gray-100"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>


















      {/* Gallery Section */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Gallery</h2>
            <p className="text-base sm:text-lg text-gray-600">Explore our AI-powered robotic vacuum in action</p>
          </motion.div>
          
          <div className="relative rounded-3xl overflow-hidden bg-gray-900 shadow-2xl">
            {/* Main Display */}
            <motion.div 
              className="w-full aspect-video flex items-center justify-center bg-black"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {gallery[0] && gallery[0].endsWith('.mp4') ? (
                <video
                  key={gallery[0]}
                  src={gallery[0]}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  key={gallery[0]}
                  src={gallery[0]}
                  alt="Gallery item 1"
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
            
            {/* Thumbnails */}
            <motion.div 
              className="grid grid-cols-4 gap-3 p-6 bg-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {gallery.map((mediaSrc, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    // This would require state management to actually change the main display
                    // For now, this is just for interaction feedback
                  }}
                  className="aspect-square rounded-lg overflow-hidden cursor-pointer group relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all z-10" />
                  {mediaSrc.endsWith('.mp4') ? (
                    <video
                      src={mediaSrc}
                      muted
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <img
                      src={mediaSrc}
                      alt={`Gallery thumbnail ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute bottom-2 left-2 text-white text-xs font-semibold bg-black/50 px-2 py-1 rounded">
                    {index + 1}/{gallery.length}
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </SectionWrapper>





      {/* Specs & Benefits (two-column) */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Technical Specifications & Key Benefits</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">Detailed specs alongside the key benefits to help you evaluate the product quickly.</p>
          </motion.div>

          <div className="space-y-8">
            {/* Top: Technical Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-900">Technical Specifications</h3>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.04 }}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                  >
                    <span className="text-sm sm:text-base text-gray-600 font-medium">{spec.label}:</span>
                    <span className="text-sm sm:text-base text-gray-900 font-semibold">{spec.value}</span>
                  </motion.div>
                ))}
              </div>
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
  <SectionWrapper className="relative min-h-[420px] md:min-h-[480px] py-16 bg-black dark:bg-white overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <DottedSurface className="w-full h-full" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative text-center max-w-3xl mx-auto px-4 sm:px-6"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white dark:text-gray-900 mb-4 sm:mb-6">
            Ready to Experience AI-Powered Robotic Vacuum Cleaners?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 dark:text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            Join the revolution in AI-powered solutions with our cutting-edge products.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
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

