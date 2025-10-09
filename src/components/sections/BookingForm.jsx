

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-100 via-orange-50 to-yellow-200 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-yellow-300/50 relative z-10">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600 text-center mb-8 drop-shadow-md">
          Book Your Personalized Kundali
        </h2>
        <p className="text-gray-700 text-center mb-10 max-w-xl mx-auto leading-relaxed">
          Fill out the details below to receive your{" "}
          <b className="text-orange-700">personalized PDF Kundali</b> in Hindi
          or English with deep insights about your life journey.
        </p>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-left font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border border-yellow-300/60 rounded-xl p-4 shadow-sm bg-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Date of Birth & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-left font-semibold text-gray-700 mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-full border border-yellow-300/60 rounded-xl p-4 shadow-sm bg-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-left font-semibold text-gray-700 mb-2">
                Time of Birth
              </label>
              <input
                type="time"
                className="w-full border border-yellow-300/60 rounded-xl p-4 shadow-sm bg-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
              />
            </div>
          </div>

          {/* Place of Birth */}
          <div>
            <label className="block text-left font-semibold text-gray-700 mb-2">
              Place of Birth
            </label>
            <input
              type="text"
              className="w-full border border-yellow-300/60 rounded-xl p-4 shadow-sm bg-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
              placeholder="City, State, Country"
              required
            />
          </div>

          {/* Latitude & Longitude */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-left font-semibold text-gray-700 mb-2">
                Latitude (Optional)
              </label>
              <input
                type="text"
                className="w-full border border-yellow-300/60 rounded-xl p-4 shadow-sm bg-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                placeholder="Ex: 28.6139° N"
              />
            </div>
            <div>
              <label className="block text-left font-semibold text-gray-700 mb-2">
                Longitude (Optional)
              </label>
              <input
                type="text"
                className="w-full border border-yellow-300/60 rounded-xl p-4 shadow-sm bg-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                placeholder="Ex: 77.2090° E"
              />
            </div>
          </div>

          {/* Gender */}
          <div className="relative">
            <label className="block text-left font-semibold text-gray-700 mb-2">
              Gender
            </label>
            <select
              className="w-full border border-yellow-300/60 rounded-xl p-4 shadow-sm bg-white/70 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all appearance-none cursor-pointer"
              required
            >
              <option value="">Select Gender</option>
              <option className="bg-yellow-100 text-orange-800">Male</option>
              <option className="bg-yellow-100 text-orange-800">Female</option>
              <option className="bg-yellow-100 text-orange-800">Other</option>
            </select>
            <ChevronDown className="absolute right-4 top-11 text-yellow-600 pointer-events-none" />
          </div>

          {/* PDF Language */}
          <div className="relative">
            <label className="block text-left font-semibold text-gray-700 mb-2">
              Preferred PDF Language
            </label>
            <select
              className="w-full border border-yellow-300/60 rounded-xl p-4 shadow-sm bg-white/70 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all appearance-none cursor-pointer"
              required
            >
              <option className="bg-yellow-100 text-orange-800">Hindi</option>
              <option className="bg-yellow-100 text-orange-800">English</option>
            </select>
            <ChevronDown className="absolute right-4 top-11 text-yellow-600 pointer-events-none" />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
          >
            ✨ Book Now ✨
          </button>
        </form>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/95 p-8 rounded-3xl shadow-2xl text-center max-w-md mx-auto border border-yellow-300/70"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <CheckCircle2 className="text-green-500 w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Booking Successful!
              </h3>
              <p className="text-gray-600 mb-4">
                Thank you for booking your personalized Kundali. You will
                receive your report shortly.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Extra CSS for option background */}
      <style jsx global>{`
        select option {
          background-color: #fef9c3; /* soft yellow */
          color: #7c2d12; /* deep orange-brown text */
        }
      `}</style>
    </section>
  );
}
