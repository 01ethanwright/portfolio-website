import './AboutMe.css';
import blimp_image from './blimp_image.png';

function AboutMe() {
    const handleDownload = () => {
        window.open(`${process.env.PUBLIC_URL}/Resume_EthanWright.pdf`, '_blank');
        
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/Resume_EthanWright.pdf`;
        link.download = 'Resume_EthanWright.pdf';
        link.target = '_blank';
        link.click();
    }
    
    return(
        <div className='AboutMe'>
            <div className='brief-intro'>
                <h1>Introduction</h1>
                <hr />
                <p>
                    My name is Ethan Wright, and I am from York, PA. I enjoy all things music, traveling, and exercising. 
                    I enjoy challenging myself to try and achieve things I never thought would be possible. Currently, I began 
                    training to run a marathon, and hopefully achieve my goal of running an ultra, when I've always struggled with 
                    running.
                </p>
                <p>
                    When it comes to my programming journey, I also like to follow that same mentality of pushing myself to achieve new 
                    heights. I have a couple hard projects in mind I would like to begin working on and vlogging to also upload to YouTube.
                </p>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <hr />
                <p><span className='highlight'>Languages: </span>Java, Python, C, C++, C#, x86 Assembly, VHDL, JavaScript, Typescript</p>
                <p><span className='highlight'>Frameworks: </span>Angular, ReactJS, Bootstrap, Django, ROS2</p>
                <p><span className='highlight'>Operating Systems: </span>Linux, Windows, macOS, FreeRTOS</p>
                <p><span className='highlight'>Debugging: </span>GDB</p>
                <p><span className='highlight'>Version Control: </span>Git</p>
            </div>
            <div className='experiences'>
                <h1>Experiences</h1>
                <hr />
                <h3>Undergraduate Research Assistant - West Virginia University</h3>
                <div className='blimp-section'>
                    <div className='blimp-text'>
                        <p>
                            While at West Virginia University, I was a part of the Defend the Republic Blimp Competion. 
                            In this competition, we were to build an autonomous blimp to capture and score game balls in a 
                            game against the other team. I was a part of the controls team, working on our ROS2 architecture 
                            and computer vision using OpenCV.
                        </p>
                        <p>
                            At our competition in May at George Mason University, we were able to successfully capture a game ball 
                            in autonomous mode. This summer, I continued to work on our ROS2 structure, to where I was able 
                            optimize the code to run at 8x its original speed at competition.
                        </p>
                    </div>
                    <img src={blimp_image} className='experiences-img' />
                </div>
                <h3>Capstone Project - EcoCar</h3>
                <div className='capstone-section'>
                    <p>
                        For my capstone project, I was a part of the EcoCar project, specifically on the CAV's sub-team. 
                        I did both research and implementation over the two semesters I was a part of the team, along with 
                        the couple months I volunteered. I completed research on design on sensor fusion metrics in MATLAB.
                        I also began implementation of our sensors fusion algorithms into RTMaps, along with setting up CAN 
                        communication for our decentralized system architecture.
                    </p>
                </div>
            </div>
            <div className='resume-download'>
                <button class="Download-button" onClick={handleDownload}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="20"
                        viewBox="0 0 640 512"
                    >
                        <path
                        d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
                        fill="white"
                        ></path>
                    </svg>
                    <span>Download Resume</span>
                </button>
            </div>
        </div>
    )
};

export default AboutMe;