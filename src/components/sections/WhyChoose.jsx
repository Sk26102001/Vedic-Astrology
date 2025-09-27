// import { motion } from "framer-motion";

// // Array of reasons
// const reasons = [
//   { text: "Based on Ancient Vedic Texts", icon: "📜" },
//   { text: "Accurate Planetary Calculations", icon: "🪐" },
//   { text: "Remedies from Vedas & Lal Kitab", icon: "📖" },
//   { text: "Trusted by Thousands Worldwide", icon: "🌍" },
//   { text: "Delivered in 3–7 Days via Email", icon: "✉️" },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.3 } },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 20, scale: 0.9 },
//   visible: { opacity: 1, y: 0, scale: 1 },
// };

// const connectorVariants = {
//   hidden: { pathLength: 0, opacity: 0 },
//   visible: { pathLength: 1, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
// };

// const dotVariants = {
//   hidden: { opacity: 0, scale: 0 },
//   visible: {
//     opacity: 1,
//     scale: [1, 1.5, 1],
//     transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
//   },
// };

// export default function WhyChoose() {
//   return (
//     <section className="py-28 bg-gradient-to-br from-orange-900 via-yellow-800 to-orange-900 text-white relative overflow-hidden">
//       {/* Twinkling stars effect */}
//       <div className="absolute inset-0 bg-[url('/stars-bg.png')] bg-cover bg-center opacity-20 animate-pulse pointer-events-none"></div>

//       {/* Floating particles */}
//       <div className="absolute inset-0">
//         {[...Array(15)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-70"
//             initial={{ x: Math.random() * 1200, y: Math.random() * 800, opacity: 0 }}
//             animate={{
//               y: [Math.random() * 800, Math.random() * 800 - 200],
//               opacity: [0.2, 1, 0.2],
//             }}
//             transition={{
//               duration: 6 + Math.random() * 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center relative z-10">
//         <h2 className="text-4xl md:text-6xl font-extrabold text-yellow-300 mb-16 drop-shadow-[0_0_15px_rgba(255,215,0,0.9)]">
//           Why Choose Us?
//         </h2>

//         <motion.div
//           className="grid md:grid-cols-3 gap-10 relative"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {reasons.map((reason, idx) => {
//             const isLast = idx === reasons.length - 1;
//             const isEndOfRow = (idx + 1) % 3 === 0;

//             return (
//               <motion.div
//                 key={idx}
//                 variants={cardVariants}
//                 whileHover={{ scale: 1.05 }}
//                 className="relative flex flex-col items-center gap-5 p-10 
//                 rounded-2xl shadow-2xl border border-yellow-400 
//                 bg-gradient-to-br from-yellow-600/30 to-orange-700/30 
//                 backdrop-blur-md hover:shadow-[0_0_25px_rgba(255,200,0,0.8)] 
//                 transition-all duration-300"
//               >
//                 {/* Icon in glowing orb */}
//                 <div className="bg-gradient-to-tr from-yellow-400 to-orange-400 p-6 rounded-full shadow-lg animate-pulse">
//                   <span className="text-3xl">{reason.icon}</span>
//                 </div>

//                 <p className="text-lg md:text-xl font-semibold text-white text-center drop-shadow-md">
//                   {reason.text}
//                 </p>

//                 {/* Connector */}
//                 {!isLast && (
//                   <motion.svg
//                     className="absolute"
//                     style={{
//                       top: "50%",
//                       left: "100%",
//                       width: isEndOfRow ? "64px" : "128px",
//                       height: "64px",
//                       transform: isEndOfRow ? "translateX(0) translateY(0)" : "translateY(-50%)",
//                     }}
//                     viewBox="0 0 128 64"
//                   >
//                     <motion.path
//                       d={isEndOfRow
//                         ? "M0,0 L64,64"
//                         : "M0,32 C32,0 96,64 128,32"}
//                       stroke="url(#goldenGlow)"
//                       strokeWidth="4"
//                       fill="transparent"
//                       variants={connectorVariants}
//                       initial="hidden"
//                       animate="visible"
//                       transition={{ delay: idx * 0.3 }}
//                     />

