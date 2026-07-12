
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, } from 'react-router-dom';

function Home() {

   

    


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation Bar */}

            {/* Main Content */}
            <main className="flex items-center justify-center py-20 px-6">
                <div className="max-w-2xl text-center">
                    <div className="bg-white p-12 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            Welcome to PaperApp
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Experience the elegance of minimalist design with our clean,
                            paper-inspired interface that focuses on what matters most.
                        </p>
                        <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 active:scale-95">
                            Get Started
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;