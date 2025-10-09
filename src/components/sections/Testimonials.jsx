

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = [
    {
      name: "Ananya Sharma",
      role: "Spiritual Seeker",
      text: "The Kundli report was so accurate! It felt like the stars were speaking directly to me.",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Rohit Mehta",
      role: "Entrepreneur",
      text: "I found clarity in my career path through the detailed guidance. Truly life-changing!",
      img: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      name: "Priya Singh",
      role: "Life Coach",
      text: "The remedies suggested in my Kundli brought real balance into my personal and professional life.",
      img: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      name: "Karan Verma",
      role: "Engineer",
      text: "The predictions about health and finance were on point. I feel more prepared for the future.",
      img: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      name: "Simran Kaur",
      role: "Teacher",
      text: "The spiritual insights helped me connect deeper with myself. I highly recommend it to everyone.",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Amit Desai",
      role: "Consultant",
      text: "Very authentic and professional. The 10-year prediction gave me a roadmap I can trust.",
      img: "https://randomuser.me/api/portraits/men/66.jpg",
    },
  ];

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < reviews.length - 3) setCurrentIndex(currentIndex + 1);
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

  return (
    <section className="relative w-full bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100 py-16 text-center overflow-hidden">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 text-[#7b1b1b]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Voices of Trust & Transformation ✨
      </motion.h2>

      <div className="flex justify-center mb-10">
        <img
          src="https://aap.astroarunpandit.org/wp-content/uploads/2025/07/wave-1-768x54.png"
          alt="decorative border"
          className="w-48 md:w-64 lg:w-72"
        />
      </div>

      {/* Subtext */}
      <motion.div
        className="text-yellow-400 mb-12 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Thousands of{" "}
        <span className="font-semibold text-yellow-400">believers</span> have
        found{" "}
        <span className="text-yellow-400">guidance, clarity, and peace</span>{" "}
        through{" "}
        <span className="italic font-bold text-orange-500">Vedic Kundli</span>.
      </motion.div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {visibleReviews.map((review, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-lg text-left flex flex-col items-start hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.img}
                alt={review.name}
                className="w-14 h-14 rounded-full border-2 border-yellow-400"
              />
              <div>
                <h4 className="font-semibold text-[#7b1b1b]">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">“{review.text}”</p>
          </motion.div>
        ))}
      </div>

      {/* Pagination Arrows */}
      <div className="flex justify-center mt-10 gap-6">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`p-3 rounded-full shadow-md transition-transform duration-300 
            ${
              currentIndex === 0
                ? "bg-gray-200 cursor-not-allowed opacity-60"
                : "bg-white hover:bg-yellow-200 hover:scale-110 hover:shadow-lg"
            }`}
        >
          <ChevronLeft className="text-[#7b1b1b]" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex >= reviews.length - 3}
          className={`p-3 rounded-full shadow-md transition-transform duration-300 
            ${
              currentIndex >= reviews.length - 3
                ? "bg-gray-200 cursor-not-allowed opacity-60"
                : "bg-white hover:bg-yellow-200 hover:scale-110 hover:shadow-lg"
            }`}
        >
          <ChevronRight className="text-[#7b1b1b]" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
