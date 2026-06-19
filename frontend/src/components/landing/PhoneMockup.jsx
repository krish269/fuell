import React from "react";

/**
 * PhoneMockup — renders a single iPhone screenshot.
 * The source images already include the device frame, so we just
 * drop them in with a subtle tilt-on-hover micro-interaction.
 */
const PhoneMockup = ({ src, alt = "Fuel app screenshot", className = "", tilt = 0 }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    style={{ transform: tilt ? `rotate(${tilt}deg)` : undefined }}
    className={`block w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(212,255,0,0.15)] transition-transform duration-500 hover:scale-[1.03] ${className}`}
  />
);

export default PhoneMockup;
