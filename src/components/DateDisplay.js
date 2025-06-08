// Component - Date display with calendar icon
import { Calendar } from 'lucide-react';
import { formatDate } from '../utils/formatTime'; // Assuming you have a utility function to format the date
const DateDisplay = ({ date }) => {
  return (
    <div className="flex items-center justify-center text-white/80 text-lg md:text-xl mb-6">
      <Calendar className="w-5 h-5 mr-2" />
      <span className="font-medium">{formatDate(date)}</span>
    </div>
  );
};

export default DateDisplay;