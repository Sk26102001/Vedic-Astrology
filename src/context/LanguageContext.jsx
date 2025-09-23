import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    heroTitle: "Your Destiny, Decoded – Vedic Personalized Kundli",
    heroSubtitle: "Discover the hidden blueprint of your life with 99% accuracy Vedic astrology.",
    cta: "Get My Kundli",

    featuresTitle: "Life Aspects Covered",
    features: [
      "Career Growth",
      "Love & Relationships",
      "Business Success",
      "Financial Stability",
      "Health Guidance",
      "Marriage Timing",
    ],

    processTitle: "How It Works",
    process: [
      "Enter Birth Details",
      "Expert Chart Preparation",
      "Astrologer’s Analysis",
      "Personalized Report & Remedies",
    ],

    insideTitle: "What’s Inside Your Kundli?",
    inside: [
      "Basic Birth Details",
      "Favorable Points",
      "Gemstone & Rudraksha Recommendations",
      "Yoga & Dosha Reports",
      "Health & Finance Astrograph",
      "Dasha Analysis",
      "1-Year Monthly Predictions",
      "10-Year Life Predictions",
      "Numerology Insights",
      "Lal Kitab Remedies",
      "16 Varga Kundali",
    ],

    whyTitle: "Why Choose Us?",
    why: [
      "Based on Ancient Vedic Texts",
      "Accurate Planetary Calculations",
      "Trusted Worldwide",
      "Delivered in 3–7 Days via Email",
    ],

    testimonialsTitle: "What Our Customers Say",
    faqsTitle: "Frequently Asked Questions",
    pricingTitle: "Special Limited-Time Offer",
    footer: "Your Future is Written in the Stars. Decode it Today.",
  },

  hi: {
    heroTitle: "आपकी किस्मत का रहस्य – वेदिक पर्सनलाइज्ड कुंडली",
    heroSubtitle: "99% सटीक वेदिक ज्योतिष से जानें आपके जीवन का गुप्त खाका।",
    cta: "मेरी कुंडली प्राप्त करें",

    featuresTitle: "जीवन के क्षेत्र",
    features: [
      "कैरियर में प्रगति",
      "प्यार और रिश्ते",
      "व्यापार में सफलता",
      "वित्तीय स्थिरता",
      "स्वास्थ्य मार्गदर्शन",
      "विवाह का समय",
    ],

    processTitle: "कैसे काम करता है?",
    process: [
      "जन्म विवरण दर्ज करें",
      "विशेषज्ञ द्वारा चार्ट तैयार",
      "ज्योतिषी का विश्लेषण",
      "व्यक्तिगत रिपोर्ट और उपाय",
    ],

    insideTitle: "आपकी कुंडली में क्या मिलेगा?",
    inside: [
      "मूल जन्म विवरण",
      "अनुकूल बिंदु",
      "रत्न और रुद्राक्ष सुझाव",
      "योग और दोष रिपोर्ट",
      "स्वास्थ्य और वित्तीय विश्लेषण",
      "दशा विश्लेषण",
      "1 वर्ष की भविष्यवाणी",
      "10 वर्ष की भविष्यवाणी",
      "अंक ज्योतिष",
      "लाल किताब उपाय",
      "16 वर्ग कुंडली",
    ],

    whyTitle: "क्यों चुनें हमें?",
    why: [
      "प्राचीन वेदिक ग्रंथों पर आधारित",
      "सटीक ग्रह गणना",
      "विश्वभर में विश्वसनीय",
      "3–7 दिनों में ईमेल द्वारा डिलीवरी",
    ],

    testimonialsTitle: "ग्राहक क्या कहते हैं",
    faqsTitle: "अक्सर पूछे जाने वाले प्रश्न",
    pricingTitle: "विशेष सीमित समय का ऑफर",
    footer: "आपका भविष्य सितारों में लिखा है। आज ही जानें।",
  },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const toggleLang = () => setLang(lang === "en" ? "hi" : "en");

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
