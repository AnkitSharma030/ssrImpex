'use client'


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-zinc-900 to-zinc-600 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row   md:justify-between justify-start items-center">
        {/* Left Side */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">SSSR IMPEX</h2>
          <p className="text-sm text-gray-300">
            Efficient, Reliable, and Cost-Effective Solutions
          </p>
        </div>

        {/* Center Links */}
        <div className="flex flex-col space-y-6 text-lg p-8">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About Us</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Contact Us</a>
        </div>

        {/* Right Side */}
        <div className="text-sm text-gray-300 mt-4 md:mt-0">
          © {new Date().getFullYear()} SSSR IMPEX. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
