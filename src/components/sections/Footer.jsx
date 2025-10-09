
// CosmicFooter.jsx
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CosmicFooter() {
  return (
    <footer className="relative bg-gradient-to-r from-orange-800 via-yellow-700 to-orange-900 text-white pt-20 pb-12 overflow-hidden">
      {/* Subtle cosmic stars overlay */}
      <div className="absolute inset-0 bg-[url('/stars-bg.png')] bg-cover bg-center opacity-10 pointer-events-none"></div>

      {/* Footer Main Grid */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-16">
        
        {/* Logo & About */}
        <div className="flex flex-col justify-start gap-6">
          <motion.img 
            src="./logo.png" 
            alt="Vedic Kundli"
            className="h-28 w-auto drop-shadow-[0_0_20px_rgba(255,215,0,0.7)]"
            whileHover={{ scale: 1.05 }}
          />
          <p className="text-yellow-200 text-lg leading-relaxed">
            Discover your destiny with precise Vedic astrology predictions. Let the stars guide your life.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-5 mt-2 text-yellow-200 text-xl">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
              <motion.a 
                key={idx}
                href="#"
                className="hover:text-yellow-300 transition"
                whileHover={{ scale: 1.2, textShadow: "0 0 10px rgba(255,215,0,0.8)" }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col justify-start gap-4">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-yellow-200">Quick Links</h3>
          {["Home", "What is Kundli?", "Life Aspects", "Process", "Pricing"].map((link, idx) => (
            <a 
              key={idx} 
              href={`#${link.toLowerCase().replace(/ /g, "-")}`} 
              className="text-yellow-200 text-lg hover:text-yellow-50 transition hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.7)]"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Contact & Newsletter */}
        <div className="flex flex-col justify-start gap-4">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-yellow-200">Contact Us</h3>
          <p className="text-yellow-200">Email: info@vedickundli.com</p>
          <p className="text-yellow-200">Phone: +91 98765 43210</p>
          <p className="text-yellow-200">Dhanbad, Jharkhand, India</p>

          <div className="mt-4">
            <h4 className="text-lg font-medium mb-2 text-yellow-200">Subscribe Newsletter</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-3 py-2 rounded-l-lg outline-none w-full text-black shadow-[0_0_10px_rgba(255,215,0,0.5)] focus:shadow-[0_0_15px_rgba(255,215,0,0.7)] transition"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-yellow-600 to-orange-800 rounded-r-lg font-semibold text-white hover:from-orange-800 hover:to-yellow-600 shadow-lg transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="flex flex-col justify-start gap-4">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-yellow-200">Payment Options</h3>
          <p className="text-yellow-200">You can pay via:</p>
          <div className="flex gap-4 mt-2">
            <motion.img
              whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
              src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png"
              alt="Paytm"
              className="h-14 w-auto rounded-md"
            />
            <motion.img
              whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
              src="https://cdn.razorpay.com/app/googlepay.svg"
              alt="Google Pay"
              className="h-14 w-auto rounded-md"
            />
            <motion.img
              whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
              src="https://checkout-static-next.razorpay.com/build/assets/images/phonepe.e101f376.svg"
              alt="PhonePe"
              className="h-14 w-auto rounded-md"
            />
          </div>
          <p className="text-yellow-200 mt-2 text-sm">
            UPI/QR payments accepted for your convenience.
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-yellow-300 pt-6 text-center text-yellow-200 text-sm relative z-10">
        &copy; {new Date().getFullYear()} Vedic Kundli. All Rights Reserved.
      </div>
    </footer>
  );
}
