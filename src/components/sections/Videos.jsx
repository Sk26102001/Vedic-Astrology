import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function VideoSection() {
  const videos = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/VIDEO_ID_1",
      title: "Why Buy This Book - Part 1",
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/VIDEO_ID_2",
      title: "Astrological Wisdom",
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/VIDEO_ID_3",
      title: "Transform Your Life",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextVideo = () =>
    setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  const prevVideo = () =>
    setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));

  // Auto-slide every 8 seconds
  useEffect(() => {
    const timer = setInterval(nextVideo, 8000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="py-20 bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100 text-center relative">
      <h2 className="text-4xl font-extrabold text-orange-700 mb-6 drop-shadow-sm">
        Why Buy This Book?
      </h2>
      <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
        Unlock your destiny with personalized insights. This Kundali book is
        crafted with ancient Vedic wisdom, guiding you toward clarity, growth,
        and fulfillment.
      </p>

      {/* Video Slider */}
      <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center">
        {/* Left Button */}
        <button
          onClick={prevVideo}
          className="absolute left-3 md:left-[-3rem] bg-white/80 hover:bg-white text-orange-600 p-3 rounded-full shadow-lg transition z-10"
        >
          <ChevronLeft size={28} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={videos[current].id}
            className="aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-yellow-200 h-[250px] md:h-[350px] w-full"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <iframe
              className="w-full h-full"
              src={videos[current].url}
              title={videos[current].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </AnimatePresence>

        {/* Right Button */}
        <button
          onClick={nextVideo}
          className="absolute right-3 md:right-[-3rem] bg-white/80 hover:bg-white text-orange-600 p-3 rounded-full shadow-lg transition z-10"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-3">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full transition ${
              index === current
                ? "bg-gradient-to-r from-orange-500 to-yellow-500 shadow-md scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}


