import html from "./assets/images/htmlicon.png";
import css from "./assets/images/cssicon.png";
import js from "./assets/images/javascript.png";
import java from "./assets/images/java.png";
import sql from "./assets/images/sql.png";
import reacticon from "./assets/images/react.png"
import man from "./assets/images/newimage.png";
const Details = () => {
    return <>
    
    <div className="pages" id="details_page">
        <div className="info_divs" id="info_1">
            <h1 id="name_id">Hi,I'm SHIVA</h1>
            <h2 id="frontend">Frontend Developer</h2>
            <p style={{color:"gray"}}>
                I am a passionate Frontend Developer with strong skills in HTML, CSS, JavaScript, and React.js. I focus on building responsive, user-friendly, and visually appealing web applications that deliver seamless user experiences. I enjoy transforming ideas into interactive digital products and continuously improving my knowledge of modern frontend technologies and best practices. My goal is to create clean, efficient, and scalable interfaces that provide real value to users.
            </p>
            <div id="button_container">
                <button className="buttons_details" id="hire_button">Hire Me</button>
                <button className="buttons_details" id="contact_me_button">Contact Me</button>
            </div>
        </div>
        <div className="info_divs" id="info_2">
            <div id="image_div"></div>
            <div id="rotate_div">
               <div className="icon_divs" id="html">
                <img src={html} width="70%"/>
               </div>
               <div className="icon_divs" id="css">
                <img src={css} width="70%"/>
               </div>
               <div className="icon_divs" id="js">
                <img src={js} width="70%"/>
               </div>
               <div className="icon_divs" id="java">
                <img src={java} width="70%"/>
               </div>
               <div className="icon_divs" id="react">
                <img src={reacticon} width="70%"/>
               </div>
               <div className="icon_divs" id="sql">
                <img src={sql} width="70%"/>
               </div>
            </div>
        </div>
    </div>
    
    </>
}
 
export default Details;