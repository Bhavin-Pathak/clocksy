// Component - Time display
import { formatTime } from '../utils/formatTime';
const TimeDisplay = ({ time, is24Hour }) => {
  return (
    <div className="text-4xl md:text-5xl font-mono font-bold text-white mb-2 tracking-wider transition-all duration-300 ease-in-out">
      {formatTime(time, is24Hour)}
    </div>
  );
};


export default TimeDisplay;