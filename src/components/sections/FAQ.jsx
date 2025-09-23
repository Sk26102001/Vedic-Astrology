// import { motion } from "framer-motion";
// import { useLanguage } from "../../context/LanguageContext";

// export default function FAQ() {
//   const { t, lang } = useLanguage();

//   const faqs = lang === "en"
//     ? [
//         { q: "How long will it take to get my Kundli?", a: "3–7 business days via email." },
//         { q: "Is astrology accurate?", a: "Yes, with correct birth details, accuracy is up to 99%." },
//         { q: "Where will I receive it?", a: "Directly in your email inbox." },
//       ]
//     : [
//         { q: "मेरी कुंडली कब तक मिलेगी?", a: "3–7 कार्यदिवसों में ईमेल द्वारा।" },
//         { q: "क्या ज्योतिष सटीक है?", a: "हाँ, सही जन्म विवरण के साथ सटीकता 99% तक होती है।" },
//         { q: "मुझे रिपोर्ट कहाँ मिलेगी?", a: "सीधे आपके ईमेल इनबॉक्स में।" },
//       ];

//   return (
//     <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-100">
//       <motion.h2
//         className="text-3xl md:text-4xl font-bold text-center text-orange-700 mb-10"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//       >
//         {t.faqsTitle}
//       </motion.h2>
//       <div className="max-w-3xl mx-auto space-y-6 px-6">
//         {faqs.map((f, idx) => (
//           <motion.div
//             key={idx}
//             className="p-6 bg-white rounded-xl shadow-md"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//           >
//             <p className="font-bold text-orange-700">{f.q}</p>
//             <p className="mt-2 text-orange-600">{f.a}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }



// import { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";

// const faqs = [
//   {
//     question: "What is Veda Structure and what services does it offer?",
//     answer:
//       "Veda Structure is a spiritual platform offering astrology consultations, online puja services, temple rituals in Varanasi, Rudraksha & gemstones, Vedic products, and spiritual courses.",
//   },
//   {
//     question: "How do I book a puja through Veda Structure?",
//     answer:
//       "You can easily book a puja by selecting the desired service, entering your details, and confirming the booking. Our dedicated priests will perform the puja authentically on your behalf.",
//   },
//   {
//     question: "Are the pujas performed authentically as per Vedic traditions?",
//     answer:
//       "Yes, all pujas are conducted by certified Vedic priests with strict adherence to authentic Vedic rituals, mantras, and traditions.",
//   },
//   {
//     question: "Can I get my horoscope prepared or analyzed?",
//     answer:
//       "Yes, we provide personalized horoscope predictions and detailed chart analysis based on your date, time, and place of birth by expert astrologers.",
//   },
//   {
//     question: "Do you provide guidance for choosing the right Rudraksha or gemstone?",
//     answer:
//       "Absolutely. Our astrologers and Vedic experts guide you to select the right Rudraksha or gemstone according to your planetary positions and requirements.",
//   },
//   {
//     question: "Are the Rudraksha & gemstones authentic?",
//     answer:
//       "Yes, we only provide 100% original, lab-certified Rudraksha and gemstones sourced ethically, ensuring purity and spiritual benefits.",
//   },
//   {
//     question: "Do you ship Vedic products internationally?",
//     answer:
//       "Yes, we deliver Rudraksha, gemstones, and Vedic products across India and internationally with safe and secure packaging.",
//   },
//   {
//     question: "What types of online courses are available?",
//     answer:
//       "We offer online courses in astrology, Vedic scriptures, mantra chanting, meditation practices, and spiritual living to deepen your knowledge.",
//   },
//   {
//     question: "Can I consult an astrologer online?",
//     answer:
//       "Yes, we provide live online astrology consultations via video call, phone, or chat for personalized guidance and remedies.",
//   },
//   {
//     question: "How do I contact Veda Structure for support?",
//     answer:
//       "You can reach our support team via the contact form on our website or through WhatsApp/phone for assistance with bookings, consultations, and orders.",
//   },
// ];

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
//       <div className="max-w-3xl w-full">
//         {/* Title */}
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
//           Frequently Asked Questions
//         </h2>

