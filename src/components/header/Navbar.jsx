import { Link } from "react-router-dom"

    const navLlinks = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Service",
            path: "/services"
        },
        {
            title: "Contact",
            path: "/contact"
        }
    ]
export default function Navbar() {
  return (
    <div className='bg-white shadow-md'>
      <div className="flex justify-between items-center container mx-auto p-5">
        <div>
            <h3>
                <Link to='/'>
                    Logo
                </Link>
            </h3>
        </div>
        <nav>
            <ul className='flex justify-center'>
                {navLlinks.map((link, index) => (
                <li key={index} className='mr-5'>
                    <Link to={link.path} className='text-blue-500 hover:text-blue-800'>
                    {link.title}
                    </Link>
                </li>
                ))}
            </ul>
        </nav>

      </div>
    </div>
  )
}
