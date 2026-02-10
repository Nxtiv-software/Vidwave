import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebook, FaYoutube } from "react-icons/fa";

function SideBar({children}) {
  return (
    <div className="hidden md:flex border-r-[0.5px] border-gray-400 w-20 fixed bg-gray-100 h-screen flex-col items-center justify-between pb-30">
      <div className="flex items-center justify-center h-32">
        <p className="-rotate-90 whitespace-nowrap text-sm font-semibold tracking-wider text-gray-700">
          {children}
        </p>
      </div>

      {/* Social Media Icons (Bottom) */}
      <div className="flex flex-col items-center space-y-6 mb-8">
        <a
          href="https://api.whatsapp.com/send/?phone=94717684195&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-gray-600 hover:text-[#ff9900] transition duration-200"
        >
          <FaWhatsapp size={22} />
        </a>
        <a
          href="https://www.instagram.com/vidwaveproductions/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-gray-600 hover:text-[#ff9900] transition duration-200"
        >
          <FaInstagram size={22} />
        </a>
        <a
          href="https://www.tiktok.com/@vidwaveproductions/video/7134318444614405402?is_from_webapp=1&sender_device=pc&web_id=7175232351218451969"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="text-gray-600 hover:text-[#ff9900] transition duration-200"
        >
          <FaTiktok size={22} />
        </a>
        <a
          href="https://www.facebook.com/VIDWAVEPRODUCTIONS/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-gray-600 hover:text-[#ff9900] transition duration-200"
        >
          <FaFacebook size={22} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCjJixo3s_ND7XtOX6ohvmjw"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="text-gray-600 hover:text-[#ff9900] transition duration-200"
        >
          <FaYoutube size={22} />
        </a>
      </div>
    </div>
  );
}

export default SideBar;
