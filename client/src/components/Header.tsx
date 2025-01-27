import { useState, useEffect } from "react"
import { Menu, X, Briefcase, Building, LogIn, UserPlus } from "lucide-react"
import { Link } from "react-router-dom"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-black/80 backdrop-blur-md border-b border-white border-opacity-10"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500">
            <Link to="/" className="transition-opacity">
              JobPortal
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6 items-center">
              <li>
                <Link
                  to="/jobs"
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                >
                  <Briefcase size={18} />
                  <span>Find Jobs</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/companies"
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                >
                  <Building size={18} />
                  <span>Companies</span>
                </Link>
              </li>
              <li>
                <Link
                 to="/login"
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                >
                  <LogIn size={18} />
                  <span>Login</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                >
                  <UserPlus size={18} />
                  <span>Signup</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/post-job"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-4 py-2 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
                >
                  Post a Job
                </Link>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <ul className="px-4 pt-2 pb-4 space-y-4">
            <li>
              <Link
                to="/jobs"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                <Briefcase size={18} />
                <span>Find Jobs</span>
              </Link>
            </li>
            <li>
              <Link
                to="/companies"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                <Building size={18} />
                <span>Companies</span>
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                <LogIn size={18} />
                <span>Login</span>
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                <UserPlus size={18} />
                <span>Sign Up</span>
              </Link>
            </li>
            <li>
              <Link
                to="/post-job"
                className="block bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-4 py-2 rounded-full transition duration-300 transform hover:scale-105 text-center shadow-lg"
                onClick={toggleMenu}
              >
                Post a Job
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header


