import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
            <div className="footer">
                <footer>
                        <a href="https://www.linkedin.com/in/tony-william-phondeth-4478a9202/" target="blank" rel="noopener noreferrer">
                            <li className="logo">
                                <FaLinkedin />
                            </li>
                        </a>
                        <a href="https://github.com/TPhondeth" target="blank" rel="noopener noreferrer">
                            <li className="logo">
                                <FaGithub />
                            </li>
                        </a>
                        <a href="https://www.instagram.com/" target="blank" rel="noopener noreferrer">
                            <li className="logo">
                                <FaInstagram />
                            </li>
                        </a>
                </footer>
            </div>
        );
    }

export default Footer;
