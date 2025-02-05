import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';

// Define the type for each social media item
type SocialItem = {
  icon: JSX.Element;  // The icon is a JSX element
  path: string;       // The path is a string (URL)
};

const socials: SocialItem[] = [
  { icon: <FaGithub />, path: "https://github.com/KamranYT" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/muhammad-kamran-916b752b4/" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@the_animation_zone1M" },
  { icon: <FaFacebook />, path: "https://web.facebook.com/profile.php?id=100080963443012" },
];

// Define the types for the props of the Social component
interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
