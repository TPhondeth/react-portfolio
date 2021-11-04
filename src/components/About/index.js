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
                    Hi my name is Tony. I'm an aspiring full-stack web developer based out of Toronto, Canada. My journey into tech started last year when I lost my corporate sales job due to the pandemic. I took the opportunity to reinvent myself and pursue a new and challenging career in web development.
                </p>
                <p>
                    I'm currently enrolled at the University of Toronto SCS Full-Stack Web Development Bootcamp. The program has helped me build a strong foundation in JavaScript, HTML, CSS and responsive web design. I also have knowledge in object-oriented programming of progressive web-applications using MongoDB, Express.js, React.js and Node.js the (MERN) technology stack. I've finally found a career that I'm passionate about and I'm excited to continue learning new technologies and put my skills to use.
                </p>
                <p>
                    When I'm not coding I enjoy cooking, spending time with my family and keeping fit. I've been on a fitness journey since the pandemic has started and I'm in the best shape of my life. I weight train daily and go for 10km runs several times a week.
                </p>
            </div>
        </section>
    );
}

export default About;