import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import Features from "./components/sections/Features";
// import Process from "./components/sections/Process";
// import GlowingBook from "./components/sections/GlowingBook";
import LifePanorama from "./components/sections/LifePanorama";
import BookingForm from "./components/sections/BookingForm";
import Videos from "./components/sections/Videos";

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
        <LifePanorama/>
        {/* <GlowingBook/> */}

    
        <WhyChoose />
        <Testimonials />
        <Videos/>
        <FAQ />
         <Pricing /> 
         <BookingForm/>
          <Footer />
</div>
  );
}

export default App;
