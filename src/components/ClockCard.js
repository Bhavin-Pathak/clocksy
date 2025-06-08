import ClockIcon from './ClockIcon';
import TimeDisplay from './TimeDisplay';
import DateDisplay from './DateDisplay';
import FloatingBubbles from './FloatingBubbles';
import TimeFormatToggle from './TimeFormatToggle';
import StatusIndicators from './StatusIndicators';

const ClockCard = ({ currentTime, is24Hour, onToggleFormat }) => {
  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full mx-auto transform hover:scale-105 transition-all duration-500 ease-out relative overflow-hidden">
      <FloatingBubbles />

      <ClockIcon />

      <div className="text-center relative z-10">
        <TimeDisplay time={currentTime} is24Hour={is24Hour} />
        <DateDisplay date={currentTime} />
        <TimeFormatToggle is24Hour={is24Hour} onToggle={onToggleFormat} />
      </div>

      <StatusIndicators />
    </div>
  );
};

export default ClockCard;