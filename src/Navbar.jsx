import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
    return <>
    
    <nav id="navbar">
        <h1 id="name">PORTFOLIO.</h1>
        <div id="nav_items">
            <a href="#details_page" className="items_nav">Home</a>
            <a href="#about_page" className="items_nav">About</a>
            <a href="#projects_page" className="items_nav">Projects</a>
            <a href="#contact_page" className="items_nav">Contact</a>
        </div>
        <div id="icons_nav">
            <a href="https://github.com/shivabollu122"><FaGithub size={25} className="icons_nav"/></a>
            <a href="https://www.linkedin.com/in/shiva-bollu-944481366/"><FaLinkedin size={25} className="icons_nav"/></a>
        </div>
    </nav>
    </>
}
 
export default Navbar;