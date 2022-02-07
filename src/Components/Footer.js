import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className="footer-container">
            <ul className="socials">
                <div className="socials__logo-container">
                    <li>
                        <a className="socials__logo-container-link" href="https://twitter.com/Imdeadandalive" target='_blank rel="noopener noreferrer"'>
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                </div>
                <div className="socials__logo-container">
                    <li>
                        <a className="socials__logo-container-link" href="https://www.facebook.com/GabrielRojas818/" target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </li>
                </div>
                <div className="socials__logo-container">
                    <li>
                        <a className="socials__logo-container-link" href="https://www.instagram.com/deadandalivemusic/" target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                </div>
                <div className="socials__logo-container">
                    <li>
                        <a className="socials__logo-container-link" href="https://github.com/gabo182b" target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                </div>
            </ul >
        </div>
    )
}

export { Footer }