//                     <motion.circle
//                       cx={isEndOfRow ? 64 : 128}
//                       cy={isEndOfRow ? 64 : 32}
//                       r="6"
//                       fill="#FFD700"
//                       filter="url(#glow)"
//                       variants={dotVariants}
//                       initial="hidden"
//                       animate="visible"
//                       transition={{ delay: idx * 0.3 }}
//                     />

//                     <defs>
//                       <linearGradient id="goldenGlow" x1="0" y1="0" x2="1" y2="1">
//                         <stop offset="0%" stopColor="#FFD700" />
//                         <stop offset="100%" stopColor="#FFA500" />
//                       </linearGradient>

//                       <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
//                         <feGaussianBlur stdDeviation="3.5" result="blur" />
//                         <feMerge>
//                           <feMergeNode in="blur" />
//                           <feMergeNode in="SourceGraphic" />
//                         </feMerge>
//                       </filter>
//                     </defs>
//                   </motion.svg>
//                 )}
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// import { motion } from "framer-motion";

// // Array of reasons
// const reasons = [
//   { text: "Based on Ancient Vedic Texts", icon: "📜" },
//   { text: "Accurate Planetary Calculations", icon: "🪐" },
//   { text: "Remedies from Vedas & Lal Kitab", icon: "📖" },
//   { text: "Trusted by Thousands Worldwide", icon: "🌍" },
//   { text: "Delivered in 3–7 Days via Email", icon: "✉️" },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.25 } },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 40, scale: 0.9, rotate: -3 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     rotate: 0,
//     transition: {
//       type: "spring",
//       stiffness: 80,
//       damping: 15,
//     },
//   },
// };

// const dotVariants = {
//   hidden: { opacity: 0, scale: 0 },
//   visible: {
//     opacity: 1,
//     scale: [1, 1.4, 1],
//     transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
//   },
// };

// export default function WhyChoose() {
//   return (
//     <section className="py-28 bg-gradient-to-br from-orange-900 via-yellow-800 to-orange-900 text-white relative overflow-hidden">
//       {/* Background stars */}
//       <div className="absolute inset-0 bg-[url('/stars-bg.png')] bg-cover bg-center opacity-20 pointer-events-none"></div>

//       {/* Floating particles */}
//       <div className="absolute inset-0">
//         {[...Array(12)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-70"
//             initial={{
//               x: Math.random() * 1200,
//               y: Math.random() * 800,
//               opacity: 0,
//             }}
//             animate={{
//               y: [Math.random() * 800, Math.random() * 800 - 250],
//               opacity: [0.2, 1, 0.2],
//             }}
//             transition={{
//               duration: 8 + Math.random() * 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center relative z-10">
//         <h2 className="text-4xl md:text-6xl font-extrabold text-yellow-300 mb-16 drop-shadow-[0_0_15px_rgba(255,215,0,0.9)]">
//           Why Choose Us?
//         </h2>

//         <motion.div
//           className="grid md:grid-cols-3 gap-10 relative"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {reasons.map((reason, idx) => {
//             const isLast = idx === reasons.length - 1;
//             const isEndOfRow = (idx + 1) % 3 === 0;

//             return (
//               <motion.div
//                 key={idx}
//                 variants={cardVariants}
//                 whileHover={{
//                   scale: 1.08,
//                   y: -8,
//                   transition: { type: "spring", stiffness: 100, damping: 10 },
//                 }}
//                 className="relative flex flex-col items-center gap-5 p-10 
//                 rounded-2xl shadow-2xl border border-yellow-400 
//                 bg-gradient-to-br from-yellow-600/30 to-orange-700/30 
//                 backdrop-blur-md hover:shadow-[0_0_25px_rgba(255,200,0,0.9)] 
//                 transition-all duration-500"
//               >
//                 {/* Icon in glowing orb */}
//                 <div className="bg-gradient-to-tr from-yellow-400 to-orange-400 p-6 rounded-full shadow-lg animate-pulse">
//                   <span className="text-3xl">{reason.icon}</span>
//                 </div>

