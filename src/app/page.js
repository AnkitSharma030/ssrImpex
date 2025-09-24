// src/app/page.
'use client'
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // handle change for all fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
    const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form Submitted:", formData);
    // Here you can send formData to backend or email service
  };


  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>SSSR IMPEX - Your Trusted Partner in Shipping &amp; Logistics</title>
        <meta name="description" content="Efficient, reliable, and cost-effective shipping and logistics solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">SSSR IMPEX</div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-blue-300">Home</a>
            <a href="#about" className="hover:text-blue-300">About Us</a>
            <a href="#services" className="hover:text-blue-300">Services</a>
            <a href="#contact" className="hover:text-blue-300">Contact Us</a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-blue-800 p-4 rounded">
            <div className="flex flex-col space-y-3">
              <a href="#" className="hover:text-blue-300">Home</a>
              <a href="#about" className="hover:text-blue-300">About Us</a>
              <a href="#services" className="hover:text-blue-300">Services</a>
              <a href="#contact" className="hover:text-blue-300">Contact Us</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Trusted Partner in Shipping &amp; Logistics</h1>
          <p className="text-xl mb-8">Efficient, Reliable, and Cost-Effective Solutions</p>
          <a href="#contact" className="bg-white text-blue-800 px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition duration-300">
            Get in Touch
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">About Us</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-blue-100 h-64 w-full rounded-lg flex items-center justify-center">
                <svg className="w-32 h-32 text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Our Story</h3>
              <p className="text-gray-700 mb-4">
                SSSR IMPEX has been a leader in the shipping and logistics industry for over 15 years. 
                We pride ourselves on delivering exceptional service to our clients worldwide.
              </p>
              <p className="text-gray-700">
                Our team of experienced professionals is dedicated to providing tailored solutions 
                that meet the unique needs of each client, ensuring timely and secure delivery of goods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-800 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h4.05a2.5 2.5 0 014.9 0H20a1 1 0 001-1v-3a1 1 0 00-.293-.707l-4-4A1 1 0 0016 5H3a1 1 0 00-1 1zm14.707 3L18 7.707V9h-1.5A1.5 1.5 0 0015 7.5V6h1.707z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Freight Shipping</h3>
              <p className="text-gray-700">
                Comprehensive freight solutions including air, sea, and land transportation with real-time tracking.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-800 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Warehousing</h3>
              <p className="text-gray-700">
                Secure storage solutions with inventory management and distribution services.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-800 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 5.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 10l1.293-1.293zm4 0a1 1 0 010 1.414L11.586 10l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Supply Chain Management</h3>
              <p className="text-gray-700">
                End-to-end supply chain solutions to optimize your logistics operations and reduce costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="mb-6">We&apos;re here to answer any questions you may have about our services.</p>
              <div className="mb-4 flex items-center">
                <svg className="w-5 h-5 mr-3 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Ludhiana</span>
              </div>
              <div className="mb-4 flex items-center">
                <svg className="w-5 h-5 mr-3 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@sssrimpex.com</span>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Name</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} required className="w-full p-2 rounded bg-white text-black font-semibold" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} required className="w-full p-2 rounded bg-white text-black font-semibold" />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">Message</label>
                  <textarea id="message" rows="4" value={formData.message} onChange={handleChange} required className="w-full p-2 rounded bg-white text-black font-semibold"></textarea>
                </div>
                <button type="submit" className="bg-white text-blue-800 px-6 py-2 rounded font-bold hover:bg-blue-100 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} SSSR IMPEX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}