//         {/* border image */}
//          <div className="flex justify-center mb-10">
//     <img
//       src="https://aap.astroarunpandit.org/wp-content/uploads/2025/07/wave-1-768x54.png"
//       alt="decorative border"
//       className="w-48 md:w-64 lg:w-72"
//     />
//   </div>
      
//         <p className="text-center text-gray-600 mb-10">
//           Find answers to common questions about our services and spiritual offerings
//         </p>

//         {/* Scrollable FAQ List */}
//         <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-gray-100 rounded-lg">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-sm border border-gray-200"
//             >
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 transition"
//               >
//                 {faq.question}
//                 {openIndex === index ? (
//                   <ChevronUp className="w-5 h-5 text-orange-500" />
//                 ) : (
//                   <ChevronDown className="w-5 h-5 text-gray-500" />
//                 )}
//               </button>

//               {/* Answer with animation */}
//               <div
//                 className={`overflow-hidden transition-all duration-500 ${
//                   openIndex === index ? "max-h-40 px-6 pb-4" : "max-h-0"
//                 }`}
//               >
//                 <p className="text-gray-600">{faq.answer}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is a Vedic Kundali and why is it important?",
    answer:
      "A Vedic Kundali (birth chart) is a detailed astrological map based on your date, time, and place of birth. It reveals insights about your personality, career, relationships, health, and spiritual path.",
  },
  {
    question: "How accurate is the Kundali report from Veda Structure?",
    answer:
      "Our Kundali reports are prepared using authentic Vedic astrology principles and analyzed by expert astrologers. The predictions are highly detailed and accurate, offering practical life guidance.",
  },
  {
    question: "What details do I need to provide for my Kundali?",
    answer:
      "You simply need to share your date of birth, exact time of birth, and place of birth. With these details, we create your precise birth chart and personalized predictions.",
  },
  {
    question: "Can I get remedies for doshas or challenges in my Kundali?",
    answer:
      "Yes. Along with your Kundali, we provide guidance on effective remedies such as mantras, gemstones, Rudraksha, and pujas to help balance planetary influences.",
  },
  {
    question: "Is the Kundali a one-time report or will I get updates?",
    answer:
      "The detailed Kundali is a one-time lifetime report. However, you can also consult our astrologers anytime for updated predictions and personalized guidance.",
  },
  {
    question: "Do you provide gemstone and Rudraksha recommendations?",
    answer:
      "Yes. Based on your planetary positions, our astrologers suggest suitable gemstones and Rudraksha to attract positivity, prosperity, and protection.",
  },
  {
    question: "Can I consult an astrologer live along with my Kundali?",
    answer:
      "Yes, you can opt for live consultations via video call, phone, or chat with our astrologers for deeper insights and answers to specific life questions.",
  },
  {
    question: "How will I receive my Kundali report?",
    answer:
      "Your personalized Kundali report will be delivered digitally in PDF format. It is easy to read, well-structured, and can be accessed anytime on your device.",
  },
  {
    question: "Is the Kundali report available internationally?",
    answer:
      "Yes. We deliver digital Kundali reports worldwide. No matter where you live, you can access your personalized Vedic horoscope.",
  },
  {
    question: "How do I contact support for queries?",
    answer:
      "You can reach our support team via the contact form on our website, WhatsApp, or phone for any help regarding your Kundali report or astrology consultation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      <div className="max-w-3xl w-full">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Kundali FAQs – Your Questions Answered
        </h2>

        {/* border image */}
        <div className="flex justify-center mb-10">
          <img
            src="https://aap.astroarunpandit.org/wp-content/uploads/2025/07/wave-1-768x54.png"
            alt="decorative border"
            className="w-48 md:w-64 lg:w-72"
          />
        </div>

        <p className="text-center text-gray-600 mb-10">
          Find answers to the most common questions about your personalized Vedic Kundali report.
        </p>

        {/* Scrollable FAQ List */}
        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-gray-100 rounded-lg">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 transition"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-orange-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {/* Answer with animation */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-40 px-6 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
