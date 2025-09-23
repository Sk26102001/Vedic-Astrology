import { useState } from "react";
import { motion } from "framer-motion";

export default function PremiumNavbar() {
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "What is Kundli?", href: "#what-is-kundli" },
    { name: "Life Aspects", href: "#life-aspects" },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="backdrop-blur-md bg-gradient-to-r from-yellow-900 via-orange-900 to-yellow-900 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-24">
          
          {/* Logo */}
          <div className="flex items-center ">
            <img
              src="./logo.png" // Full logo with text
              alt="Vedic Kundli"
              className="h-40 w-auto" // Bigger logo
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-white font-semibold text-lg transition-all hover:text-yellow-300"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
              </a>
            ))}

            {/* Language Toggle */}
            <div className="flex gap-2 bg-yellow-100 py-1 px-2 rounded-full shadow-inner">
              <button
                onClick={() => setLang("hi")}
                className={`px-4 py-1 rounded-full font-medium text-sm transition ${
                  lang === "hi"
                    ? "bg-orange-600 text-white shadow-md"
                    : "text-black hover:bg-yellow-200"
                }`}
              >
                हिंदी
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-4 py-1 rounded-full font-medium text-sm transition ${
                  lang === "en"
                    ? "bg-orange-600 text-white shadow-md"
                    : "text-black hover:bg-yellow-200"
                }`}
              >
                English
              </button>
            </div>

            {/* CTA */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#hero"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold rounded-lg shadow-lg hover:from-yellow-400 hover:to-orange-500 transition"
            >
              Get My Kundli
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-gradient-to-b from-purple-900 via-indigo-900 to-black backdrop-blur-md shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-white px-6 py-3 hover:bg-yellow-100 transition"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-2 px-6 py-3 bg-yellow-100 rounded-full mt-2 mb-4 w-fit">
              <button
                onClick={() => setLang("hi")}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  lang === "hi" ? "bg-orange-600 text-white" : "text-black"
                }`}
              >
                हिंदी
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  lang === "en" ? "bg-orange-600 text-white" : "text-black"
                }`}
              >
                English
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
