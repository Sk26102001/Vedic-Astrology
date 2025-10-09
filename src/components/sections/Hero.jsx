

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [lang, setLang] = useState("en");
  const [currentBanner, setCurrentBanner] = useState(0);
  const [direction, setDirection] = useState(1);

  const banners = [
    {
      image: "./banner.png",
      title: {
        en: "Your Destiny, Decoded – Vedic Personalized Kundli",
        hi: "आपकी किस्मत, सुलझाई गई – वैदिक पर्सनलाइज्ड कुंडली",
      },
      subtitle: {
        en: "Discover the hidden blueprint of your life with 99% accuracy Vedic astrology.",
        hi: "अपने जीवन का छुपा हुआ ब्लूप्रिंट खोजें, 99% सटीक वैदिक ज्योतिष के साथ।",
      },
      button1: { en: "Get My Kundli", hi: "मेरी कुंडली बनाइए" },
      button2: { en: "See Sample Report", hi: "नमूना रिपोर्ट देखें" },
    },
    {
      image: "./banner2.png",
      title: {
        en: "Unlock Insights About Your Career & Wealth",
        hi: "अपने करियर और धन के रहस्य जानें",
      },
      subtitle: {
        en: "Accurate predictions to guide your professional and financial journey.",
        hi: "सटीक भविष्यवाणियाँ जो आपके पेशेवर और वित्तीय मार्गदर्शन करें।",
      },
      button1: { en: "Check Now", hi: "अब देखें" },
      button2: { en: "Learn More", hi: "और जानें" },
    },
    {
      image: "./service-bannner.jpg",
      title: {
        en: "Personalized Remedies from Vedas & Lal Kitab",
        hi: "वैदिक और लाल किताब से व्यक्तिगत उपाय",
      },
      subtitle: {
        en: "Get tailored solutions for health, relationships, and spiritual growth.",
        hi: "स्वास्थ्य, रिश्तों और आध्यात्मिक विकास के लिए व्यक्तिगत उपाय पाएं।",
      },
      button1: { en: "View Remedies", hi: "उपाय देखें" },
      button2: { en: "Start Now", hi: "शुरू करें" },
    },
  ];

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = banners[currentBanner];

  return (
    <section className="relative min-h-screen flex items-center mt-24 overflow-hidden bg-black">
      {/* Sliding banners */}
<AnimatePresence initial={false} custom={direction}>
  <motion.div
    key={currentBanner}
    custom={direction}
    initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
    transition={{ duration: 1.2, ease: "easeInOut" }}
    className="absolute inset-0 bg-center bg-cover"
    style={{
      backgroundImage: `url(${current.image})`,
    }}
  >
    {/* Light gradient only for readability (edges soft, center clear) */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
  </motion.div>
</AnimatePresence>


      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 0.3 }}
        className="relative z-10 text-left max-w-2xl px-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl leading-snug">
          {current.title[lang]}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-yellow-100 drop-shadow-md">
          {current.subtitle[lang]}
        </p>

        <div className="mt-6 flex gap-4">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl shadow-2xl hover:bg-orange-700 transition"
          >
            {current.button1[lang]}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-3 bg-yellow-300 text-black font-semibold rounded-xl shadow-2xl hover:bg-yellow-400 transition"
          >
            {current.button2[lang]}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
