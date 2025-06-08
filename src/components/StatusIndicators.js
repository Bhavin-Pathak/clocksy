// Component - Status indicator dots
const StatusIndicators = () => {
  return (
    <div className="flex justify-center space-x-1 mt-6">
      {Array.from({ length: 3 }, (_, i) => (
        <div
          key={i}
          className="w-2 h-2 bg-white/30 rounded-full animate-pulse"
          style={{ animationDelay: `${i * 200}ms` }}
        />
      ))}
    </div>
  );
};

export default StatusIndicators;