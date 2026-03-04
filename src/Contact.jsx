import {  FaPhone } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Contact = () => {
    return <>
    
    <div id="contact_page" className="pages">
        <div data-aos="fade-up" id="about_div1">
            <h1 id="about_heading">Contact</h1>
        </div>
        <div id="contact_div">
            <div data-aos="flip-up" className="contact_divs">
                <h2 style={{color:"gray"}}>Let's Colloborate I am always open to discussing Exiciting Projects and new Opportunities.</h2>
                <div className="inside_3">
                    <MdEmail size={35} color="red"/>
                    <span style={{color:"white"}}>Shivabollu122@gmail.com.</span>
                </div>
                <div className="inside_3">
                    <FaPhone size={35} color="red"/>
                    <span style={{color:"white"}}>+917780586168.</span>
                </div>
                <div className="inside_3">
                    <MdLocationOn size={35} color="red"/>
                    <span style={{color:"white"}}>Kukatpally,Hyderabad,Telangana.</span>
                </div>
            </div>
            <div data-aos="flip-down" className="contact_divs">
                <input type="text" placeholder="Your Name" className="inputs onlyinputs"/>
                <input type="text" placeholder="Your Email" className="inputs onlyinputs"/>
                <textarea className="inputs onlyinputs" placeholder="Your Message" rows="5" style={{resize:"none"}}></textarea>
                <button className="inputs" id="button">Send Message</button>
            </div>
        </div>
    </div>
    
    </>
}
 
export default Contact;