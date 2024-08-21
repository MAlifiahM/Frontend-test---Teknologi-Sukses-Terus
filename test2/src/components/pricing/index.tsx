import React from "react";
import check from "../../assets/check.png";
import "./index.css";

const Pricing : React.FC = () => {
    return (
        <section id="pricing" className="flex flex-col justify-center items-center bg-custom">
            <div className="flex flex-col justify-center">
                <span className="text-blue-600 text-3xl">Simple, transparent pricing</span>
                <span className="text-sm">Whatever you want, whenever you want.</span>
            </div>

            <div className="py-24 flex flex-row pricing-response">
                {/*  Basic */}
                <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
                    <h1 className="text-black font-semibold text-2xl">Basic</h1>
                    <p className="pt-2 tracking-wide">
                        <span className="text-gray-400 align-top">$ </span>
                        <span className="text-3xl font-semibold">10</span>
                        <span className="text-gray-400 font-medium">/ user</span>
                    </p>
                    <hr className="mt-4 border-1"/>
                    <div className="pt-8">
                        <p className="font-semibold text-gray-400 text-left flex justify-start items-center">
                            <span className="align-middle">
                                <img src={check} alt="check-icon" className="price-icons"/>
                            </span>
                            <span className="pl-2">
                                Mencatat barang <span className="text-black">masuk</span>
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5 flex justify-start items-center">
                            <span className="align-middle">
                                <img src={check} alt="check-icon" className="price-icons"/>
                            </span>
                            <span className="pl-2">
                                Mencatat barang <span className="text-black">keluar</span>
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5 flex justify-start items-center">
                            <span className="align-middle">
                                <img src={check} alt="check-icon" className="price-icons"/>
                            </span>
                            <span className="pl-2">
                                <span className="text-black">Mencatat</span> hasil keuntungan
                            </span>
                        </p>

                        <a href="/" className="">
                            <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                <span className="font-medium">
                                    Choose Plan
                                </span>
                            </p>
                        </a>
                    </div>
                </div>
                {/*  Business */}
                <div
                    className="w-96 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">
                    <h1 className="text-white font-semibold text-2xl">Business</h1>
                    <p className="pt-2 tracking-wide">
                        <span className="text-gray-400 align-top">$ </span>
                        <span className="text-3xl font-semibold">24</span>
                        <span className="text-gray-400 font-medium">/ user</span>
                    </p>
                    <hr className="mt-4 border-1 border-gray-600"/>
                    <div className="pt-8">
                        <p className="font-semibold text-gray-400 text-left flex justify-start items-center">
                            <span className="align-middle">
                                <img src={check} alt="check-icon" className="price-icons"/>
                            </span>
                            <span className="pl-2">
                                All features in <span className="text-white">Basic</span>
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5 flex justify-start items-center">
                            <span className="align-middle">
                                <img src={check} alt="check-icon" className="price-icons"/>
                            </span>
                            <span className="pl-2">
                                Dapat menganalisa hasil penjualan dengan <span className="text-white">CHART</span>
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5 flex justify-start items-center">
                            <span className="align-middle">
                                <img src={check} alt="check-icon" className="price-icons"/>
                            </span>
                            <span className="pl-2">
                                <span className="text-white">Support</span> 7x24 jam
                            </span>
                        </p>

                        <a href="/" className="">
                            <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                <span className="font-medium">
                                    Choose Plan
                                </span>
                            </p>
                        </a>
                    </div>
                    <div className="absolute top-4 right-4">
                        <p className="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">Popular</p>
                    </div>
                </div>
                {/*  Enterpreneur  */}
                <div className="w-96 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl">
                    <h1 className="text-black font-semibold text-2xl">Enterprise</h1>
                    <p className="pt-2 tracking-wide">
                        <span className="text-gray-400 align-top">$ </span>
                        <span className="text-3xl font-semibold">35</span>
                        <span className="text-gray-400 font-medium">/ user</span>
                    </p>
                    <hr className="mt-4 border-1"/>
                    <div className="pt-8">
                        <p className="font-semibold text-gray-400 text-left flex justify-start items-center">
                            <span className="align-middle">
                                <img src={check} alt="check-icon" className="price-icons"/>
                            </span>
                            <span className="pl-2">
                                All features in <span className="text-black">Business</span>
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5 flex justify-start items-center">
                            <span className="align-middle">
                                <img src={check} alt="check-icon" className="price-icons"/>
                            </span>
                            <span className="pl-2">
                                Export data ke <span className="text-black">excel</span>
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5 flex justify-start items-center">
                            <span className="align-middle">
                                <img src={check} alt="check-icon" className="price-icons"/>
                            </span>
                            <span className="pl-2">
                                <span className="text-black">AI</span> prediksi penghasilan
                            </span>
                        </p>

                        <a href="/" className="">
                            <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                <span className="font-medium">
                                    Choose Plan
                                </span>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;