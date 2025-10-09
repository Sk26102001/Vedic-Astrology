

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  { title: "Basic Birth Details", icon: "🔮", details: "Your date, time, and place of birth, along with planetary positions at the time of birth." },
  { title: "Favorable Points", icon: "⭐", details: "Key favorable timings, colors, directions, and activities based on your Kundli." },
  { title: "Gemstone & Rudraksha Recommendations", icon: "💎", details: "Personalized gemstone and Rudraksha recommendations to enhance positive energy." },
  { title: "Yoga & Dosha Reports", icon: "🕉", details: "Analysis of yogas, doshas, and their effects on health, career, and relationships." },
  { title: "Astrograph (Health + Finance)", icon: "💹", details: "Graphical representation of health, wealth, and other life aspects over time." },
  { title: "Dasha Analysis", icon: "⏳", details: "In-depth study of planetary periods and their influence on your life events." },
  { title: "1-Year Monthly Prediction", icon: "📅", details: "Detailed month-by-month predictions for the next year including opportunities and challenges." },
  { title: "10-Year Life Prediction", icon: "🔮", details: "Long-term forecast highlighting major life events, trends, and periods." },
  { title: "Ankajyotish (Numerology)", icon: "🔢", details: "Your personal numerology analysis including lucky numbers, colors, and names." },
  { title: "Lal Kitab Remedies", icon: "📜", details: "Practical remedies from Lal Kitab to balance planetary influences and improve luck." },
  { title: "16 Varga Kundali", icon: "📊", details: "Comprehensive divisional charts covering all areas of your life for detailed analysis." },
];

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const pulseGradient = {
    animate: {
      background: [
        "linear-gradient(135deg, #FFD700, #FFA500, #FF4500)",
        "linear-gradient(135deg, #FF4500, #FFA500, #FFD700)",
        "linear-gradient(135deg, #FFD700, #FFA500, #FF4500)"
      ],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative py-28 bg-gradient-to-br from-yellow-200 via-orange-300 to-red-200 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/stars-bg.png')] bg-cover bg-center opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-red-700 mb-16 text-center drop-shadow-[0_0_15px_rgba(255,140,0,0.9)]">
          What’s Inside Your Vedic Personalized Kundli?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <motion.div
              layoutId={`card-${feature.title}`}
              key={idx}
              onClick={() => setSelectedFeature(feature)}
              className="relative flex items-center gap-4 p-6 
                rounded-xl shadow-xl border border-red-400
                backdrop-blur-md cursor-pointer
                transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,140,0,0.9)]"
              variants={pulseGradient}
              animate="animate"
            >
              {/* Icon */}
              <motion.div
                layoutId={`icon-${feature.title}`}
                className="flex-shrink-0 p-4 rounded-full shadow-lg inline-flex"
                variants={pulseGradient}
                animate="animate"
              >
                <span className="text-2xl">{feature.icon}</span>
              </motion.div>

              {/* Title */}
              <motion.p
                layoutId={`title-${feature.title}`}
                className="text-lg font-semibold text-white drop-shadow-md"
              >
                {feature.title}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFeature(null)}
          >
            <motion.div
              layoutId={`card-${selectedFeature.title}`}
              className="relative border border-red-400/40 rounded-3xl p-10 max-w-xl w-[90%] text-white shadow-[0_0_40px_rgba(255,140,0,0.6)] backdrop-blur-xl"
              style={{ background: "linear-gradient(135deg, #FFD700, #FFA500, #FF4500)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 text-yellow-300 text-2xl font-bold hover:text-yellow-100 transition"
              >
                ✕
              </button>

              <motion.div
                layoutId={`icon-${selectedFeature.title}`}
                className="bg-gradient-to-tr from-yellow-400 via-orange-400 to-red-500 p-5 rounded-full shadow-lg inline-flex mb-6"
                variants={pulseGradient}
                animate="animate"
              >
                <span className="text-3xl">{selectedFeature.icon}</span>
              </motion.div>

              <motion.h3
                layoutId={`title-${selectedFeature.title}`}
                className="text-3xl font-bold text-yellow-300 mb-4"
              >
                {selectedFeature.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="text-lg leading-relaxed text-yellow-100"
              >
                {selectedFeature.details}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
