import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import Features from "./components/sections/Features";
// import Process from "./components/sections/Process";

import WhyChoose from "./components/sections/WhyChoose";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import Pricing from "./components/sections/Pricing";
import Footer from "./components/sections/Footer";


function App() {
  return (
<div>
       {/* 
            <Process />
        <WhatsInside />
        
          */}
        
      
        <Navbar/>
        <Hero/>
        <Features />
       
    
        <WhyChoose />
        <Testimonials />
        <FAQ />
         <Pricing /> 
          <Footer />
</div>
  );
}

export default App;
