import React from "react";
import Header from "../../components/header";
import About from "../../components/about";
import Pricing from "../../components/pricing";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Chart from "../../assets/undraw_charts_re_5qe9.svg";
import "./index.css"

const Home : React.FC = () => {
    return (
        <div className="home">
            <Header type="home" />
            <section className="home-content flex flex-col bg-custom" id="home">
                <div className="text-right h-1/4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore
                    et dolore magna aliqua.
                </div>
                <div className="">
                    <div className="mb-12">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    </div>
                    <img src={Chart} alt="chart-icon" className="chartIcon"/>
                </div>
            </section>
            <About/>
            <Pricing/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;