import { Briefcase, Heart, Gem, BookOpen, Activity, Building2, Wallet, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

// ---------- LIFE ASPECTS ----------
const aspects = [
  { title: "Career", desc: "Path & Growth", icon: <Briefcase className="w-8 h-8 text-white" />, color: "from-amber-500 to-orange-400" },
  { title: "Relationships", desc: "Compatibility & Harmony", icon: <Heart className="w-8 h-8 text-white" />, color: "from-pink-500 to-rose-400" },
  { title: "Luxury Lifestyle", desc: "Prosperity & Assets", icon: <Gem className="w-8 h-8 text-white" />, color: "from-purple-500 to-indigo-400" },
  { title: "Education", desc: "Learning & Success", icon: <BookOpen className="w-8 h-8 text-white" />, color: "from-blue-500 to-cyan-400" },
  { title: "Health", desc: "Well-being & Remedies", icon: <Activity className="w-8 h-8 text-white" />, color: "from-green-500 to-emerald-400" },
  { title: "Business", desc: "Ventures & Profitability", icon: <Building2 className="w-8 h-8 text-white" />, color: "from-indigo-500 to-blue-400" },
  { title: "Finance", desc: "Savings & Investments", icon: <Wallet className="w-8 h-8 text-white" />, color: "from-yellow-500 to-amber-400" },
  { title: "Love", desc: "Partnership & Bliss", icon: <Sparkles className="w-8 h-8 text-white" />, color: "from-red-500 to-pink-400" },
];

// ---------- TESTIMONIALS ----------
const testimonials = [
  { name: "Anjali S.", review: "My Kundli gave me clarity in my career path and marriage timing. Highly recommended!" },
  { name: "Rohit K.", review: "The remedies suggested really improved my health and financial stability. Truly grateful!" },
  { name: "Priya M.", review: "I was amazed by the accuracy. Helped me take the right decisions at the right time." },
];

export default function LifePanorama() {
  const [index, setIndex] = useState(0);

  // Auto change testimonial every 5 sec
  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
          A Complete Panorama of Your Life
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Your Kundli offers a 360-degree perspective, illuminating the inter-connectedness of every facet of your being and destiny.
        </p>

        {/* -------- GRID -------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 items-center">
          {/* Left Grid */}
          <div className="space-y-6">
            {aspects.slice(0, 4).map((item, i) => (
              <div
                key={i}
                className={`group p-6 rounded-2xl bg-gradient-to-r ${item.color} shadow-lg hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-center gap-4 text-white">
                  {item.icon}
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Chakra with Glow Aura */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Glowing Aura Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 blur-2xl opacity-70 animate-spin-slow"></div>

              {/* Chakra Image */}
              <img
                src="./chakra.png"
                alt="Chakra"
                className="relative w-80 h-80 md:w-[26rem] md:h-[26rem] object-contain animate-spin-slow drop-shadow-2xl    animate-none md:animate-spin ..."
              />
            </div>
          </div>

          {/* Right Grid */}
          <div className="space-y-6">
            {aspects.slice(4).map((item, i) => (
              <div
                key={i}
                className={`group p-6 rounded-2xl bg-gradient-to-r ${item.color} shadow-lg hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-center gap-4 text-white">
                  {item.icon}
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* -------- TESTIMONIALS -------- */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-amber-900 mb-8">What People Say</h3>
          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 transition-all duration-500">
            <p className="text-lg text-gray-700 italic mb-4">
              “{testimonials[index].review}”
            </p>
            <h4 className="font-semibold text-amber-800">- {testimonials[index].name}</h4>
          </div>
        </div>

        {/* -------- CTA BUTTON -------- */}
        <div className="mt-16">
          <a
            href="#order"
            className="inline-block px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-600 to-orange-500 rounded-full shadow-lg hover:scale-110 transform transition-all duration-300"
          >
            Order My Kundli Now
          </a>
        </div>
      </div>

      {/* Custom Slow Spin Animation */}
      <style>
        {`
          .animate-spin-slow {
            animation: spin 40s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
