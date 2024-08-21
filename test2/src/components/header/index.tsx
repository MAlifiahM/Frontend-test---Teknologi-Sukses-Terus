import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/undraw_hey_email_liaa.svg";
import "./index.css";
import { scrollToSection } from "../../utils/scrollUtils";

interface HeaderProps {
    type: string
}

const Header: React.FC<HeaderProps> = ({ type }) => {
    return (
        <header className="header flex sticky justify-between items-center">
            <div className="">
                <Link to="/" className="header-logo">
                    <img src={logo} alt="home-icon" className="home-icon"/>
                </Link>
            </div>
            <div className="header-content flex justify-between items-center">
                <nav>
                    <ul className="header-nav flex justify-center mr-2">
                        <li className="mr-3 font-bold"><Link to="/" onClick={() => scrollToSection("home")}>Home</Link>
                        </li>
                        <li className="mr-3 font-bold"><Link to="/"
                                                             onClick={() => scrollToSection("about")}>About</Link></li>
                        <li className="mr-3 font-bold"><Link to="/"
                                                             onClick={() => scrollToSection("pricing")}>Pricing</Link>
                        </li>
                        <li className="mr-3 font-bold"><Link to="/"
                                                             onClick={() => scrollToSection("contact")}>Contact</Link>
                        </li>
                    </ul>
                </nav>
                {
                    type === "home" ?
                        <div
                            className="
                                text-white
                                bg-gradient-to-r
                                from-cyan-500
                                to-blue-500
                                hover:bg-gradient-to-bl
                                focus:ring-4
                                focus:outline-none
                                focus:ring-cyan-300
                                dark:focus:ring-cyan-800
                                rounded-lg text-sm px-5 py-2 text-center me-2 font-bold"
                        >
                            <Link to={"/login"}>Login</Link>
                        </div>
                        :
                        ''
                }
            </div>
        </header>
    );
}

export default Header;