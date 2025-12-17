import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function SideBar() {
  return (
    <div className="border-r-[0.5px] border-gray-400 w-20 fixed bg-gray-100 h-screen flex flex-col items-center justify-between py-20">
      <div className="flex items-center justify-center h-32">
        <p className="-rotate-90 whitespace-nowrap text-sm font-semibold tracking-wider text-gray-700">
          HOMEPAGE
        </p>
      </div>

      {/* Social Media Icons (Bottom) */}
      <div className="flex flex-col items-center space-y-6">
        <a
          href="#"
          aria-label="Instagram"
          className="text-gray-600 hover:text-[#ff9900] transition duration-200"
        >
          <FaInstagram size={22} />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="text-gray-600 hover:text-[#ff9900] transition duration-200"
        >
          <FaTwitter size={22} />
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="text-gray-600 hover:text-[#ff9900] transition duration-200"
        >
          <FaLinkedin size={22} />
        </a>
      </div>
    </div>
  );
}

export default SideBar;
