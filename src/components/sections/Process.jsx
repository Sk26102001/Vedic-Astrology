import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-100">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-orange-700 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        {t.processTitle}
      </motion.h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
        {t.process.map((step, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-center bg-white shadow-xl p-6 rounded-2xl w-56"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
          >
            <div className="text-3xl font-bold text-orange-500 mb-4">{idx + 1}</div>
            <p className="text-orange-700">{step}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
