import React from "react";
import { Link } from "react-router-dom";
import { scrollToSection } from "../../utils/scrollUtils";

const Footer : React.FC = () => {
    return (
        <footer className="footer bg-blue-200 pt-8">
            <div className="flex flex-wrap text-left lg:text-left">
                <div className="w-full lg:w-6/12 px-4">
                    <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
                    <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                        Find us on any of these platforms, we respond 1-2 business days.
                    </h5>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="flex flex-wrap items-top mb-6">
                        <div className="w-full lg:w-4/12 px-4 ml-auto">
                            <span
                                className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                            <ul className="list-unstyled">
                                <li><Link to="/" onClick={() => scrollToSection("about")} className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">About</Link></li>
                                <li><Link to="/" onClick={() => scrollToSection("pricing")} className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Pricing</Link></li>
                                <li><Link to="/" onClick={() => scrollToSection("contact")} className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-4/12 px-4">
                            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                            <ul className="list-unstyled">
                                <li>
                                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                       href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT
                                        License</a>
                                </li>
                                <li>
                                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                       href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                                </li>
                                <li>
                                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                       href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-blueGray-300"/>
            <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                        <p>&copy; 2024 Our Company. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;