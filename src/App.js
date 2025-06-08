import { useState } from "react";
import useCurrentTime from "./hook/currenttime";
import ClockCard from "./components/ClockCard";
import BackgroundElements from "./components/BackgroundElements";
import Footer from "./components/Footer";
import "./App.css"; // Import Tailwind CSS styles

const App = () => {
  const currentTime = useCurrentTime();
  const [is24Hour, setIs24Hour] = useState(false);

  const handleToggleFormat = () => {
    setIs24Hour((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <BackgroundElements />

      <main className="flex-1 flex items-center justify-center p-4 relative z-10">
        <ClockCard
          currentTime={currentTime}
          is24Hour={is24Hour}
          onToggleFormat={handleToggleFormat}
        />
      </main>

      <Footer />

      <style>
        {`
    @keyframes float-up {
      0% {
        transform: translateY(0px) scale(1);
        opacity: 0.7;
      }
      50% {
        transform: translateY(-20px) scale(1.1);
        opacity: 1;
      }
      100% {
        transform: translateY(-40px) scale(0.8);
        opacity: 0.3;
      }
    }

    @media (max-width: 640px) {
      .backdrop-blur-xl {
        backdrop-filter: blur(20px);
      }
    }
  `}
      </style>
    </div>
  );
};

// Export main app
export default App;
