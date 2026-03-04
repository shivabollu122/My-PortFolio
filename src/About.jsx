import newmen from "./assets/images/about_image.png";
const About = () => {
    return <>
    
    <div id="about_page" className="pages">
        <div data-aos="fade-up" id="about_div1">
            <h1 id="about_heading">About Me</h1>
        </div>
        <div id="about_div2">
            <div data-aos="fade-right" className="about_divs" id="infirst_about">
               <img src={newmen} width="46%"/>
            </div>
            <div data-aos="fade-left" className="about_divs" id="insecond_about">
                <div id="about_info">
                    <p id="para_id">
                        Hi, I’m Shiva Bollu, a passionate and detail-oriented Front-End Developer who loves building clean, responsive, and user-friendly web applications. I specialize in creating interactive interfaces using HTML, CSS, JavaScript, and React.js, with a strong focus on performance and modern UI design. I enjoy transforming ideas into real-world digital experiences by writing efficient, scalable, and maintainable code. With a solid understanding of responsive design, component-based architecture, API integration, and state management, I continuously strive to improve my skills and stay updated with the latest web technologies. My goal is to create seamless user experiences that are both visually appealing and highly functional.
                    </p>
                </div>
                <div className="edu_divs">
                    <h2 className="heading_edu_divs">Education</h2>
                    <span className="info_divs_about">
                        2025-Graduated from GIET in the Stream of Computer Science and Engineering.
                    </span>
                </div>
                <div className="edu_divs">
                    <h2 className="heading_edu_divs">Experience</h2>
                    <span className="info_divs_about">
                        Done Internship from Thinkmates Pvt.Lmtd in the Domain of Business and Data Analytics.
                    </span>
                </div>
                <div className="edu_divs">
                    <h2 className="heading_edu_divs">Softwares</h2>
                    <span className="info_divs_about">
                        Visual Studio Code,
                        Git,
                        GitHub,
                        PowerBI,
                        Figma,
                        Canvas,
                        After Effects.
                    </span>
                </div>
            </div>
        </div>
    </div>
    
    </>
}
 
export default About;