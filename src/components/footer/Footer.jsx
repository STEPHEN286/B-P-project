import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-4 gap-8">
    <div>
    <h3 className="text-xl font-bold mb-4">FutureTech</h3>
    <p className="text-gray-400">Transforming businesses through AI innovation</p>
    </div>
    <div>
    <h4 className="font-semibold mb-4">Solutions</h4>
    <ul className="space-y-2 text-gray-400">
    <li>Machine Learning</li>
    <li>Natural Language Processing</li>
    <li>Computer Vision</li>
    <li>Data Analytics</li>
    </ul>
    </div>
    <div>
    <h4 className="font-semibold mb-4">Company</h4>
    <ul className="space-y-2 text-gray-400">
    <li>About Us</li>
    <li>Careers</li>
    <li>Blog</li>
    <li>Contact</li>
    </ul>
    </div>
    <div>
    <h4 className="font-semibold mb-4">Connect</h4>
    <div className="flex space-x-4">
    <a href="#" className="text-gray-400 hover:text-white">
    <i className="fab fa-twitter text-xl"></i>
    </a>
    <a href="#" className="text-gray-400 hover:text-white">
    <i className="fab fa-linkedin text-xl"></i>
    </a>
    <a href="#" className="text-gray-400 hover:text-white">
    <i className="fab fa-github text-xl"></i>
    </a>
    </div>
    </div>
    </div>
    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
    <p>&copy; 2025 FutureTech Solutions. All rights reserved.</p>
    </div>
    </div>
    </footer>
  )
}
