"use client";

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
    return (
        <div className="w-[98%] max-w-screen-2xl mx-auto bg-gradient-to-r
         from-[#fed7aa] to-[#fbcfe8] py-16 px-6 sm:px-12 text-gray-900 mb-10 
         rounded-2xl shadow-lg mt-[-75px] relative">

            <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Introductory Text - Left Side */}
                <div className="ml-20 w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                        Get in Touch ✉️
                    </h1>
                    <p className="text-gray-700 text-lg mb-6">
                        We&apos;d love to hear from you! Whether you have questions, feedback, or just want to say hello, drop us a message, and we will get back to you as soon as we can.
                    </p>

                    {/* Social Media Links */}
                    <div className="flex justify-center md:justify-start space-x-6 mt-8">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#ff6b6b] text-2xl transition-transform transform hover:scale-110">
                            <FaFacebook />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#ff6b6b] text-2xl transition-transform transform hover:scale-110">
                            <FaInstagram />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#ff6b6b] text-2xl transition-transform transform hover:scale-110">
                            <FaTwitter />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#ff6b6b] text-2xl transition-transform transform hover:scale-110">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* Contact Form - Right Side */}
                <form className="bg-white mr-20 mt-20 rounded-3xl shadow-lg p-6 w-full
                 md:w-1/2 lg:w-2/5 space-y-2">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">📬 Send Us a Message</h2>

                    {/* Name Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b6b] transition"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b6b] transition"
                        />
                    </div>

                    {/* Message Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea
                            rows={5}   // ✅ this is a number, correct
                            placeholder="Write your message here..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b6b] transition"
                        />

                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-gradient-to-r from-[#ff6b6b] to-[#fbcfe8] text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform transform hover:shadow-lg"
                    >
                        ✉️ Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
