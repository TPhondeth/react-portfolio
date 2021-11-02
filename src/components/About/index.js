import React from 'react';
import ProfilePic from '../../assets/images/profile.png';

function About() {
    return (
        <section>
            <div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
            <div className="center">
				<img
					src={ProfilePic}
					alt="about-me"
					className="photo"
				/>
			</div>
            <div className="about-me">
                <p>
                    Hi my name is Tony. I'm an aspiring web developer based out of Toronto, ON. My journey into tech started last year when I lost my corporate sales job during the pandemic. I took the opportunity to reinvent myself and pursue a new and challenging career in web development.
                </p>
                <p>
                    I'm currently enrolled at the University of Toronto SCS Full-Stack Web Development Bootcamp. The program has helped me build a strong foundation in JavaScript, HTML5, CSS3 and responsive web design. I also have knowledge in object-oriented programming of progressive web-applications using MongoDB, Express.js, React.js and Node.js (MERN) technology stack. I've finally found a career that I'm passionate about and am excited to continue learning new technologies and put my skills to use.
                </p>
            </div>
        </section>
    );
}

export default About;