//                 <p className="text-lg md:text-xl font-semibold text-white text-center drop-shadow-md">
//                   {reason.text}
//                 </p>

//                 {/* Connector */}
//                 {!isLast && (
//                   <motion.svg
//                     className="absolute"
//                     style={{
//                       top: "50%",
//                       left: "100%",
//                       width: isEndOfRow ? "80px" : "150px",
//                       height: "80px",
//                       transform: isEndOfRow
//                         ? "translateX(0) translateY(0)"
//                         : "translateY(-50%)",
//                     }}
//                     viewBox="0 0 150 80"
//                   >
//                     <motion.path
//                       d={
//                         isEndOfRow
//                           ? "M0,0 Q40,40 80,80" // curved diagonal connector
//                           : "M0,40 Q75,0 150,40" // wave arc connector
//                       }
//                       stroke="url(#goldenGlow)"
//                       strokeWidth="4"
//                       fill="transparent"
//                       strokeDasharray="10 10"
//                       initial={{ strokeDashoffset: 100 }}
//                       animate={{ strokeDashoffset: [100, 0] }}
//                       transition={{
//                         duration: 3,
//                         repeat: Infinity,
//                         ease: "linear",
//                       }}
//                     />

//                     <motion.circle
//                       cx={isEndOfRow ? 80 : 150}
//                       cy={isEndOfRow ? 80 : 40}
//                       r="6"
//                       fill="#FFD700"
//                       filter="url(#glow)"
//                       variants={dotVariants}
//                       initial="hidden"
//                       animate="visible"
//                       transition={{ delay: idx * 0.3 }}
//                     />

//                     <defs>
//                       <linearGradient id="goldenGlow" x1="0" y1="0" x2="1" y2="1">
//                         <stop offset="0%" stopColor="#FFD700" />
//                         <stop offset="100%" stopColor="#FFA500" />
//                       </linearGradient>

//                       <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
//                         <feGaussianBlur stdDeviation="3.5" result="blur" />
//                         <feMerge>
//                           <feMergeNode in="blur" />
//                           <feMergeNode in="SourceGraphic" />
//                         </feMerge>
//                       </filter>
//                     </defs>
//                   </motion.svg>
//                 )}
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }




// import { motion } from "framer-motion";

// // Array of reasons
// const reasons = [
//   { text: "Based on Ancient Vedic Texts", icon: "📜" },
//   { text: "Accurate Planetary Calculations", icon: "🪐" },
//   { text: "Remedies from Vedas & Lal Kitab", icon: "📖" },
//   { text: "Trusted by Thousands Worldwide", icon: "🌍" },
//   { text: "Delivered in 3–7 Days via Email", icon: "✉️" },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.25 } },
// };

// const cardVariants = {
//   hidden: { opacity: 0, scale: 0.9 }, // removed y & rotate
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 80,
//       damping: 15,
//     },
//   },
// };

// const dotVariants = {
//   hidden: { opacity: 0, scale: 0 },
//   visible: {
//     opacity: 1,
//     scale: [1, 1.4, 1],
//     transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
//   },
// };

// export default function WhyChoose() {
//   return (
//     <section className="py-28 // bg-gradient-to-br from-orange-900 via-yellow-800 to-orange-900 text-white relative overflow-hidden  ">
//       {/* Background stars */}
//       <div className="absolute inset-0 bg-[url('/stars-bg.png')] bg-cover bg-center opacity-20 pointer-events-none"></div>

//       {/* Floating particles */}
//       <div className="absolute inset-0">
//         {[...Array(12)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-70"
//             initial={{
//               x: Math.random() * 1200,
//               y: Math.random() * 800,
//               opacity: 0,
//             }}
//             animate={{
//               y: [Math.random() * 800, Math.random() * 800 - 250],
//               opacity: [0.2, 1, 0.2],
//             }}
//             transition={{
//               duration: 8 + Math.random() * 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center relative z-10">
//         <h2 className="text-4xl md:text-6xl font-extrabold text-yellow-300 mb-16 drop-shadow-[0_0_15px_rgba(255,215,0,0.9)]">
//           Why Choose Us?
//         </h2>

