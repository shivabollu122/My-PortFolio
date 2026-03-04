import { FaGithub,FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return <>
    
    <div id="footer">
        <div id="footer1" className="footers">
            <h3 style={{color:"gray"}}>&copy; 2026 PortFolio.All Rights Are Reserved.</h3>
        </div>
        <div id="icons_footer" className="footers">
            <a href="https://github.com/shivabollu122"><FaGithub size={25} className="icons_nav"/></a>
            <a href="https://www.linkedin.com/in/shiva-bollu-944481366/"><FaLinkedin size={25} className="icons_nav"/></a>
        </div>
    </div>
    
    </>
}
 
export default Footer;