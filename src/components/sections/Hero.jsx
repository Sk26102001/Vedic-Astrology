// import { motion } from "framer-motion";
// import { useLanguage } from "../../context/LanguageContext";
// // import kundliBook from "../../assets/kundli-book.png";
// // import zodiacWheel from "../../assets/zodiac-wheel.png";

// export default function Hero() {
//   const { t } = useLanguage();

//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100 overflow-hidden">
//       {/* Rotating Zodiac Wheel */}
//       <motion.img
//         src="./banner.png"
//         alt="Zodiac Wheel"
//         className="absolute inset-0 m-auto w-[600px] opacity-20"
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
//       />

//       {/* Title */}
//       <motion.h1
//         className="text-4xl md:text-6xl font-bold text-orange-700 relative z-10"
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         {t.heroTitle}
//       </motion.h1>

//       <motion.p
//         className="mt-4 text-lg md:text-2xl text-orange-600 max-w-2xl relative z-10"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5, duration: 1 }}
//       >
//         {t.heroSubtitle}
//       </motion.p>

//       {/* 3D Kundli Book */}
//       <motion.img
//         src={kundliBook}
//         alt="Kundli Book"
//         className="w-64 md:w-96 mt-10 drop-shadow-2xl relative z-10"
//         whileHover={{ rotateY: 15, rotateX: 10, scale: 1.05 }}
//         transition={{ type: "spring", stiffness: 200 }}
//       />

//       {/* CTA */}
//       <motion.button
//         className="mt-10 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-xl shadow-lg relative z-10"
//         whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255,165,0,0.7)" }}
//         whileTap={{ scale: 0.95 }}
//       >
//         {t.cta}
//       </motion.button>
//     </section>
//   );
// }


// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function Hero() {
//   const [lang, setLang] = useState("en"); // "en" or "hi"

//   // Text content for both languages
//   const content = {
//     en: {
//       title: "Your Destiny, Decoded – Vedic Personalized Kundli",
//       subtitle:
//         "Discover the hidden blueprint of your life with 99% accuracy Vedic astrology.",
//       getKundli: "Get My Kundli",
//       seeSample: "See Sample Report",
//     },
//     hi: {
//       title: "आपकी किस्मत, सुलझाई गई – वैदिक पर्सनलाइज्ड कुंडली",
//       subtitle:
//         "अपने जीवन का छुपा हुआ ब्लूप्रिंट खोजें, 99% सटीक वैदिक ज्योतिष के साथ।",
//       getKundli: "मेरी कुंडली बनाइए",
//       seeSample: "नमूना रिपोर्ट देखें",
//     },
//   };

//   return (
//     <section
//       className="relative min-h-screen flex items-center "
//       style={{
//         backgroundImage: "url('/banner.png')", // ✅ from public/
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/30" />

//       {/* Language toggle */}
//       <div className="absolute top-6 right-6 z-20 flex gap-2 bg-yellow-100 py-2 px-2 rounded-xl">
//         <button
//           onClick={() => setLang("hi")}
//           className={`px-3 py-1 rounded-lg shadow ${
//             lang === "hi"
//               ? "bg-orange-600 text-white"
//               : "bg-yellow-200 text-black"
//           }`}
//         >
//           हिंदी
//         </button>
//         <button
//           onClick={() => setLang("en")}
//           className={`px-3 py-1 rounded-lg shadow font-medium ${
//             lang === "en"
//               ? "bg-orange-600 text-white"
//               : "bg-yellow-200 text-black"
//           }`}
//         >
//           English
//         </button>
//       </div>

//       {/* Hero Content (aligned left) */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         className="relative z-10 text-left max-w-2xl px-10"
//       >
//         <h1 className="text-5xl md:text-5xl font-bold text-white drop-shadow-lg leading-snug">
//           {content[lang].title}
//         </h1>
//         <p className="mt-4 text-base md:text-lg text-yellow-100">
//           {content[lang].subtitle}
//         </p>

//         {/* CTA Buttons */}
//         <div className="mt-6 flex gap-4">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl shadow-lg hover:bg-orange-700 transition"
//           >
//             {content[lang].getKundli}
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-6 py-3 bg-yellow-300 text-black font-semibold rounded-xl shadow-lg hover:bg-yellow-400 transition"
//           >
//             {content[lang].seeSample}
//           </motion.button>
//         </div>
//       </motion.div>
//     </section>
//   );
// }



// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function Hero() {
//   const [lang, setLang] = useState("en"); // "en" or "hi"

//   const content = {
//     en: {
//       title: "Your Destiny, Decoded – Vedic Personalized Kundli",
//       subtitle:
//         "Discover the hidden blueprint of your life with 99% accuracy Vedic astrology.",
//       getKundli: "Get My Kundli",
//       seeSample: "See Sample Report",
//     },
//     hi: {
//       title: "आपकी किस्मत, सुलझाई गई – वैदिक पर्सनलाइज्ड कुंडली",
//       subtitle:
//         "अपने जीवन का छुपा हुआ ब्लूप्रिंट खोजें, 99% सटीक वैदिक ज्योतिष के साथ।",
//       getKundli: "मेरी कुंडली बनाइए",
//       seeSample: "नमूना रिपोर्ट देखें",
//     },
//   };