//         <motion.div
//           className="grid md:grid-cols-3 gap-10 relative"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {reasons.map((reason, idx) => {
//             const isLast = idx === reasons.length - 1;
//             const isEndOfRow = (idx + 1) % 3 === 0;

//             return (
//               <motion.div
//                 key={idx}
//                 variants={cardVariants}
//                 whileHover={{
//                   scale: 1.08,
//                   y: -8,
//                   transition: { type: "spring", stiffness: 100, damping: 10 },
//                 }}
//                 className="relative flex flex-col items-center gap-5 p-10 
//                 rounded-2xl shadow-2xl border border-yellow-400 
//                 bg-gradient-to-br from-yellow-600/30 to-orange-700/30 
//                 backdrop-blur-md hover:shadow-[0_0_25px_rgba(255,200,0,0.9)] 
//                 transition-all duration-500"
//               >
//                 {/* Icon in glowing orb */}
//                 <div className="bg-gradient-to-tr from-yellow-400 to-orange-400 p-6 rounded-full shadow-lg animate-pulse">
//                   <span className="text-3xl">{reason.icon}</span>
//                 </div>

//                 <p className="text-lg md:text-xl font-semibold text-white text-center drop-shadow-md">
//                   {reason.text}
//                 </p>

//                 {/* Connector */}
//                 {!isLast && (
//                   <motion.svg
//                     className="absolute"
//                     style={{
//                       top: "50%",
//                       left: "100%",
//                       width: isEndOfRow ? "80px" : "150px",
//                       height: "80px",
//                       transform: isEndOfRow
//                         ? "translateX(0) translateY(0)"
//                         : "translateY(-50%)",
//                     }}
//                     viewBox="0 0 150 80"
//                   >
//                     <motion.path
//                       d={
//                         isEndOfRow
//                           ? "M0,0 Q40,40 80,80"
//                           : "M0,40 Q75,0 150,40"
//                       }
//                       stroke="url(#goldenGlow)"
//                       strokeWidth="4"
//                       fill="transparent"
//                       strokeDasharray="10 10"
//                       initial={{ strokeDashoffset: 100 }}
//                       animate={{ strokeDashoffset: [100, 0] }}
//                       transition={{
//                         duration: 3,
//                         repeat: Infinity,
//                         ease: "linear",
//                       }}
//                     />

//                     <motion.circle
//                       cx={isEndOfRow ? 80 : 150}
//                       cy={isEndOfRow ? 80 : 40}
//                       r="6"
//                       fill="#FFD700"
//                       filter="url(#glow)"
//                       variants={dotVariants}
//                       initial="hidden"
//                       animate="visible"
//                       transition={{ delay: idx * 0.3 }}
//                     />

//                     <defs>
//                       <linearGradient id="goldenGlow" x1="0" y1="0" x2="1" y2="1">
//                         <stop offset="0%" stopColor="#FFD700" />
//                         <stop offset="100%" stopColor="#FFA500" />
//                       </linearGradient>

//                       <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
//                         <feGaussianBlur stdDeviation="3.5" result="blur" />
//                         <feMerge>
//                           <feMergeNode in="blur" />
//                           <feMergeNode in="SourceGraphic" />
//                         </feMerge>
//                       </filter>
//                     </defs>
//                   </motion.svg>
//                 )}
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }




// import { motion } from "framer-motion";

// // Array of reasons
// const reasons = [
//   { text: "Based on Ancient Vedic Texts", icon: "📜" },
//   { text: "Accurate Planetary Calculations", icon: "🪐" },
//   { text: "Remedies from Vedas & Lal Kitab", icon: "📖" },
//   { text: "Trusted by Thousands Worldwide", icon: "🌍" },
//   { text: "Delivered in 3–7 Days via Email", icon: "✉️" },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.25 } },
// };

// const cardVariants = {
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { type: "spring", stiffness: 80, damping: 15 },
//   },
// };

// const dotVariants = {
//   hidden: { opacity: 0, scale: 0 },
//   visible: {
//     opacity: 1,
//     scale: [1, 1.4, 1],
//     transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
//   },
// };

