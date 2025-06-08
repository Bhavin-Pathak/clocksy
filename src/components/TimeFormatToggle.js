
import { ToggleLeft, ToggleRight } from "lucide-react";


const TimeFormatToggle = ({ is24Hour, onToggle }) => {
  return (
    <div className="flex items-center justify-center space-x-3">
      <span
        className={`text-sm font-medium transition-colors duration-300 ${
          !is24Hour ? "text-white" : "text-white/50"
        }`}
      >
        12H
      </span>
      <button
        onClick={onToggle}
        className="p-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/30"
        aria-label="Toggle time format"
      >
        {is24Hour ? (
          <ToggleRight className="w-8 h-8 text-blue-300" />
        ) : (
          <ToggleLeft className="w-8 h-8 text-white/70" />
        )}
      </button>
      <span
        className={`text-sm font-medium transition-colors duration-300 ${
          is24Hour ? "text-white" : "text-white/50"
        }`}
      >
        24H
      </span>
    </div>
  );
};

export default TimeFormatToggle;
