import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <motion.button
      onClick={toggleLang}
      className="fixed top-4 right-4 px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold shadow-lg z-50"
      whileHover={{ scale: 1.1, rotate: 3 }}
      whileTap={{ scale: 0.95 }}
    >
      {lang === "en" ? "हिन्दी" : "English"}
    </motion.button>
  );
}
