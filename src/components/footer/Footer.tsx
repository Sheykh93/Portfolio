import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-2 bg-[#edebeb] dark:bg-[#0c203d] dark:text-white transition-colors py-[10px]">
      {/* Back to Top Icon */}
      <div className="mt-5 text-[#4b5563] hover:text-blue-600 cursor-pointer transition-colors">
        <FontAwesomeIcon icon={faAnglesUp} className="text-2xl" />
      </div>

      {/* Back to Top Link */}
      <div className="mt-[10px] mb-[20px]">
        <a
          href="/"
          className="text-[18px] font-[550] text-[#4b5563] dark:text-white no-underline hover:text-blue-600 transition-colors uppercase"
        >
          Back to Top
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-[28px] mb-[25px]">
        <FaFacebookSquare
          className="text-[32px] cursor-pointer transition-transform hover:scale-125"
          color="#1877F2"
        />
        <FaInstagramSquare
          className="text-[32px] cursor-pointer transition-transform hover:scale-125"
          color="#E4405F"
        />
        <FaLinkedin
          className="text-[32px] cursor-pointer transition-transform hover:scale-125"
          color="#0A66C2"
        />
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-center px-5 max-w-[800px]">
        <p className="text-[16px] font-medium text-center mb-[15px] text-[#4b5563] leading-relaxed dark:text-gray-300">
          I'm looking to join a cross-functional team that values improving
          lives <br className="hidden md:block" />
          through accessible and inclusive design. Have a project in mind or
          just want to chat? Let's connect!
        </p>

        <a
          href="mailto:sheyxovsheyx93@gmail.com"
          className="mb-5 text-[20px] font-semibold text-[#007bff] no-underline hover:text-blue-700 transition-colors"
        >
          sheyxovsheyx93@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