// export default function WhyChoose() {
//   return (
//     <section className="py-28 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 text-gray-800 relative overflow-hidden">
//       {/* Floating soft glowing particles */}
//       <div className="absolute inset-0">
//         {[...Array(15)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-70"
//             initial={{ x: Math.random() * 1200, y: Math.random() * 800, opacity: 0 }}
//             animate={{
//               y: [Math.random() * 800, Math.random() * 800 - 250],
//               opacity: [0.2, 1, 0.2],
//             }}
//             transition={{
//               duration: 6 + Math.random() * 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center relative z-10">
//         <h2 className="text-4xl md:text-6xl font-extrabold text-orange-700 mb-16 drop-shadow-[0_0_15px_rgba(255,165,0,0.5)]">
//           Why Choose Us?
//         </h2>

//         <motion.div
//           className="grid md:grid-cols-3 gap-10 relative"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {reasons.map((reason, idx) => {
//             const isLast = idx === reasons.length - 1;
//             const isEndOfRow = (idx + 1) % 3 === 0;

//             return (
//               <motion.div
//                 key={idx}
//                 variants={cardVariants}
//                 whileHover={{
//                   scale: 1.06,
//                   y: -8,
//                   transition: { type: "spring", stiffness: 100, damping: 12 },
//                 }}
//                 className="relative flex flex-col items-center gap-5 p-10 
//                 rounded-2xl shadow-xl border border-orange-200 
//                 bg-gradient-to-br from-yellow-50/80 via-orange-50/80 to-red-50/80
//                 backdrop-blur-md hover:shadow-[0_0_25px_rgba(255,140,0,0.4)] 
//                 transition-all duration-500"
//               >
//                 {/* Icon orb */}
//                 <div className="bg-gradient-to-tr from-yellow-400 via-orange-400 to-red-400 p-6 rounded-full shadow-lg animate-pulse">
//                   <span className="text-3xl">{reason.icon}</span>
//                 </div>

//                 <p className="text-lg md:text-xl font-semibold text-gray-800 text-center">
//                   {reason.text}
//                 </p>

//                 {/* Connector */}
//                 {!isLast && (
//                   <motion.svg
//                     className="absolute"
//                     style={{
//                       top: "50%",
//                       left: "100%",
//                       width: isEndOfRow ? "90px" : "160px",
//                       height: "90px",
//                       transform: isEndOfRow
//                         ? "translateX(0) translateY(0)"
//                         : "translateY(-50%)",
//                     }}
//                     viewBox="0 0 160 90"
//                   >
//                     <motion.path
//                       d={isEndOfRow ? "M0,0 Q40,45 90,90" : "M0,45 Q80,0 160,45"}
//                       stroke="url(#sunGlow)"
//                       strokeWidth="3.5"
//                       fill="transparent"
//                       strokeDasharray="8 10"
//                       initial={{ strokeDashoffset: 120 }}
//                       animate={{ strokeDashoffset: [120, 0] }}
//                       transition={{
//                         duration: 2.5,
//                         repeat: Infinity,
//                         ease: "linear",
//                       }}
//                     />
//                     <motion.circle
//                       cx={isEndOfRow ? 90 : 160}
//                       cy={isEndOfRow ? 90 : 45}
//                       r="6"
//                       fill="#FF4500"
//                       filter="url(#glow)"
//                       variants={dotVariants}
//                       initial="hidden"
//                       animate="visible"
//                       transition={{ delay: idx * 0.3 }}
//                     />
//                     <defs>
//                       <linearGradient id="sunGlow" x1="0" y1="0" x2="1" y2="1">
//                         <stop offset="0%" stopColor="#FFD700" />
//                         <stop offset="100%" stopColor="#FF4500" />
//                       </linearGradient>
//                       <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
//                         <feGaussianBlur stdDeviation="4" result="blur" />
//                         <feMerge>
//                           <feMergeNode in="blur" />
//                           <feMergeNode in="SourceGraphic" />
//                         </feMerge>
//                       </filter>
//                     </defs>
//                   </motion.svg>
//                 )}
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }




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
