"use client";
import React, { useRef, useState } from "react";

interface Ripple {
  x: number;
  y: number;
  key: number;
}

export default function ClickRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const keyRef = useRef(0);

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setRipples((prev) => [
        ...prev,
        { x, y, key: keyRef.current++ }
      ]);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Remove ripple after animation
  React.useEffect(() => {
    if (ripples.length === 0) return;
    const timeout = setTimeout(() => {
      setRipples((prev) => prev.slice(1));
    }, 400);
    return () => clearTimeout(timeout);
  }, [ripples]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {ripples.map((ripple) => (
        <span
          key={ripple.key}
          className="absolute w-8 h-8 rounded-full bg-black/30 animate-ripple"
          style={{
            left: ripple.x - 16,
            top: ripple.y - 16,
          }}
        />
      ))}
      <style jsx global>{`
        @keyframes ripple {
          0% {
            transform: scale(0.5);
            opacity: 0.7;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        .animate-ripple {
          animation: ripple 0.4s linear;
        }
      `}</style>
    </div>
  );
} 