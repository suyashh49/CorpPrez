import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { isAuthenticated, logout } = useAuth();

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold text-sky-700">CorpPrez</span>
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden sm:flex sm:items-center">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link
                                to="/"
                                className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/') ? 'text-sky-700 bg-sky-100' : 'text-gray-700 hover:text-sky-700 hover:bg-sky-100'
                                    }`}
                            >
                                Home
                            </Link>

                            {isAuthenticated ? (
                                <>
                                    <Link
                                        to="/upload"
                                        className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/upload') ? 'text-sky-700 bg-sky-100' : 'text-gray-700 hover:text-sky-700 hover:bg-sky-100'
                                            }`}
                                    >
                                        Upload Project
                                    </Link>
                                    <Link
                                        to="/Dashboard"
                                        className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/templates') ? 'text-sky-700 bg-sky-100' : 'text-gray-700 hover:text-sky-700 hover:bg-sky-100'
                                            }`}
                                    >
                                        Dashboard
                                    </Link>
                                    <button
                                        onClick={logout}
                                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-sky-700 hover:bg-sky-100"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <a
                                    href="http://localhost:3000/auth/google"
                                    className="px-3 py-2 rounded-md text-sm font-medium text-white bg-sky-700 hover:bg-sky-900"
                                >
                                    Sign In
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center sm:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-sky-700 hover:bg-sky-100 focus:outline-none"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link
                            to="/"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-sky-700 bg-sky-50' : 'text-gray-700 hover:text-sky-700 hover:bg-sky-50'
                                }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>

                        {isAuthenticated ? (
                            <>
                                <Link
                                    to="/upload"
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/upload') ? 'text-sky-700 bg-sky-50' : 'text-gray-700 hover:text-sky-700 hover:bg-sky-50'
                                        }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Upload Project
                                </Link>
                                <Link
                                    to="/templates"
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/templates') ? 'text-sky-700 bg-sky-50' : 'text-gray-700 hover:text-sky-700 hover:bg-sky-50'
                                        }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Templates
                                </Link>
                                <button
                                    onClick={() => {
                                        logout();
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-700 hover:bg-sky-50"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <a
                            href="http://localhost:3000/auth/google"
                            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-sky-700 hover:bg-sky-700"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Sign In
                          </a>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}