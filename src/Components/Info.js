import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import photo from '../images/photo.jpg'

function Info() {
    return (
        <header className="header">
            <img className="header__dev-photo" src={photo} alt="developer photograph" />
            <h2 className="header__dev-name">Gabriel Rojas</h2>
            <h3 className="header__dev-job">Web Developer</h3>
            <h4 className="header__dev-site"><a href="https://twitter.com/Imdeadandalive">GabrielRojas.com</a></h4>
            <div className="button-container">
                <button className="header__mail-button">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    <p>Email</p>
                </button>
                <button className="header__linkedin-button">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    <p>Linkedin</p>
                </button>
            </div>

        </header>
    )
}

export { Info }