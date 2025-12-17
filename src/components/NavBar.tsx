import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 border-b-[0.5px] border-gray-400 flex items-center justify-center bg-gray-100 z-50">
      <ul className="flex items-center gap-8 text-sm font-medium tracking-widest">
        <li>
          <Link 
            to="/" 
            className={`hover:text-amber-500 transition-colors cursor-pointer ${location.pathname === '/' ? 'text-amber-500' : ''}`}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link 
            to="/projects" 
            className={`hover:text-amber-500 transition-colors cursor-pointer ${location.pathname === '/projects' ? 'text-amber-500' : ''}`}
          >
            PROJECT
          </Link>
        </li>
        {/* <li>
          <Link 
            to="/contact" 
            className={`hover:text-amber-500 transition-colors cursor-pointer ${location.pathname === '/contact' ? 'text-amber-500' : ''}`}
          >
            CONTACT
          </Link>
        </li> */}
      </ul>
    </nav>
  )
}

export default NavBar
