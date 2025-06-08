// Component - Clock icon with pulse animation
import { Clock } from 'lucide-react';
const ClockIcon = () => {
  return (
    <div className="flex justify-center mb-6">
      <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
        <Clock className="w-8 h-8 text-white animate-pulse" />
      </div>
    </div>
  );
};

export default ClockIcon;