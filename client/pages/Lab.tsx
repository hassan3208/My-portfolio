import { Link } from "react-router-dom";

export default function Lab() {
  return (
    <div className="min-h-screen bg-[#11071F] text-white">
      {/* Header */}
      <header className="relative z-50 w-full bg-black/20 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-6 py-6">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              <Link 
                to="/" 
                className="text-white font-['Plus_Jakarta_Sans'] font-semibold text-lg tracking-wide hover:text-purple-400 transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-white font-['Plus_Jakarta_Sans'] font-semibold text-lg tracking-wide hover:text-purple-400 transition-colors"
              >
                About
              </Link>
              <Link 
                to="/lab" 
                className="text-purple-400 font-['Plus_Jakarta_Sans'] font-semibold text-lg tracking-wide"
              >
                Lab
              </Link>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-['Preahvihear'] mb-8">Lab Page</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is coming soon. Continue prompting to fill in this page content.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
