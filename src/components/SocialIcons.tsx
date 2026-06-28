import { 
  FaFacebookF, 
  FaWhatsapp, 
  FaTiktok, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
  gap?: string;
}

const SocialIcons = ({ 
  className = "", 
  iconSize = 20, 
  gap = "gap-6" 
}: SocialIconsProps) => {

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF size={iconSize} />,
      url: "https://facebook.com/omiie",
      color: "hover:text-[#1877F2]"
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={iconSize} />,
      url: "https://wa.me/33612345678",
      color: "hover:text-[#25D366]"
    },
    {
      name: "TikTok",
      icon: <FaTiktok size={iconSize} />,
      url: "https://tiktok.com/@omiie",
      color: "hover:text-black dark:hover:text-white"
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={iconSize} />,
      url: "https://instagram.com/omiie",
      color: "hover:text-[#E4405F]"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={iconSize} />,
      url: "https://linkedin.com/company/omiie",
      color: "hover:text-[#0A66C2]"
    },
    {
      name: "X (Twitter)",
      icon: <FaXTwitter size={iconSize} />,
      url: "https://x.com/omiie",
      color: "hover:text-black dark:hover:text-white"
    },
    {
      name: "YouTube",
      icon: <FaYoutube size={iconSize} />,
      url: "https://youtube.com/@omiie",
      color: "text-[#FF0000]"
    },
  ];

  return (
    <div className={`flex ${gap} ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-zinc-400 dark:text-zinc-500 transition-all duration-300 hover:scale-110 ${social.color}`}
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;