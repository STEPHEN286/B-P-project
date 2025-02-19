
import { Link } from "react-router-dom";


const currentYear = new Date ()
export default function Footer() {

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-2xl font-bold mb-4">B&G Digital</h3>
            <p className="text-gray-400">
              Elevating brands with data-driven marketing strategies.
            </p>
          </div>

         
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>SEO Optimization</li>
              <li>PPC Advertising</li>
              <li>Social Media Marketing</li>
              <li>Content Marketing</li>
            </ul>
          </div>

         
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>

       
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear.getFullYear()} B&G Digital Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
