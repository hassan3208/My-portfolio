import { Link } from "react-router-dom";
import { useState } from "react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#11071F] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-black/20 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-6 py-6">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-12">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="relative inline-block text-white font-['Plus_Jakarta_Sans'] font-semibold text-lg tracking-wide transition-all duration-300 hover:text-purple-300 transform hover:scale-110
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-purple-400 after:to-pink-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </button>
          
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative inline-block text-white font-['Plus_Jakarta_Sans'] font-semibold text-lg tracking-wide transition-all duration-300 hover:text-purple-300 transform hover:scale-110
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-purple-400 after:to-pink-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </button>
          
            <button
              onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative inline-block text-white font-['Plus_Jakarta_Sans'] font-semibold text-lg tracking-wide transition-all duration-300 hover:text-purple-300 transform hover:scale-110
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-purple-400 after:to-pink-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Certifications
            </button>
          
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative inline-block text-white font-['Plus_Jakarta_Sans'] font-semibold text-lg tracking-wide transition-all duration-300 hover:text-purple-300 transform hover:scale-110
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-purple-400 after:to-pink-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Projects
            </button>
          
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative inline-block text-white font-['Plus_Jakarta_Sans'] font-semibold text-lg tracking-wide transition-all duration-300 hover:text-purple-300 transform hover:scale-110
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-purple-400 after:to-pink-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact Me
            </button>
          </div>
          



            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-md">
              <div className="flex flex-col space-y-4 p-6">
                <Link
                  to="/"
                  className="relative inline-block text-white font-['Plus_Jakarta_Sans'] font-semibold text-lg tracking-wide hover:text-purple-300 transition-colors
                    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-purple-400 after:to-pink-400 after:transition-all after:duration-300 hover:after:w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="relative inline-block text-left text-white font-['Plus_Jakarta_Sans'] font-semibold text-lg tracking-wide hover:text-purple-300 transition-colors
                    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-purple-400 after:to-pink-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="relative inline-block text-left text-white font-['Plus_Jakarta_Sans'] font-semibold text-lg tracking-wide hover:text-purple-300 transition-colors
                    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-purple-400 after:to-pink-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  About
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="relative inline-block text-left text-white font-['Plus_Jakarta_Sans'] font-semibold text-lg tracking-wide hover:text-purple-300 transition-colors
                    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-purple-400 after:to-pink-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Contact Me
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-96 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-64 w-80 h-80 bg-purple-800/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-32 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Profile Image - Left side */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                {/* Radiating light effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/20 to-purple-600/20 blur-xl scale-150 opacity-0 hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-purple-300/20 blur-2xl scale-125 opacity-0 hover:opacity-100 transition-all duration-700"></div>

                <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 p-1 hover-profile transition-all duration-300">
                  <div className="w-full h-full rounded-full bg-[#11071F] flex items-center justify-center overflow-hidden">
                    <img
                      src="https://i.postimg.cc/g024wR3Z/image.jpg"
                      alt="Hassan Imran - AI Engineer"
                      className="w-full h-full object-cover object-center transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content - Center/Right side */}
            <div className="lg:w-2/3 text-center lg:text-left order-1 lg:order-2">
              {/* Introduction */}
              <div className="mb-6">
                <div className="inline-flex items-center mb-4">
                  <svg className="w-12 h-12 mr-4 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L14.09 8.26L22 8.26L16 12.74L18.18 19L12 15.18L5.82 19L8 12.74L2 8.26L9.91 8.26L12 2Z" />
                  </svg>
                  <p className="text-white font-['Preahvihear'] text-lg tracking-wide">
                    Hello! I Am <span className="text-[#7127BA]">Hassan Imran</span>
                  </p>
                </div>
              </div>

              {/* Main heading */}
              <div className="mb-8">
                <p className="text-white text-lg font-['Preahvihear'] underline mb-4">A Programmer who</p>
                <h1 className="text-4xl lg:text-5xl font-['Preahvihear'] leading-tight mb-4">
                  <span className="text-white">Judges a code</span><br />
                  <span className="text-white">by its </span>
                  <span className="text-[#7127BA]">syntax</span>
                  <span className="text-white">...</span>
                </h1>
                <p className="text-white text-sm font-['Preahvihear'] text-center lg:text-left max-w-md mx-auto lg:mx-0">
                  Because if the syntax does not debug what else you can?
                </p>
              </div>

              {/* AI Engineer title */}
              <h2 className="text-white text-4xl lg:text-5xl font-['Preahvihear'] mb-6">
                I'm a AI Engineer.
              </h2>

              {/* Education */}
              <p className="text-white text-xl font-['Preahvihear'] mb-8 shadow-lg">
                Bachelor in Computer Science CGPA: 3.59
              </p>

              {/* Description */}
              <p className="text-white text-lg font-['Prociono'] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I'm a passionate and driven individual with a strong focus on artificial intelligence,
                machine learning, and AI development. With hands-on experience in building
                intelligent systems and a growing expertise in tools like LangChain, OpenCV, and various
                cloud platforms, I enjoy creating solutions that bridge the gap between technical innovation
                and real-world impact. I continuously explore emerging technologies and thrive in
                problem-solving environments that challenge both my creativity and logic. Alongside my
                technical journey, I'm also committed to improving my communication skills to collaborate
                effectively with global teams and clients. I believe in building accessible, meaningful,
                and user-centered AI experiences that can make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative" id="about">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white text-4xl font-['Preahvihear'] mb-12">About Me</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="text-left">
                <h3 className="text-white text-2xl font-['Poppins'] font-semibold mb-6">My Journey</h3>
                <p className="text-gray-300 text-lg font-['Prociono'] leading-relaxed">
                  I am an aspiring AI developer with a strong foundation in Machine Learning, Deep Learning, and AI-driven solutions, combining hands-on experience with cutting-edge technologies like LangChain, LangGraph, TensorFlow, and Hugging Face. Starting from fundamental studies in statistics, probability, and cloud computing (AWS Academy, Azure AI), I have consistently sought to bridge theory with impactful projects. My portfolio includes building AI agents, RAG applications, and innovative solutions like VISUAR, my final-year AI project aimed at low-cost, accessible eye health testing using computer vision and conversational AI. My freelance work reflects adaptability, from proposal-generation agents to healthcare automation tools. Guided by a drive for excellence, I am now focused on mastering AI Development, improving English communication for global clients, and targeting high-income remote opportunities in the AI industry.
                </p>
              </div>

              <div className="space-y-6">
                <div className="card-gradient rounded-xl p-6 border border-purple-700/30">
                  <h4 className="text-white text-xl font-['Poppins'] font-semibold mb-3">Technical Expertise</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Artificial Intelligence & Machine Learning</li>
                    <li>• Deep Learning & Neural Networks</li>
                    <li>• LangChain, LangGraph & TensorFlow</li>
                    <li>• Cloud Platforms & DevOps</li>
                    <li>• Computer Vision & RAG Applications</li>
                  </ul>
                </div>

                <div className="card-gradient rounded-xl p-6 border border-purple-700/30">
                  <h4 className="text-white text-xl font-['Poppins'] font-semibold mb-3">Soft Skills</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Problem-solving & Critical Thinking</li>
                    <li>• Team Collaboration</li>
                    <li>• Communication & Presentation</li>
                    <li>• Project Management</li>
                    <li>• Continuous Learning</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-gradient rounded-2xl p-8 border border-purple-700/30">
              <h3 className="text-white text-2xl font-['Poppins'] font-semibold mb-6">My Philosophy</h3>
              <p className="text-gray-300 text-lg font-['Prociono'] leading-relaxed">
                I believe technology should be accessible, meaningful, and user-centered. My goal is to bridge the gap between complex AI technologies and practical solutions that make a real difference in people's lives. I'm committed to continuous learning and staying at the forefront of AI innovation while maintaining a focus on ethical and responsible AI development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 relative" id="certifications">
        <div className="container mx-auto px-6">
          <h2 className="text-white text-4xl font-['Preahvihear'] mb-16">Certifications</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
            {/* Data Analysis with Python */}
            <div className="relative group">
              <div className="card-gradient rounded-2xl p-8 shadow-xl border border-purple-700/30 hover:border-purple-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-purple-700 rounded-t-2xl"></div>
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-24 bg-purple-600/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-12 h-12 text-purple-400 group-hover:text-purple-300 group-hover:rotate-12 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.26L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-2xl font-['Poppins'] font-semibold mb-2">
                      Data Analysis with python
                    </h3>
                    <p className="text-white text-xs font-['Poppins'] mb-4">
                      freecodecamp<br />
                      Credential ID: foc43269d90-46ec-4f97-93a4-dd8994d63b1c
                    </p>
                    <a href="https://www.linkedin.com/in/hassan-imran-bb41902ba/details/certifications/">
                      <button className="border border-purple-500 text-white px-6 py-2 rounded-lg text-xs font-['Poppins'] hover:bg-purple-500/20 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                        LEARN MORE
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Introduction to Gen AI */}
            <div className="relative group">
              <div className="card-gradient rounded-2xl p-8 shadow-xl border border-purple-700/30 hover:border-purple-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-purple-700 rounded-t-2xl"></div>
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-24 bg-purple-600/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-12 h-12 text-purple-400 group-hover:text-purple-300 group-hover:rotate-12 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.26L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-2xl font-['Poppins'] font-semibold mb-2">
                      Introduction to Gen AI
                    </h3>
                    <p className="text-white text-xs font-['Poppins'] mb-4">
                      Duke University<br />
                      Credential ID: H295MDNE4PZQ
                    </p>
                    <a href="https://www.linkedin.com/in/hassan-imran-bb41902ba/details/certifications/">
                      <button className="border border-purple-500 text-white px-6 py-2 rounded-lg text-xs font-['Poppins'] hover:bg-purple-500/20 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                        LEARN MORE
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Supervised ML */}
            <div className="relative group">
              <div className="card-gradient rounded-2xl p-8 shadow-xl border border-purple-700/30 hover:border-purple-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-purple-700 rounded-t-2xl"></div>
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-24 bg-purple-600/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-12 h-12 text-purple-400 group-hover:text-purple-300 group-hover:rotate-12 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.26L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-2xl font-['Poppins'] font-semibold mb-2">
                      Supervised ML
                    </h3>
                    <p className="text-white text-xs font-['Poppins'] mb-4">
                      Coursera<br />
                      Credential ID: 293PLPNWZZU
                    </p>
                    <a href="https://www.linkedin.com/in/hassan-imran-bb41902ba/details/certifications/">
                      <button className="border border-purple-500 text-white px-6 py-2 rounded-lg text-xs font-['Poppins'] hover:bg-purple-500/20 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                        LEARN MORE
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* AI For Everyone */}
            <div className="relative group">
              <div className="card-gradient rounded-2xl p-8 shadow-xl border border-purple-700/30 hover:border-purple-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-purple-700 rounded-t-2xl"></div>
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-24 bg-purple-600/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-12 h-12 text-purple-400 group-hover:text-purple-300 group-hover:rotate-12 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.26L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-2xl font-['Poppins'] font-semibold mb-2">
                      AI For Everyone
                    </h3>
                    <p className="text-white text-xs font-['Poppins'] mb-4">
                      DeepLearning.AI<br />
                      Credential ID: 3803806962834
                    </p>
                    <a href="https://www.linkedin.com/in/hassan-imran-bb41902ba/details/certifications/">
                      <button className="border border-purple-500 text-white px-6 py-2 rounded-lg text-xs font-['Poppins'] hover:bg-purple-500/20 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                        LEARN MORE
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Prompt Engineering */}
            <div className="relative group">
              <div className="card-gradient rounded-2xl p-8 shadow-xl border border-purple-700/30 hover:border-purple-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-purple-700 rounded-t-2xl"></div>
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-24 bg-purple-600/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-12 h-12 text-purple-400 group-hover:text-purple-300 group-hover:rotate-12 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.26L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-2xl font-['Poppins'] font-semibold mb-2">
                      Prompt Engineering
                    </h3>
                    <p className="text-white text-xs font-['Poppins'] mb-4">
                      Vanderbilt University<br />
                      Credential ID: 31ZZ69OOD8SSFR
                    </p>
                    <a href="https://www.linkedin.com/in/hassan-imran-bb41902ba/details/certifications/">
                      <button className="border border-purple-500 text-white px-6 py-2 rounded-lg text-xs font-['Poppins'] hover:bg-purple-500/20 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                        LEARN MORE
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* AWS Academy Graduate */}
            <div className="relative group">
              <div className="card-gradient rounded-2xl p-8 shadow-xl border border-purple-700/30 hover:border-purple-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-purple-700 rounded-t-2xl"></div>
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-24 bg-purple-600/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-12 h-12 text-purple-400 group-hover:text-purple-300 group-hover:rotate-12 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.26L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-2xl font-['Poppins'] font-semibold mb-2">
                      AWS Academy Graduate
                    </h3>
                    <p className="text-white text-xs font-['Poppins'] mb-4">
                      AWS web services<br />
                      Credential ID: credly verified
                    </p>
                    <a href="https://www.linkedin.com/in/hassan-imran-bb41902ba/details/certifications/">
                      <button className="border border-purple-500 text-white px-6 py-2 rounded-lg text-xs font-['Poppins'] hover:bg-purple-500/20 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                        LEARN MORE
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white text-lg font-['Preahvihear'] mb-8">
            I'm currently looking to join a <span className="text-purple-400">cross-functional</span> team<br />
            that values improving people's lives through accessible design.
          </p>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
            {/* Python */}
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-yellow-400 rounded-xl hover-tech-icon transition-all duration-300 cursor-pointer flex items-center justify-center group relative" title="Python">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32"><defs><linearGradient id="A" x1="811.527" y1="574.895" x2="665.255" y2="573.732" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#366a96" /><stop offset="1" stopColor="#3679b0" /></linearGradient><linearGradient id="B" x1="862.824" y1="642.176" x2="573.276" y2="642.176" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffc836" /><stop offset="1" stopColor="#ffe873" /></linearGradient></defs><g transform="matrix(.1617 0 0 .158089 -107.53764 -81.66187)"><path d="M716.255 544.487c0-13.623 3.653-21.034 23.822-24.563 13.693-2.4 31.25-2.7 47.627 0 12.935 2.135 23.822 11.77 23.822 24.563v44.945c0 13.182-10.57 23.98-23.822 23.98h-47.627c-16.164 0-29.787 13.782-29.787 29.363v21.564h-16.376c-13.852 0-21.917-9.988-25.305-23.964-4.57-18.776-4.376-29.963 0-47.945 3.794-15.687 15.917-23.964 29.77-23.964h65.52v-6h-47.645v-17.98z" fill="url(#A)" /><path d="M811.527 688.32c0 13.623-11.823 20.523-23.822 23.964-18.052 5.188-32.54 4.394-47.627 0-12.6-3.67-23.822-11.17-23.822-23.964v-44.945c0-12.935 10.782-23.98 23.822-23.98h47.627c15.864 0 29.787-13.71 29.787-29.963v-20.964h17.858c13.87 0 20.4 10.305 23.822 23.964 4.764 18.97 4.976 33.157 0 47.945-4.817 14.364-9.97 23.964-23.822 23.964H763.9v6h47.627v17.98z" fill="url(#B)" /><path d="M728.166 541.505c0-4.976 3.988-9 8.93-9 4.923 0 8.93 4.023 8.93 9 0 4.96-4.006 8.982-8.93 8.982-4.94 0-8.93-4.023-8.93-8.982zm53.59 149.798c0-4.96 4.006-8.982 8.93-8.982 4.94 0 8.93 4.023 8.93 8.982 0 4.976-3.988 9-8.93 9-4.923 0-8.93-4.023-8.93-9z" fill="#fff" /></g></svg>
            </div>

            {/* TensorFlow */}
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl hover-tech-icon transition-all duration-300 cursor-pointer flex items-center justify-center group" title="TensorFlow">
              <svg xmlns="http://www.w3.org/2000/svg" strokeMiterlimit="1.41400003" width="64" height="64" fillRule="evenodd" strokeLinejoin="round"><path d="M27.733 34.453l8.64-5.013 8.533 5.013-8.533 4.907-8.64-4.8zM1.813 19.627L36.373 0 62.08 14.613 53.547 29.44l-17.173-9.813-25.92 14.72z" fill="#f6bd3a" fillRule="nonzero" /><path d="M27.733 54.08v-9.813l8.533-4.907 8.64-4.907v9.813l-8.533 4.907v9.813L27.733 64zm0-19.627l-8.64-4.907-8.64 4.8v-9.813l25.92-14.72V29.44zm25.707-9.92v-4.907l8.64-5.013.107 9.813-8.64 5.013z" fill="#eb8c23" fillRule="nonzero" /><path d="M19.093 58.773V29.547l8.533-4.8.107 9.707 8.64 4.8v9.92l-8.64-4.587V64zM6.08 31.787l-4.267-2.56v-9.6l8.64 4.907v9.813l-4.373-2.56zm30.293-12.16V9.813l17.067 9.813.107 9.813-17.173-9.813z" fill="#e35a2b" fillRule="nonzero" /></svg>
            </div>

            {/* PyTorch */}
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-500 rounded-xl hover-tech-icon transition-all duration-300 cursor-pointer flex items-center justify-center group" title="PyTorch">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><g transform="matrix(2.21262 0 0 2.21262 -39.453867 -1.770085)" fill="#6a1d1dff"><path d="M40.8 9.3l-2.1 2.1c3.5 3.5 3.5 9.2 0 12.7s-9.2 3.5-12.7 0-3.5-9.2 0-12.7l5.6-5.6.7-.8V.8l-8.5 8.5a11.89 11.89 0 0 0 0 16.9 11.89 11.89 0 0 0 16.9 0c4.8-4.7 4.8-12.3.1-16.9z" /><circle r="1.6" cy="7.1" cx="36.6" /></g></svg>
            </div>

            {/* AWS */}
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-400 rounded-xl hover-tech-icon transition-all duration-300 cursor-pointer flex items-center justify-center group" title="AWS">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32" fillRule="evenodd"><path d="M28.312 28.26C25.003 30.7 20.208 32 16.08 32c-5.8 0-11.002-2.14-14.945-5.703-.3-.28-.032-.662.34-.444C5.73 28.33 11 29.82 16.426 29.82a29.73 29.73 0 0 0 11.406-2.332c.56-.238 1.03.367.48.773m1.376-1.575c-.42-.54-2.796-.255-3.86-.13-.325.04-.374-.243-.082-.446 1.9-1.33 4.994-.947 5.356-.5s-.094 3.56-1.87 5.044c-.273.228-.533.107-.4-.196.4-.996 1.294-3.23.87-3.772" fill="#f90" /><path d="M18.43 13.864c0 1.692.043 3.103-.812 4.605-.7 1.22-1.8 1.973-3.005 1.973-1.667 0-2.644-1.27-2.644-3.145 0-3.7 3.316-4.373 6.462-4.373v.94m4.38 10.584c-.287.257-.702.275-1.026.104-1.44-1.197-1.704-1.753-2.492-2.895-2.382 2.43-4.074 3.157-7.158 3.157-3.658 0-6.498-2.254-6.498-6.767 0-3.524 1.905-5.924 4.63-7.097 2.357-1.038 5.65-1.22 8.165-1.5V8.9c0-1.032.08-2.254-.53-3.145-.525-.8-1.54-1.13-2.437-1.13-1.655 0-3.127.85-3.487 2.608-.073.4-.36.776-.757.794L7 7.555c-.354-.08-.75-.366-.647-.9C7.328 1.54 11.945 0 16.074 0c2.113 0 4.874.562 6.54 2.162 2.113 1.973 1.912 4.605 1.912 7.47V16.4c0 2.034.843 2.925 1.637 4.025.275.4.336.86-.018 1.154a184.26 184.26 0 0 0-3.328 2.883l-.006-.012" fill="#221f1f" /><path d="M-29.65 355.868c-35 25.797-85.73 39.56-129.406 39.56-61.243 0-116.377-22.65-158.088-60.325-3.277-2.963-.34-7 3.592-4.693 45.014 26.2 100.673 41.947 158.166 41.947 38.775 0 81.43-8.022 120.65-24.67 5.925-2.517 10.88 3.88 5.086 8.18m14.55-16.647c-4.457-5.715-29.573-2.7-40.846-1.363-3.434.42-3.96-2.57-.865-4.72 20.003-14.078 52.827-10.015 56.655-5.296 3.828 4.745-.996 37.647-19.794 53.35-2.884 2.412-5.637 1.127-4.352-2.07 4.22-10.54 13.685-34.16 9.202-39.902" fill="#f90" /><path d="M-55.16 233.75v-13.685c0-2.07 1.573-3.46 3.46-3.46H9.57c1.966 0 3.54 1.416 3.54 3.46v11.72c-.026 1.966-1.678 4.536-4.614 8.6l-31.75 45.33c11.798-.288 24.25 1.468 34.947 7.498 2.412 1.363 3.067 3.356 3.25 5.322v14.603c0 1.992-2.202 4.326-4.5 3.12-18.85-9.884-43.887-10.96-64.73.105-2.124 1.154-4.352-1.154-4.352-3.146v-13.87c0-2.228.026-6.03 2.255-9.412l36.782-52.748h-32c-1.966 0-3.54-1.4-3.54-3.434m-223.495 85.385h-18.64c-1.783-.13-3.198-1.468-3.33-3.172V220.3c0-1.914 1.6-3.434 3.592-3.434h17.382c1.8.08 3.25 1.468 3.382 3.198v12.505h.34c4.536-12.086 13.056-17.723 24.54-17.723 11.666 0 18.955 5.637 24.198 17.723 4.5-12.086 14.76-17.723 25.745-17.723 7.813 0 16.36 3.225 21.576 10.46 5.9 8.05 4.693 19.74 4.693 29.992l-.026 60.377c0 1.914-1.6 3.46-3.592 3.46h-18.614c-1.86-.13-3.356-1.625-3.356-3.46v-50.703c0-4.037.367-14.105-.524-17.932-1.4-6.423-5.558-8.232-10.96-8.232-4.5 0-9.228 3.015-11.142 7.84s-1.73 12.9-1.73 18.326v50.703c0 1.914-1.6 3.46-3.592 3.46h-18.614c-1.888-.13-3.356-1.625-3.356-3.46l-.026-50.703c0-10.67 1.757-26.374-11.483-26.374-13.397 0-12.872 15.3-12.872 26.374v50.703c0 1.914-1.6 3.46-3.592 3.46m344.496-104.3c27.66 0 42.63 23.752 42.63 53.954 0 29.18-16.543 52.33-42.63 52.33-27.16 0-41.947-23.752-41.947-53.35 0-29.782 14.97-52.932 41.947-52.932m.157 19.532c-13.738 0-14.603 18.72-14.603 30.385 0 11.693-.184 36.65 14.445 36.65 14.445 0 15.127-20.135 15.127-32.404 0-8.075-.34-17.723-2.78-25.378-2.097-6.66-6.266-9.255-12.2-9.255m78.338 84.758H125.8c-1.86-.13-3.356-1.625-3.356-3.46l-.026-95.7c.157-1.757 1.704-3.12 3.592-3.12h17.277c1.625.08 2.962 1.18 3.33 2.674v14.63h.34c5.217-13.082 12.532-19.322 25.404-19.322 8.363 0 16.517 3.015 21.76 11.273 4.876 7.655 4.876 20.528 4.876 29.782v60.22c-.2 1.678-1.757 3.015-3.592 3.015h-18.693c-1.704-.13-3.12-1.4-3.303-3.015v-51.962c0-10.46 1.206-25.77-11.667-25.77-4.535 0-8.704 3.04-10.775 7.655-2.622 5.846-2.962 11.667-2.962 18.116v51.516c-.026 1.914-1.652 3.46-3.644 3.46m66.293-7.594c0-4.824 4.116-8.704 9.176-8.704s9.176 3.88 9.176 8.704c0 4.798-4.116 8.73-9.176 8.73s-9.176-3.933-9.176-8.73m197.5 7.63c-1.94-.08-3.46-1.573-3.46-3.46V220.04c.105-1.704 1.547-3.04 3.33-3.146h6.843c1.888 0 3.408 1.363 3.565 3.146v13.947c4.876-11.064 13.947-19.715 25.404-19.715h1.4c12.165 0 21.052 8.966 24.355 21.996 5.165-12.872 14.865-21.996 27.66-21.996h1.416c9.045 0 17.75 5.82 22.258 14.68 4.352 8.468 4.195 19.74 4.195 29.206l-.026 57.546c.026 1.835-1.468 3.33-3.33 3.46h-8.18c-1.783-.08-3.225-1.337-3.46-3v-58.018c0-6.843.34-14.105-2.438-20.344-2.83-6.37-8.258-10.356-14.078-10.644-6.502.315-12.48 5.06-16.36 11.457-5.034 8.258-4.85 15.704-4.85 25.352v55.134c0 1.835-1.494 3.33-3.356 3.46h-8.153M352 321.157c-26.453 0-38.303-26.977-38.303-53.954 0-28.367 13.92-52.932 40.557-52.932h1.416c25.902 0 38.8 26.164 38.8 53.142 0 28.576-14.288 53.745-41.082 53.745h-1.4m1.94-13.082c8.704-.288 15.573-5.7 19.636-14.68 3.644-8.075 4.352-17.33 4.352-26.2 0-9.648-1.05-19.715-5.584-27.973-4.064-7.2-11.037-11.798-18.43-12.06-8.232.288-15.6 5.873-19.296 14.472-3.33 7.446-4.352 17.33-4.352 25.56 0 9.255 1.206 19.95 5.034 28 3.723 7.63 10.88 12.584 18.64 12.872m-84.6-.422c11.876-.367 18.116-9.884 20.685-22.206.524-1.547 1.704-2.727 3.434-2.727l7.84-.026c1.86.08 3.565 1.494 3.408 3.225-3.618 21-16.28 35.235-34.318 35.235h-1.416c-26.27 0-37.595-26.374-37.595-53.142 0-26.558 11.483-53.745 37.752-53.745h1.416c18.247 0 31.25 14.052 34.082 35.052 0 1.573-1.468 2.936-3.198 3.12l-8.206-.105c-1.73-.236-2.858-1.704-3.12-3.356-1.966-11.72-8.704-21.052-19.925-21.42-17.854.577-22.94 22.546-22.94 39.456 0 16.28 4.247 40.06 22.1 40.636M-104 273.442c0 7.262.184 13.318-3.487 19.767-2.963 5.243-7.682 8.468-12.9 8.468-7.157 0-11.352-5.453-11.352-13.502 0-15.887 14.236-18.77 27.737-18.77v4.037m18.797 45.434c-1.232 1.1-3.015 1.18-4.404.446-6.187-5.14-7.315-7.524-10.696-12.427-10.225 10.434-17.487 13.554-30.726 13.554-15.704 0-27.895-9.674-27.895-29.048 0-15.127 8.18-25.43 19.872-30.464 10.12-4.457 24.25-5.243 35.052-6.476v-2.412c0-4.43.34-9.674-2.28-13.502-2.255-3.434-6.607-4.85-10.46-4.85-7.105 0-13.423 3.644-14.97 11.195-.315 1.678-1.547 3.33-3.25 3.408l-18.063-1.94c-1.52-.34-3.225-1.573-2.78-3.906 4.142-21.917 23.962-28.524 41.685-28.524 9.07 0 20.92 2.412 28.078 9.28 9.07 8.468 8.206 19.767 8.206 32.063v29.048c0 8.73 3.618 12.558 7.026 17.277 1.18 1.678 1.442 3.697-.08 4.955-3.8 3.172-10.565 9.07-14.288 12.374l-.026-.053m-263.164-45.432c0 7.262.183 13.318-3.487 19.767-2.963 5.243-7.655 8.468-12.9 8.468-7.157 0-11.326-5.453-11.326-13.502 0-15.887 14.236-18.77 27.7-18.77v4.037m18.797 45.434c-1.232 1.1-3.015 1.18-4.404.446-6.187-5.14-7.288-7.524-10.696-12.427-10.225 10.434-17.46 13.554-30.726 13.554-15.678 0-27.895-9.674-27.895-29.048 0-15.127 8.206-25.43 19.872-30.464 10.12-4.457 24.25-5.243 35.052-6.476v-2.412c0-4.43.34-9.674-2.255-13.502-2.28-3.434-6.633-4.85-10.46-4.85-7.105 0-13.45 3.644-14.996 11.195-.315 1.678-1.547 3.33-3.225 3.408l-18.1-1.94c-1.52-.34-3.198-1.573-2.78-3.906 4.168-21.917 23.962-28.524 41.685-28.524 9.07 0 20.92 2.412 28.078 9.28 9.07 8.468 8.206 19.767 8.206 32.063v29.048c0 8.73 3.618 12.558 7.026 17.277 1.206 1.678 1.468 3.697-.052 4.955-3.8 3.172-10.565 9.07-14.288 12.374l-.052-.053" fill="#221f1f" /></svg>
            </div>

            {/* Pandas */}
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl hover-tech-icon transition-all duration-300 cursor-pointer flex items-center justify-center group" title="Pandas">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#130754" d="M79.69 5.193v59.79h8.663V5.192H79.69zM52.438 9.875v17.988H61.1V9.875h-8.662zM38.52 24.664v59.791h8.663V24.664h-8.662zm27.546.024v17.986h8.662V24.688h-8.662zm-13.63 8.427v8.487H61.1v-8.487h-8.662zm0 13.707V64.81H61.1V46.823h-8.662zm13.63 1.102v8.486h8.662v-8.486h-8.662zm0 13.74V79.65h8.662V61.664h-8.662zm15.988 27.732v9.544c-1.556-1.977-4.038-2.987-6.475-2.987-4.925 0-8.54 4.119-8.54 9.584s3.622 9.586 8.54 9.586c2.566 0 5.256-1.176 6.768-3.404l.17 2.902h4.414V89.397h-4.877zm38.843 6.512c-4.919 0-7.148 2.7-7.148 5.549-.002 2.565 1.597 4.919 6.05 5.887 2.483.588 3.87 1.05 3.87 2.351 0 1.515-1.346 2.104-3.28 2.104-2.69 0-4.918-1.137-6.39-2.02l-.797 3.375a14.272 14.272 0 0 0 7.274 2.059c4.664 0 7.523-2.394 7.523-6.295 0-2.44-1.934-4.667-6.725-5.676-1.933-.462-3.197-1.01-3.197-2.228 0-1.094.97-1.766 2.945-1.766a10.564 10.564 0 0 1 5.254 1.516l.79-3.215c-.58-.335-3.183-1.64-6.169-1.64zm-109.543.03c-2.564-.004-5.255 1.174-6.769 3.402l-.172-2.889H0v26.356h4.879v-10.678c1.556 1.977 4.035 2.986 6.474 2.986 4.917.003 8.546-4.123 8.546-9.59s-3.627-9.587-8.544-9.587zm19.995.011c-4.927-.003-8.541 4.12-8.541 9.584 0 5.465 3.622 9.586 8.54 9.586 2.563 0 5.255-1.177 6.768-3.404l.168 2.898 4.414.002V96.453h-4.414l-.168 2.9c-1.513-2.218-4.206-3.404-6.767-3.404zm26.658.002c-2.774 0-5.506 1.554-6.727 3.867l-.209-3.365h-4.469v18.153h4.876v-10.131c.002-2.523 2.525-4.623 4.836-4.623 2.226 0 3.447 1.177 3.447 4.709v10.058h4.89v-10.805c0-4.498-1.811-7.863-6.644-7.863zm40.312.008c-4.925-.002-8.543 4.119-8.543 9.584 0 5.464 3.624 9.584 8.543 9.584 2.563.002 5.254-1.176 6.768-3.404l.168 2.9h4.426v-18.16h-4.426l-.168 2.9c-1.514-2.218-4.205-3.404-6.768-3.404zM9.842 99.561c2.857 0 5.164 2.226 5.164 5.968S12.699 111.5 9.84 111.5c-2.86 0-5.17-2.229-5.17-5.97s2.324-5.97 5.172-5.97zm23.021 0c2.86.014 5.17 2.233 5.17 5.972 0 3.74-2.31 5.969-5.17 5.969s-5.17-2.229-5.17-5.97c0-3.743 2.322-5.971 5.17-5.971zm44.235.015c2.857 0 5.168 2.229 5.168 5.97 0 3.743-2.31 5.972-5.17 5.972-2.86-.004-5.17-2.23-5.17-5.971 0-3.742 2.312-5.97 5.172-5.97zm22.736 0c2.86 0 5.17 2.229 5.17 5.97 0 3.743-2.311 5.972-5.17 5.972s-5.17-2.23-5.17-5.971c0-3.742 2.311-5.97 5.17-5.97z" /></svg>
            </div>

            {/* Langchain */}
            <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-cyan-500 rounded-xl hover-tech-icon transition-all duration-300 cursor-pointer flex items-center justify-center group" title="NumPy">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LangChain</title><path d="M6.0988 5.9175C2.7359 5.9175 0 8.6462 0 12s2.736 6.0825 6.0988 6.0825h11.8024C21.2641 18.0825 24 15.3538 24 12s-2.736-6.0825-6.0988-6.0825ZM5.9774 7.851c.493.0124 1.02.2496 1.273.6228.3673.4592.4778 1.0668.8944 1.4932.5604.6118 1.199 1.1505 1.7161 1.802.4892.5954.8386 1.2937 1.1436 1.9975.1244.2335.1257.5202.31.7197.0908.1204.5346.4483.4383.5645.0555.1204.4702.286.3263.4027-.1944.04-.4129.0476-.5616-.1074-.0549.126-.183.0596-.2819.0432a4 4 0 0 0-.025.0736c-.3288.0219-.5754-.3126-.732-.565-.3111-.168-.6642-.2702-.982-.446-.0182.2895.0452.6485-.231.8353-.014.5565.8436.0656.9222.4804-.061.0067-.1286-.0095-.1774.0373-.2239.2172-.4805-.1645-.7385-.007-.3464.174-.3808.3161-.8096.352-.0237-.0359-.0143-.0592.0059-.0811.1207-.1399.1295-.3046.3356-.3643-.2122-.0334-.3899.0833-.5686.1757-.2323.095-.2304-.2141-.5878.0164-.0396-.0322-.0208-.0615.0018-.0864.0908-.1107.2102-.127.345-.1208-.663-.3686-.9751.4507-1.2813.0432-.092.0243-.1265.1068-.1845.1652-.05-.0548-.0123-.1212-.0099-.1857-.0598-.028-.1356-.041-.1179-.1366-.1171-.0395-.1988.0295-.286.0952-.0787-.0608.0532-.1492.0776-.2125.0702-.1216.23-.025.3111-.1126.2306-.1308.552.0814.8155.0455.203.0255.4544-.1825.3526-.39-.2171-.2767-.179-.6386-.1839-.9695-.0268-.1929-.491-.4382-.6252-.6462-.1659-.1873-.295-.4047-.4243-.6182-.4666-.9008-.3198-2.0584-.9077-2.8947-.266.1466-.6125.0774-.8418-.119-.1238.1125-.1292.2598-.139.4161-.297-.2962-.2593-.8559-.022-1.1855.0969-.1302.2127-.2373.342-.3316.0292-.0213.0391-.0419.0385-.0747.1174-.5267.5764-.7391 1.0694-.7267m12.4071.46c.5575 0 1.0806.2159 1.474.6082s.61.9145.61 1.4704c0 .556-.2167 1.078-.61 1.4698v.0006l-.902.8995a2.08 2.08 0 0 1-.8597.5166l-.0164.0047-.0058.0164a2.05 2.05 0 0 1-.474.7308l-.9018.8995c-.3934.3924-.917.6083-1.4745.6083s-1.0806-.216-1.474-.6083c-.813-.8107-.813-2.1294 0-2.9402l.9019-.8995a2.056 2.056 0 0 1 .858-.5143l.017-.0053.0058-.0158a2.07 2.07 0 0 1 .4752-.7337l.9018-.8995c.3934-.3924.9171-.6083 1.4745-.6083zm0 .8965a1.18 1.18 0 0 0-.8388.3462l-.9018.8995a1.181 1.181 0 0 0-.3427.9252l.0053.0572c.0323.2652.149.5044.3374.6917.13.1296.2733.2114.4471.2686a.9.9 0 0 1 .014.1582.884.884 0 0 1-.2609.6304l-.0554.0554c-.3013-.1028-.5525-.253-.7794-.4792a2.06 2.06 0 0 1-.5761-1.0968l-.0099-.0578-.0461.0368a1.1 1.1 0 0 0-.0876.0794l-.9024.8995c-.4623.461-.4623 1.212 0 1.673.2311.2305.535.346.8394.3461.3043 0 .6077-.1156.8388-.3462l.9019-.8995c.4623-.461.4623-1.2113 0-1.673a1.17 1.17 0 0 0-.4367-.2749 1 1 0 0 1-.014-.1611c0-.2591.1023-.505.2901-.6923.3019.1028.57.2694.7962.495.3007.2999.4994.679.5756 1.0968l.0105.0578.0455-.0373a1.1 1.1 0 0 0 .0887-.0794l.902-.8996c.4622-.461.4628-1.2124 0-1.6735a1.18 1.18 0 0 0-.8395-.3462Zm-9.973 5.1567-.0006.0006c-.0793.3078-.1048.8318-.506.847-.033.1776.1228.2445.2655.1874.141-.0645.2081.0508.2557.1657.2177.0317.5394-.0725.5516-.3298-.325-.1867-.4253-.5418-.5662-.8709" /></svg>
            </div>

            {/* Jupyter */}
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-gray-600 rounded-xl hover-tech-icon transition-all duration-300 cursor-pointer flex items-center justify-center group" title="Jupyter">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64" height="64"><g transform="matrix(1.280134 0 0 1.280134 -2089.590391 -2679.717298)"><use xlinkHref="#A" fill="#767677" x="1669.3" y="2093.31" /><g fill="#f37726"><use xlinkHref="#B" x="1639.74" y="2123.98" /><use xlinkHref="#C" x="1639.73" y="2097.48" /></g><use xlinkHref="#D" fill="#989798" x="1639.8" y="2135.81" /><use xlinkHref="#E" fill="#6f7070" x="1638.36" y="2098.06" /></g><defs><path id="A" d="M5.894 2.844c.025.588-.123 1.17-.425 1.672s-.746.904-1.275 1.152-1.12.333-1.695.243a2.94 2.94 0 0 1-1.543-.748 2.98 2.98 0 0 1-.871-1.486c-.138-.57-.105-1.17.095-1.724A2.97 2.97 0 0 1 1.208.574 2.93 2.93 0 0 1 2.823.003c.78-.033 1.542.247 2.118.78s.918 1.274.952 2.06z" /><path id="B" d="M18.265 7.134C10.415 7.134 3.56 4.258 0 0c1.325 3.82 3.796 7.13 7.07 9.473s7.187 3.6 11.2 3.6 7.927-1.258 11.2-3.6S35.213 3.82 36.538 0C32.97 4.258 26.115 7.134 18.265 7.134z" /><path id="C" d="M18.273 5.94c7.85 0 14.706 2.877 18.265 7.134-1.325-3.82-3.796-7.13-7.07-9.473S22.282 0 18.27 0s-7.927 1.258-11.2 3.6S1.325 9.253 0 13.073C3.567 8.825 10.423 5.94 18.273 5.94z" /><path id="D" d="M7.428 3.583a3.77 3.77 0 0 1-.536 2.109c-.382.634-.94 1.14-1.608 1.452s-1.4.42-2.137.306-1.404-.442-1.945-.944S.28 5.353.105 4.632a3.78 3.78 0 0 1 .122-2.173c.253-.696.705-1.3 1.3-1.74S2.83.033 3.564.003c.983-.04 1.94.314 2.666.985a3.76 3.76 0 0 1 1.198 2.596z" /><path id="E" d="M2.275 4.396c-.43.02-.858-.092-1.227-.318S.385 3.52.203 3.127-.04 2.292.026 1.862.283 1.03.575.71s.672-.546 1.09-.65.86-.078 1.265.072.757.417 1.01.77a2.21 2.21 0 0 1-.156 2.784c-.39.43-.934.684-1.51.71z" /></defs></svg>
            </div>

            {/* Git */}
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-500 rounded-xl hover-tech-icon transition-all duration-300 cursor-pointer flex items-center justify-center group" title="Git">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32"><path d="M31.396 14.575L17.425.604a2.06 2.06 0 0 0-2.914 0l-2.9 2.9 3.68 3.68c.856-.3 1.836-.095 2.518.587a2.45 2.45 0 0 1 .581 2.533l3.547 3.547c.858-.296 1.848-.105 2.533.582a2.45 2.45 0 1 1-3.469 3.468c-.72-.72-.898-1.78-.534-2.667l-3.308-3.308v8.705a2.5 2.5 0 0 1 .65.464 2.45 2.45 0 1 1-3.468 3.468 2.45 2.45 0 0 1 0-3.468c.237-.236.5-.415.803-.535v-8.786c-.292-.12-.566-.297-.803-.535a2.45 2.45 0 0 1-.528-2.681l-3.63-3.628-9.58 9.57a2.06 2.06 0 0 0 0 2.915l13.972 13.97a2.06 2.06 0 0 0 2.914 0L31.396 17.5a2.06 2.06 0 0 0 0-2.915" fill="#491a16ff" /></svg>
            </div>
          </div>

          {/* 3D Visual Element */}
          <div className="relative">
            <div className="w-96 h-96 mx-auto bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center transform rotate-12 shadow-2xl hover:rotate-45 hover:scale-110 transition-all duration-500 cursor-pointer">
                <span className="text-white font-bold text-4xl transform -rotate-12">H</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 relative" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="text-white text-4xl font-['Preahvihear'] mb-16">Projects</h2>
          <div className="space-y-32">
            {/* Project 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-purple-700/30">
                  <p className="text-purple-400 text-lg font-['Poppins'] font-semibold mb-2">Featured Project</p>
                  <h3 className="text-white text-4xl font-['Poppins'] font-semibold mb-6">Proposal Writer AI Agent</h3>
                  <p className="text-gray-300 text-lg font-['Poppins'] leading-relaxed">
                    An AI-powered proposal generation tool that converts client requirements into professional business proposals using a multi-agent workflow. Built with LangChain, LangGraph, and Streamlit, it automates scope writing, budget & timeline estimation, and PDF generation, leveraging the Google Gemini API for high-quality outputs.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-700 rounded-2xl h-80 flex items-center justify-center">
                  <a href="https://github.com/hassan3208/Proposal-writing-AI-Agent">
                    <img
                      src="https://i.postimg.cc/7LQ6D8x2/Screenshot-2025-08-12-150933.png"
                      alt="Project Screenshot"
                      className="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-purple-700/30">
                  <div className="flex items-center justify-end mb-4">
                    <div className="flex space-x-4">
                      <svg className="w-8 h-8 text-white cursor-pointer hover:text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.26L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z" />
                      </svg>
                      <svg className="w-8 h-8 text-white cursor-pointer hover:text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.26L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-purple-400 text-lg font-['Poppins'] font-semibold mb-2 text-right">Featured Project</p>
                  <h3 className="text-white text-4xl font-['Poppins'] font-semibold mb-6 text-right">Happy Bot</h3>
                  <p className="text-gray-300 text-lg font-['Poppins'] leading-relaxed text-right">
                    An AI chatbot built with Retrieval-Augmented Generation (RAG) using DeepSeek LLM and LangChain. It retrieves context from uploaded documents or web URLs and generates intelligent answers, with adjustable temperature settings for response creativity.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-700 rounded-2xl h-80 flex items-center justify-center">
                  <a href="https://github.com/hassan3208/HappyBot">
                    <img
                      src="https://i.postimg.cc/RZrm9C5f/image.png"
                      alt="Project Screenshot"
                      className="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40"
                    />
                  </a>
                </div>
              </div>
            </div>


            {/* Project 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-purple-700/30">
                  <p className="text-purple-400 text-lg font-['Poppins'] font-semibold mb-2">Featured Project</p>
                  <h3 className="text-white text-4xl font-['Poppins'] font-semibold mb-6">LinkedIn Job Searcher</h3>
                  <p className="text-gray-300 text-lg font-['Poppins'] leading-relaxed">
                    A Python-based web scraper that fetches job listings from LinkedIn based on a search term. Built using BeautifulSoup, it enables quick job data extraction, with customizable ChromeDriver paths for flexible deployment.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-700 rounded-2xl h-80 flex items-center justify-center">
                  <a href="https://github.com/hassan3208/linkdin">
                    <img
                      src="https://i.postimg.cc/c4J7ZYGg/image.png"
                      alt="Project Screenshot"
                      className="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-purple-700/30">
                  <div className="flex items-center justify-end mb-4">
                    <div className="flex space-x-4">
                      <svg className="w-8 h-8 text-white cursor-pointer hover:text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.26L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z" />
                      </svg>
                      <svg className="w-8 h-8 text-white cursor-pointer hover:text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.26L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-purple-400 text-lg font-['Poppins'] font-semibold mb-2 text-right">Featured Project</p>
                  <h3 className="text-white text-4xl font-['Poppins'] font-semibold mb-6 text-right">Student Dropout Model</h3>
                  <p className="text-gray-300 text-lg font-['Poppins'] leading-relaxed text-right">
                    A machine learning model to predict student dropout risk using algorithms like KNN and SVM, implemented in Python with Pandas for preprocessing and analysis.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-700 rounded-2xl h-80 flex items-center justify-center">
                  <a href="https://github.com/hassan3208/Student_dropout_model">
                    <img
                      src="https://i.postimg.cc/mZKMxnjq/image.png"
                      alt="Project Screenshot"
                      className="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40"
                    />
                  </a>
                </div>
              </div>
            </div>


            {/* Project 5 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-purple-700/30">
                  <p className="text-purple-400 text-lg font-['Poppins'] font-semibold mb-2">Featured Project</p>
                  <h3 className="text-white text-4xl font-['Poppins'] font-semibold mb-6">Temu Clone (Android App)</h3>
                  <p className="text-gray-300 text-lg font-['Poppins'] leading-relaxed">
                    A mobile app built in Android Studio replicating Temu’s UI and core features, including authentication, interactive elements, mock data integration, and custom animations, optimized for multiple screen sizes.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-700 rounded-2xl h-80 flex items-center justify-center">
                  <a href="https://github.com/hassan3208/Temu_clone">
                    <img
                      src="https://i.postimg.cc/Vvmx5gWc/image.png"
                      alt="Project Screenshot"
                      className="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-purple-700/30">
                  <div className="flex items-center justify-end mb-4">
                    <div className="flex space-x-4">
                      <svg className="w-8 h-8 text-white cursor-pointer hover:text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.26L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z" />
                      </svg>
                      <svg className="w-8 h-8 text-white cursor-pointer hover:text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.26L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-purple-400 text-lg font-['Poppins'] font-semibold mb-2 text-right">Featured Project</p>
                  <h3 className="text-white text-4xl font-['Poppins'] font-semibold mb-6 text-right">YouTube Bot</h3>
                  <p className="text-gray-300 text-lg font-['Poppins'] leading-relaxed text-right">
                    An AI chatbot built with Retrieval-Augmented Generation (RAG) using DeepSeek LLM and LangChain. It retrieves context from uploaded documents or web URLs and generates intelligent answers, with adjustable temperature settings for response creativity.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-700 rounded-2xl h-80 flex items-center justify-center">
                  <a href="https://github.com/hassan3208/YouTube-Bot">
                    <img
                      src="https://i.postimg.cc/0QWYJ2p2/image.png"
                      alt="Project Screenshot"
                      className="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40"
                    />
                  </a>
                </div>
              </div>
            </div>


            {/* Project 7 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-purple-700/30">
                  <p className="text-purple-400 text-lg font-['Poppins'] font-semibold mb-2">Featured Project</p>
                  <h3 className="text-white text-4xl font-['Poppins'] font-semibold mb-6">Movie Recommendation System</h3>
                  <p className="text-gray-300 text-lg font-['Poppins'] leading-relaxed">
                    A Python-based recommendation engine that suggests movies using collaborative and content-based filtering techniques, powered by Pandas, Scikit-learn, and Streamlit with datasets like MovieLens.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-700 rounded-2xl h-80 flex items-center justify-center">
                  <a href="https://github.com/hassan3208/Movie-recomended-system">
                    <img
                      src="https://i.postimg.cc/SK58ytqJ/image.png"
                      alt="Project Screenshot"
                      className="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40"
                    />
                  </a>
                </div>
              </div>
            </div>




            {/* Project 8 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-purple-700/30">
                  <div className="flex items-center justify-end mb-4">
                    <div className="flex space-x-4">
                      <svg className="w-8 h-8 text-white cursor-pointer hover:text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.26L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z" />
                      </svg>
                      <svg className="w-8 h-8 text-white cursor-pointer hover:text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.26L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-purple-400 text-lg font-['Poppins'] font-semibold mb-2 text-right">Featured Project</p>
                  <h3 className="text-white text-4xl font-['Poppins'] font-semibold mb-6 text-right">Dietitian AI Agent</h3>
                  <p className="text-gray-300 text-lg font-['Poppins'] leading-relaxed text-right">
                    An AI-powered application that generates a personalized diet plan based on user input such as age, health goals, and dietary preferences. Built with LangGraph and LangChain, it creates a professional PDF diet plan ready to share with clients.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-700 rounded-2xl h-80 flex items-center justify-center">
                  <a href="https://github.com/hassan3208/Dietetian-agent">
                    <img
                      src="https://instant-purple-gsicwfjiza.edgeone.app/Screenshot%202025-09-24%20173351.png"
                      alt="Dietitian AI Agent Screenshot"
                      className="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40"
                    />
                  </a>
                </div>
              </div>
            </div>







            {/* Project 9 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-purple-700/30">
                  <p className="text-purple-400 text-lg font-['Poppins'] font-semibold mb-2">Featured Project</p>
                  <h3 className="text-white text-4xl font-['Poppins'] font-semibold mb-6">Rangista – Clothing E-Commerce Store</h3>
                  <p className="text-gray-300 text-lg font-['Poppins'] leading-relaxed">
                    Built a professional e-commerce website for my professional client using React, FastAPI, PostgreSQL, and Supabase with JWT authentication. The platform supports product listings, user accounts, and secure order management.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-700 rounded-2xl h-80 flex items-center justify-center">
                  <a href="https://rangistawebsite.vercel.app/">
                    <img
                      src="https://i.postimg.cc/XNKnTTtc/Screenshot-2025-11-04-110727.png"
                      alt="Project Screenshot"
                      className="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40"
                    />
                  </a>
                </div>
              </div>
            </div>



            


          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-white text-3xl font-['Preahvihear'] mb-8">Contact</h2>
          <div className="max-w-2xl">
            <p className="text-white text-lg font-['Preahvihear'] leading-relaxed mb-8">
              I'm currently looking to join a cross-functional team that values improving people's lives<br />
              through accessible product. or have a project in mind? Let's connect.<br /><br />
              itsmywork1019@gmail.com
            </p>

            {/* Social Icons */}
            <div className="flex space-x-6">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/hassan-imran-bb41902ba/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white hover:text-blue-500 transition-colors"
                  fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452H17.2V14.85c0-1.336-.027-3.059-1.865-3.059-1.868 0-2.154 1.46-2.154 2.966v5.695H9.001V9h3.112v1.561h.044c.433-.82 1.492-1.687 3.07-1.687 3.284 0 3.89 2.164 3.89 4.978v6.6zM5.337 7.433a1.804 1.804 0 11-.002-3.608 1.804 1.804 0 01.002 3.608zM6.754 20.452H3.921V9h2.833v11.452z" />
                </svg>
              </a>

              {/* GitHub */}
              <a href="https://github.com/hassan3208" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white hover:text-gray-400 transition-colors"
                  fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                  0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 
                  1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.305.762-1.605-2.665-.305-5.466-1.335-5.466-5.93 
                  0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.48 11.48 0 013.003-.404c1.018.005 
                  2.042.138 3.003.404 2.293-1.552 3.3-1.23 3.3-1.23.654 1.652.242 2.873.119 3.176.77.84 
                  1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 
                  0 1.604-.015 2.896-.015 3.286 0 .322.218.694.825.576C20.565 22.092 
                  24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>

              {/* Browser / Website */}
              <a href="https://hassan-portfolio-1019.vercel.app/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white hover:text-green-400 transition-colors"
                  fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 
                         10-4.477 10-10S17.523 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 
                         0-.62.08-1.22.21-1.8L9 15v1c0 1.1.9 2 2 2v1.93zM12 
                         20c-1.1 0-2-.9-2-2v-1h2v3zm0-5h-2v-2h2v2zm0-4h-2V9h2v2zm7.79 
                         1.93c-.12.58-.21 1.18-.21 1.8 0 4.08-3.05 7.44-7 
                         7.93V18c1.1 0 2-.9 2-2v-1l6.79-4.07z"/>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
