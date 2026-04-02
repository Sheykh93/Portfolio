import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const SocialLinks = () => {
  return (
    <div className="social-container">
      {/* Facebook Linki */}
      <a
        href="https://www.facebook.com/seyx.seyixov/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={30} color="#1877F2" />
      </a>

      {/* Instagram Linki */}
      <a
        href="https://www.instagram.com/sheyx0225/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={30} color="#E4405F" />
      </a>
      <a
        href="https://www.linkedin.com/in/seyxov-seyx-3a41193b8/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={30} color="#409ae4" />
      </a>
    </div>
  );
};

export default SocialLinks;
