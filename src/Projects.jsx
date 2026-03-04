import port from "./assets/images/portfolio.png";
import todo from "./assets/images/todo.webp";
import ecommerce from "./assets/images/ecommerce.avif";
import music from "./assets/images/music.jpg";
import msed from "./assets/images/msed.png";
import rsbul from "./assets/images/rsbul.png";
import sms from "./assets/images/sms.webp";
import sales from "./assets/images/sales.avif"
const Projects = () => {
    return <>
    
    <div id="projects_page" className="pages">
         <div data-aos="fade-up" id="about_div1">
            <h1 id="about_heading">Projects</h1>
        </div>
        <div data-aos="zoom-in" id="projects_container">
            <div className="projects_each">
                <img src={port} width="100%" height="60%"/>
                <h2 className="title">PortFolio WebPage</h2>
                <span className="info_projects">Modern Responsive Front-End PortFolio Developed by Using React JS.</span>
            </div>
            <div className="projects_each">
                <img src={todo} width="100%" height="60%"/>
                <h2 className="title">To-Do-List</h2>
                <span className="info_projects">We can perform the Scheduling Tasks Based On the List Priorities,Developed Using React Js and HTML,CSS,JS.</span>
            </div>
            <div className="projects_each">
                <img src={ecommerce} width="100%" height="60%"/>
                <h2 className="title">E-commerce Site</h2>
                <span className="info_projects">An Ecommerce Website Developed by using React JS to Solve the real world Problems and to instant Delivery.</span>
            </div>
            <div className="projects_each">
                <img src={music} width="100%" height="60%"/>
                <h2 className="title">Music Player</h2>
                <span className="info_projects">A Simple Animated Music Player Developed by React Js And Added with Wishlist Songs.</span>
            </div>
            <div className="projects_each">
                <img src={msed} width="100%" height="60%"/>
                <h2 className="title">Message Encryptor And Decryptor</h2>
                <span className="info_projects">Developed by using HTML,CSS,JS. Encryption and Decryption With JS Functions.</span>
            </div>
            <div className="projects_each">
                <img src={rsbul} width="100%" height="60%"/>
                <h2 className="title">Resume Builder</h2>
                <span className="info_projects">Developed using React JS to get Instant Resume Ready with only one Template for Students.</span>
            </div>
            <div className="projects_each">
                <img src={sms} width="100%" height="60%"/>
                <h2 className="title">Student Management System</h2>
                <span className="info_projects">It is a Console based Project Developed using Java and JDBC Concepts.</span>
            </div>
            <div className="projects_each">
                <img src={sales} width="100%" height="60%"/>
                <h2 className="title">Sales Dashboard</h2>
                <span className="info_projects">Developed the Interactive Sales Dashboards for the Stakeholders using powerBI.</span>
            </div>
        </div>
    </div>
    
    </>
}
 
export default Projects;