import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ContactFormModal from "./ContactFormModal";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();
  const isHomePage =
    location.pathname === "/products/robotic-vacuum" || location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when user navigates to a new route
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when either the mobile menu or contact modal is open
  useEffect(() => {
    if (isMobileMenuOpen || isContactOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, isContactOpen]);

  // Close mobile menu and contact modal on Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
        if (isContactOpen) setIsContactOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen, isContactOpen]);

  const navItems = [
    { name: "Home", path: "/products/robotic-vacuum" },
    { name: "About", path: "/about" },
  ];

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    if (isHomePage) {
      if (isScrolled) {
        return isActive
          ? "text-primary-600"
          : "text-gray-600 hover:text-gray-900";
      } else {
        return isActive ? "text-white" : "text-gray-200 hover:text-white";
      }
    } else {
      return isActive
        ? "text-primary-600"
        : "text-gray-600 hover:text-gray-900";
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}>
      <div className="container-custom">
      
<div className="flex items-center justify-between h-16 px-6 sm:px-6 lg:px-8">          {/* Logo (Group 1 - Left) */}
          <Link
            to="/products/robotic-vacuum"
            className="flex items-center space-x-2">
            <motion.div whileHover={{ scale: 1.05 }}>
              <img
                className="py-2 w-auto h-16"
                src="/logo.png"
                alt="Logicboots Logo"
              />
            </motion.div>
          </Link>

         
          <div className="hidden md:flex flex-1 items-center justify-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-geist relative text-sm font-medium transition-colors duration-200 ${getLinkClass(
                  item.path
                )}`}>
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                      isHomePage && !isScrolled
                        ? "bg-white"
                        : "bg-primary-600"
                    } rounded-full`}
                  />
                )}
              </Link>
            ))}
          </div>

         
          <div className="flex flex-1 md:flex-none items-center justify-end">
            {/* Reach Us button (desktop) */}
            <button
              onClick={() => setIsContactOpen(true)}
              className={`hidden md:block ml-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isHomePage && !isScrolled
                  ? "bg-white text-black"
                  : "bg-primary-600 text-white"
              }`}>
              Reach Us
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isHomePage && !isScrolled
                  ? "text-white hover:bg-white/10"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md z-50">
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? "text-primary-600 bg-primary-50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}>
                    {item.name}
                  </Link>
                ))}

                {/* Reach Us (mobile) */}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsContactOpen(true);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-gray-700 hover:bg-gray-50">
                  Reach Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        

        <ContactFormModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;