//   return (
//     <section
//       className="relative min-h-screen flex items-center mt-24"
//       style={{
//         backgroundImage: "url('./banner.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="absolute inset-0 bg-black/30" />



//       {/* Hero Content */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         className="relative z-10 text-left max-w-2xl px-10"
//       >
//         <h1 className="text-5xl md:text-5xl font-bold text-white drop-shadow-lg leading-snug">
//           {content[lang].title}
//         </h1>
//         <p className="mt-4 text-base md:text-lg text-yellow-100">
//           {content[lang].subtitle}
//         </p>

//         <div className="mt-6 flex gap-4">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl shadow-lg hover:bg-orange-700 transition"
//           >
//             {content[lang].getKundli}
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-6 py-3 bg-yellow-300 text-black font-semibold rounded-xl shadow-lg hover:bg-yellow-400 transition"
//           >
//             {content[lang].seeSample}
//           </motion.button>
//         </div>
//       </motion.div>
//     </section>
//   );
// }


// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";

// export default function Hero() {
//   const [lang, setLang] = useState("en"); // "en" or "hi"
//   const [currentBanner, setCurrentBanner] = useState(0);
//   const [direction, setDirection] = useState(1);

//   // Array of banners with unique content
//   const banners = [
//     {
//       image: "./banner.png",
//       title: {
//         en: "Your Destiny, Decoded – Vedic Personalized Kundli",
//         hi: "आपकी किस्मत, सुलझाई गई – वैदिक पर्सनलाइज्ड कुंडली",
//       },
//       subtitle: {
//         en: "Discover the hidden blueprint of your life with 99% accuracy Vedic astrology.",
//         hi: "अपने जीवन का छुपा हुआ ब्लूप्रिंट खोजें, 99% सटीक वैदिक ज्योतिष के साथ।",
//       },
//       button1: { en: "Get My Kundli", hi: "मेरी कुंडली बनाइए" },
//       button2: { en: "See Sample Report", hi: "नमूना रिपोर्ट देखें" },
//     },
//     {
//       image: "./banner2.png",
//       title: {
//         en: "Unlock Insights About Your Career & Wealth",
//         hi: "अपने करियर और धन के रहस्य जानें",
//       },
//       subtitle: {
//         en: "Accurate predictions to guide your professional and financial journey.",
//         hi: "सटीक भविष्यवाणियाँ जो आपके पेशेवर और वित्तीय मार्गदर्शन करें।",
//       },
//       button1: { en: "Check Now", hi: "अब देखें" },
//       button2: { en: "Learn More", hi: "और जानें" },
//     },
//     {
//       image: "./service-bannner.jpg",
//       title: {
//         en: "Personalized Remedies from Vedas & Lal Kitab",
//         hi: "वैदिक और लाल किताब से व्यक्तिगत उपाय",
//       },
//       subtitle: {
//         en: "Get tailored solutions for health, relationships, and spiritual growth.",
//         hi: "स्वास्थ्य, रिश्तों और आध्यात्मिक विकास के लिए व्यक्तिगत उपाय पाएं।",
//       },
//       button1: { en: "View Remedies", hi: "उपाय देखें" },
//       button2: { en: "Start Now", hi: "शुरू करें" },
//     },
//   ];

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDirection(1);
//       setCurrentBanner((prev) => (prev + 1) % banners.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const current = banners[currentBanner];

//   return (
//     <section className="relative min-h-screen flex items-center mt-24 overflow-hidden">
//       {/* Sliding banners */}
//       <AnimatePresence initial={false} custom={direction}>
//         <motion.div
//           key={currentBanner}
//           custom={direction}
//           initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0 bg-center bg-cover"
//           style={{
//             backgroundImage: `url(${current.image})`,
//           }}
//         />
//       </AnimatePresence>

//       {/* Hero Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2, delay: 0.3 }}
//         className="relative z-10 text-left max-w-2xl px-10"
//       >
//         <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg leading-snug">
//           {current.title[lang]}
//         </h1>
//         <p className="mt-4 text-lg md:text-xl text-yellow-100 drop-shadow-md">
//           {current.subtitle[lang]}
//         </p>

//         <div className="mt-6 flex gap-4">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl shadow-xl hover:bg-orange-700 transition"
//           >
//             {current.button1[lang]}
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-6 py-3 bg-yellow-300 text-black font-semibold rounded-xl shadow-xl hover:bg-yellow-400 transition"
//           >
//             {current.button2[lang]}
//           </motion.button>
//         </div>
//       </motion.div>
//     </section>
//   );
// }







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
