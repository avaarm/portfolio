import React from "react";
import Header from "../../components/Header";
import "./style.css";
import profile from "./profile.png"

function AboutContainer() {
    return (
        // the uk-container class gives it a max width and wraps the main content of the website, also it will be centers and will have padding on the sides
        <div className="uk-container uk-margin-right">
            <div className="uk-text-center">
                <div id="about-container">
                    <div id="about-me"><img src={profile} width="100" height="100" alt="profile picture"></img>
                     <Header title="About Me" />
                        <p className="uk-text-justify about-me">
                        A clinical and preclinical researcher with a background in immunology and computer science. I started out my journey
                        as an immunology researcher at a small San Diego lab and quickly after began working at a Biotech startup with only 20 employees. It quadrupled in 
                        size and began two clinical trials by the time I left. From there I began to develop my passion for working within the clinical trial field 
                        
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutContainer;
