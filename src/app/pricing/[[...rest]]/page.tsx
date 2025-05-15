"use client";

export default function PricingPage() {
    return (
        <div className="w-[98%] max-w-screen-2xl mx-auto bg-gradient-to-r from-[#fed7aa] to-[#fbcfe8] py-16 px-12 text-gray-900 mb-10 rounded-2xl shadow-lg mt-[-75px] relative">

            {/* Heading */}
            <div className="text-center mt-20 mb-16">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                    Choose Your Plan 💼
                </h1>
                <p className="text-gray-600 text-lg">
                    Find the perfect plan for your teaching needs.
                </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Basic Plan */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 text-center hover:shadow-lg transition-transform transform hover:-translate-y-2">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">🚀 Basic</h2>
                    <p className="text-4xl font-extrabold text-gray-900 mb-4">$0.99</p>
                    <p className="text-gray-600 mb-6">Per Month</p>
                    <ul className="text-gray-700 mb-8 space-y-3">
                        <li>✅ Access to 10 lesson plans</li>
                        <li>📄 Downloadable PDFs</li>
                        <li>✉️ Email Support</li>
                    </ul>
                    <button className="px-4 py-2 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition-transform transform hover:scale-105">
                        Get Basic
                    </button>
                </div>

                {/* Pro Plan (Most Popular) */}
                <div className="bg-white rounded-2xl shadow-lg border-2 border-black p-8 text-center hover:shadow-2xl transition-transform transform hover:-translate-y-4 relative scale-105">
                    <span className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                        Most Popular ⭐
                    </span>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">🔥 Pro</h2>
                    <p className="text-4xl font-extrabold text-gray-900 mb-4">$0.99</p>
                    <p className="text-gray-600 mb-6">Per Month</p>
                    <ul className="text-gray-700 mb-8 space-y-3">
                        <li>✅ Access to 50 lesson plans</li>
                        <li>📂 Downloadable PDFs & PPTs</li>
                        <li>⚡ Priority Support</li>
                    </ul>
                    <button className="px-4 py-2 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition-transform transform hover:scale-105">
                        Get Pro
                    </button>
                </div>

                {/* Premium Plan */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 text-center hover:shadow-lg transition-transform transform hover:-translate-y-2">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">💎 Premium</h2>
                    <p className="text-4xl font-extrabold text-gray-900 mb-4">$0.99</p>
                    <p className="text-gray-600 mb-6">Per Month</p>
                    <ul className="text-gray-700 mb-8 space-y-3">
                        <li>✅ Unlimited Lesson Plans</li>
                        <li>📥 All Downloadable Formats</li>
                        <li>🌟 24/7 Dedicated Support</li>
                    </ul>
                    <button className="px-4 py-2 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition-transform transform hover:scale-105">
                        Get Premium
                    </button>
                </div>

            </div>
        </div>
    );
}
