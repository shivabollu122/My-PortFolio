import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Details from "./Details";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {

   useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
    });
  }, []);


    return <>
    
    <Navbar/>
    <Details/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>

    </>
}
 
export default App;