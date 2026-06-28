import AboutPreview from "../components/AboutPreview";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";

export default function Home() {

    return(
        <div className="home">
            <Navbar/>
            <HeroSection/>
            <AboutPreview/>
            <ServicesSection/>
        </div>
    )
}