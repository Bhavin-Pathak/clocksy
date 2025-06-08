// Component - Floating bubbles inside card
import {
    BUBBLE_CONFIG,
    ANIMATION_DELAYS,
    ANIMATION_DURATIONS,
  } from "../constants/constants"; // adjust the path if needed

const FloatingBubbles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {BUBBLE_CONFIG.map((bubble, index) => (
        <div
          key={index}
          className={`absolute ${bubble.position} ${bubble.size} ${bubble.color} rounded-full`}
          style={{
            animationDelay: ANIMATION_DELAYS[index],
            animationDuration: ANIMATION_DURATIONS[index],
            animationName: "float-up",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDirection: "alternate",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;