import React from "react";
import logo from "../../assets/undraw_portfolio_website_re_jsdd.svg";
import "./index.css";

const About : React.FC = () => {
    return (
        <section id="about" className="about items-center bg-custom">
            <div className="col-6">
                <img src={logo} alt="about-logo" className="about-logo"/>
            </div>
            <div className="col-6">
                <h2 className="font-bold">About Us</h2>
                <p className="aboutText">We are a startup providing ERP solutions for businesses...</p>
            </div>
        </section>
    );
};

export default About;