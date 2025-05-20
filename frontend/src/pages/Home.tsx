import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';




export default function Home() {

  

    const { isAuthenticated } = useAuth();
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-sky-50">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
                        <span className="block">Automate Your</span>
                        <span className="block text-sky-700">Project Presentations</span>
                    </h1>
                    <p className="max-w-lg mx-auto text-xl text-gray-500 mb-8">
                        Transform your code repositories into professional presentations with just a few clicks.
                        No manual effort required.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Link
                            to={isAuthenticated ? "/upload" : "/login"}
                            className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-700 hover:bg-sky-800"
                        >
                            Get Started
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <a
                            href="#how-it-works"
                            className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-sky-700 bg-white hover:bg-gray-50"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* How It Works Section */}
                <div id="how-it-works" className="py-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                            Three simple steps to transform your code into a professional presentation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {/* Step 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg">
                            <div className="flex justify-center">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-600 text-white mb-4">
                                    <span className="text-lg font-bold">1</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Upload Your Code</h3>
                            <p className="text-gray-500 text-center">
                                Share your project via GitHub repository URL or upload a ZIP file directly.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg">
                            <div className="flex justify-center">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-600 text-white mb-4">
                                    <span className="text-lg font-bold">2</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Select Template</h3>
                            <p className="text-gray-500 text-center">
                                Choose from your Google Slides templates to maintain your company's branding.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg">
                            <div className="flex justify-center">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-600 text-white mb-4">
                                    <span className="text-lg font-bold">3</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Get Your Presentation</h3>
                            <p className="text-gray-500 text-center">
                                Download your automatically generated presentation with sequence diagrams and project details.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="py-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900">Key Features</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Automatic Sequence Diagrams</h3>
                            <p className="text-gray-500">
                                Our system analyzes your code to generate UML sequence diagrams for all major features and workflows.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Branding</h3>
                            <p className="text-gray-500">
                                Use your own Google Slides templates to ensure the presentation matches your company's brand guidelines.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Content Generation</h3>
                            <p className="text-gray-500">
                                Automatically extracts project title, problem statement, tech stack overview, and use cases.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Customizable Output</h3>
                            <p className="text-gray-500">
                                Select which sections you want to include in your final presentation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}