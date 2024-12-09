import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/page";
import About from "@/components/About/page"
import Header from "@/components/Header/page";
import FoodCategory from "@/components/FoodCategory/page";


export default function Home() {
  return (
   <div className="absolute w-screen h-screen left-0 top-0 bg-[rgba(13, 13, 13, 0.95)]">
      <Header />
      <HeroSection />
      <About />
      <FoodCategory />
      <Footer />

    </div> 
    
  );
}


