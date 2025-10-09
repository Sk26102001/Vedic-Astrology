
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const reasons = [
  { text: "Based on Ancient Vedic Texts", icon: "📜" },
  { text: "Accurate Planetary Calculations", icon: "🪐" },
  { text: "Remedies from Vedas & Lal Kitab", icon: "📖" },
  { text: "Trusted by Thousands Worldwide", icon: "🌍" },
  { text: "Delivered in 3–7 Days via Email", icon: "✉️" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

export default function WhyChoose() {
  return (
    <section className="py-28 bg-gradient-to-br from-yellow-50 via-orange-100 to-red-50 text-gray-900 relative overflow-hidden">
      {/* Glow orbs in background */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400/40 to-orange-500/30 blur-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
              x: [Math.random() * 800, Math.random() * 1000],
              y: [Math.random() * 600, Math.random() * 900],
            }}
            transition={{
              duration: 12 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-orange-700 mb-20 drop-shadow-[0_0_25px_rgba(255,165,0,0.6)]">
          Why Choose Us?
        </h2>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {reasons.map((reason, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <Tilt
                glareEnable={true}
                glareColor="orange"
                glareMaxOpacity={0.3}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="w-full"
              >
                <div className="relative flex flex-col items-center gap-6 p-10 rounded-3xl 
                  bg-white/40 backdrop-blur-xl border border-orange-200 shadow-[0_8px_30px_rgba(255,140,0,0.25)]
                  hover:shadow-[0_0_35px_rgba(255,140,0,0.5)] transition-all duration-500">
                  
                  {/* Icon Glow Orb */}
                  <div className="bg-gradient-to-tr from-yellow-400 via-orange-400 to-red-400 p-6 rounded-full shadow-lg animate-pulse">
                    <span className="text-4xl">{reason.icon}</span>
                  </div>

                  <p className="text-lg md:text-xl font-semibold text-gray-800 text-center">
                    {reason.text}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
