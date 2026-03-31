import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 border-t border-gray-700 py-8">
            <div className="mx-auto w-full p-6 lg:py-8">

                <div className="md:flex md:justify-between">
                          
                    {/* Logo */}
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="mr-3 h-12"
                                alt="Logo"
                            />
                        </Link>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">

                        {/* Resources */}
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-white uppercase">Resources</h2>
                            <ul className="space-y-2">
                                <li><Link to="/" className="hover:text-white">Home</Link></li>
                                <li><Link to="/about" className="hover:text-white">About</Link></li>
                            </ul>
                        </div>

                        {/* Follow */}
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-white uppercase">Follow us</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">Discord</a>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-white uppercase">Legal</h2>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white">Terms</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <hr className="my-6 border-gray-700" />

                {/* Bottom */}
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <span className="text-sm">
                        © 2026 Lavish. All Rights Reserved.
                    </span>

                    {/* Icons */}
                    <div className="flex mt-4 space-x-4 sm:mt-0">
                        <a href="#" className="hover:text-white">FB</a>
                        <a href="#" className="hover:text-white">TW</a>
                        <a href="#" className="hover:text-white">GH</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
