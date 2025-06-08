// Component - Footer with auto-updating year
import { getCurrentYear } from '../utils/formatTime'; // Assuming you have a utility function to get the current year
const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <footer className="relative z-10 p-6 text-center">
      <div>
        <p className="text-white/70 text-sm font-medium">
          © {currentYear} Designed and developed by Bhavin Pathak
        </p>
      </div>
    </footer>
  );
};

export default Footer;