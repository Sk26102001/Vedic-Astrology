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
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [lang, setLang] = useState("en"); // "en" or "hi"

  const content = {
    en: {
      title: "Your Destiny, Decoded – Vedic Personalized Kundli",
      subtitle:
        "Discover the hidden blueprint of your life with 99% accuracy Vedic astrology.",
      getKundli: "Get My Kundli",
      seeSample: "See Sample Report",
    },
    hi: {
      title: "आपकी किस्मत, सुलझाई गई – वैदिक पर्सनलाइज्ड कुंडली",
      subtitle:
        "अपने जीवन का छुपा हुआ ब्लूप्रिंट खोजें, 99% सटीक वैदिक ज्योतिष के साथ।",
      getKundli: "मेरी कुंडली बनाइए",
      seeSample: "नमूना रिपोर्ट देखें",
    },
  };

  return (
    <section
      className="relative min-h-screen flex items-center mt-24"
      style={{
        backgroundImage: "url('/banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />

      {/* Tab-style Language Toggle */}
      {/* <div className="absolute top-6 right-6 z-20 flex rounded-xl overflow-hidden shadow-lg">
        <button
          onClick={() => setLang("hi")}
          className={`px-5 py-2 font-semibold transition-colors ${
            lang === "hi"
              ? "bg-orange-600 text-white"
              : "bg-yellow-200 text-black hover:bg-yellow-300"
          }`}
        >
          हिंदी
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-5 py-2 font-semibold transition-colors ${
            lang === "en"
              ? "bg-orange-600 text-white"
              : "bg-yellow-200 text-black hover:bg-yellow-300"
          }`}
        >
          English
        </button>
      </div> */}

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-left max-w-2xl px-10"
      >
        <h1 className="text-5xl md:text-5xl font-bold text-white drop-shadow-lg leading-snug">
          {content[lang].title}
        </h1>
        <p className="mt-4 text-base md:text-lg text-yellow-100">
          {content[lang].subtitle}
        </p>

        <div className="mt-6 flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl shadow-lg hover:bg-orange-700 transition"
          >
            {content[lang].getKundli}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-yellow-300 text-black font-semibold rounded-xl shadow-lg hover:bg-yellow-400 transition"
          >
            {content[lang].seeSample}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
