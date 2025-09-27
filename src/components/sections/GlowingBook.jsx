import { motion } from "framer-motion";

const features = [
  "⭐ Basic Birth Details",
  "⭐ Favorable Points",
  "⭐ Gemstone Recommendations",
  "⭐ Rudraksha Recommendations",
  "⭐ Yoga & Dosha Reports",
  "⭐ Health & Finance Astrograph",
  "⭐ Dasha Analysis Report",
  "⭐ 1-Year Monthly Prediction",
  "⭐ 10-Year Life Prediction",
  "⭐ Ankayojtish Analysis",
];

export default function BookBanner() {
  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('./book1.png')" }} // your uploaded image
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* === Glow beam rising from book === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[15%] left-[20%] w-40 h-[60%] 
                   bg-gradient-to-t from-yellow-400/40 via-yellow-200/30 to-transparent 
                   blur-3xl rounded-full"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.5, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[15%] left-[22%] w-24 h-[50%] 
                   bg-gradient-to-t from-orange-300/40 via-yellow-200/20 to-transparent 
                   blur-2xl rounded-full"
      />

      {/* === Moving Light Rays === */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: [0, 0.6, 0], y: -200 }}
          transition={{
            duration: 6 + i * 2,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[15%] left-[18%] w-[2px] h-[70%] 
                     bg-gradient-to-t from-yellow-300/50 to-transparent blur-sm rotate-[20deg]"
        />
      ))}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`right-${i}`}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: [0, 0.6, 0], y: -250 }}
          transition={{
            duration: 7 + i * 2,
            delay: i * 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[15%] left-[25%] w-[2px] h-[70%] 
                     bg-gradient-to-t from-orange-200/40 to-transparent blur-sm rotate-[-15deg]"
        />
      ))}

      {/* Right side - Animated Text */}
      <div className="relative z-10 w-full md:w-1/2 md:ml-auto text-white space-y-4 text-left">
        {features.map((feature, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.3,
            }}
            className="text-lg md:text-xl font-semibold tracking-wide 
                       bg-clip-text text-transparent bg-gradient-to-r 
                       from-yellow-300 via-orange-400 to-red-500 
                       drop-shadow-[0_0_12px_rgba(255,200,50,0.9)]"
          >
            {feature}
          </motion.p>
        ))}
      </div>
    </div>
  );
}
