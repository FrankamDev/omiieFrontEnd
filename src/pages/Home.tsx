import AboutPreview from "../components/AboutPreview";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

export default function Home() {

    return(
        <div className="home">
            <Navbar/>
            <HeroSection/>
            <AboutPreview/>
        </div>
    )
}