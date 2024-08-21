import React from "react";


const Contact : React.FC = () => {
    return (
        <section id="contact" className="bg-custom items-center">
            <div className="py-8 lg:py-16 h-fit px-4 mx-auto border-2 border-blue-600 rounded-2xl bg-white">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center px-8">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl px-8">Got a
                    technical issue? Want to send feedback about a beta feature? Need details about our plan?
                    Let us know.</p>
                <form action="#" className="space-y-8 px-8">
                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-medium">
                            Your email
                        </label>
                        <input type="email" id="email"
                               className="shadow-sm border border-blue-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                               placeholder="name@example.com" required={true}/>
                    </div>
                    <div>
                        <label htmlFor="subject"
                               className="block mb-2 text-sm font-medium">Subject</label>
                        <input type="text" id="subject"
                               className="block p-3 w-full text-sm rounded-lg border border-blue-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                               placeholder="Let us know how we can help you" required={true}/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message"
                               className="block mb-2 text-sm font-medium">Your message</label>
                        <textarea id="message" rows={6}
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-blue-300 focus:ring-blue-500 focus:border-blue-500"
                                  placeholder="Leave a comment..." required={true}></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 float-end">
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;