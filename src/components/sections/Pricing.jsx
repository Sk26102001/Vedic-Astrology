// import { motion } from "framer-motion";

// export default function Pricing() {
//   return (


//     <section className="bg-gradient-to-r from-yellow-50 via-orange-100 to-yellow-50 py-16">
//   <div className="max-w-4xl mx-auto text-center">
//     <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Vedic Personalized Kundli Report</h2>
//     <p className="text-gray-600 mb-8">Limited Time Offer – Get accurate life guidance at a fraction of the price.</p>
    
//     <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md mx-auto border border-yellow-300">
//       <p className="text-xl text-gray-800 mb-2 line-through">₹1999 / $25</p>
//       <p className="text-4xl font-bold text-orange-600 mb-4">₹999 / $15</p>
//       <p className="text-gray-500 mb-6">One-time payment. Lifetime access to your personalized report.</p>
//       <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold shadow-md">
//         Get My Kundli Now
//       </button>
//     </div>
//   </div>
// </section>

//   );
// }


import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Basic Insight",
      oldPrice: "₹999 / $12",
      newPrice: "₹499 / $7",
      features: ["Birth Chart PDF", "General Predictions", "Basic Remedies"],
      highlight: false,
    },
    {
      name: "Premium Kundli (Best Value)",
      oldPrice: "₹2499 / $30",
      newPrice: "₹1299 / $17",
      features: [
        "Detailed Life Report",
        "Health, Career & Finance Guidance",
        "Gemstone Recommendations",
        "10-Year Prediction",
      ],
      highlight: true,
    },
    {
      name: "Elite Astro Guidance",
      oldPrice: "₹4999 / $60",
      newPrice: "₹2999 / $40",
      features: [
        "Everything in Premium",
        "Personalized Remedies",
        "1-on-1 Astro Consultation (30 mins)",
        "Priority Support",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-yellow-50 via-orange-100 to-yellow-50 py-20 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,200,0,0.15),transparent_60%)]"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
        >
          Unlock Your Cosmic Path ✨
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-600 mb-12 text-lg"
        >
          Choose the perfect Kundli package for your spiritual journey.  
          <span className="font-semibold text-orange-600"> Limited-time offers available! </span>
        </motion.p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className={`relative bg-white shadow-xl rounded-2xl p-8 border ${
                plan.highlight
                  ? "border-4 border-orange-500 shadow-[0_0_25px_rgba(255,140,0,0.5)]"
                  : "border-yellow-300"
              }`}
            >
              {/* Offer Tag */}
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                  Best Value 🎉
                </span>
              )}

              <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
              <p className="text-lg text-gray-500 line-through">{plan.oldPrice}</p>
              <p className="text-4xl font-bold text-orange-600 mb-4">{plan.newPrice}</p>

              <ul className="text-gray-700 mb-6 space-y-2">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center justify-center gap-2">
                    <span className="text-green-600">✔</span> {f}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255,140,0,0.7)" }}
                className="px-6 py-3 bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-xl font-semibold shadow-lg transition"
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
