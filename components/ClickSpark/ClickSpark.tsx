"use client";

/*
	Installed from https://reactbits.dev/ts/tailwind/
*/

import React, { useRef, useEffect, useCallback } from "react";

interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  easing?: "linear" | "ease-in" | "ease-out" | "ease-in-out";
  extraScale?: number;
  children?: React.ReactNode;
}

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

const ClickSpark: React.FC<ClickSparkProps> = ({
  sparkColor = "#000", // black
  sparkSize = 10,
  sparkRadius = 8, // close to cursor
  sparkCount = 8,
  duration = 400,
  easing = "ease-out",
  extraScale = 1.0,
    children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    let resizeTimeout : NodeJS.Timeout;

    const resizeCanvas = () => {
      const { width, height } = parent.getBoundingClientRect();
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100);
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(parent);

    resizeCanvas();

    return () => {
      ro.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, []);


  const easeFunc = useCallback(
      (t: number) => {
        switch (easing) {
          case "linear":
            return t;
          case "ease-in":
            return t * t;
          case "ease-in-out":
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
          default:
            return t * (2 - t);
        }
      },
      [easing]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const draw = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      ctx?.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark: Spark) => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) {
          return false;
        }

        const progress = elapsed / duration;
        const eased = easeFunc(progress);

        const distance = eased * sparkRadius * extraScale;
        // Draw circles instead of lines
        const x = spark.x + distance * Math.cos(spark.angle);
        const y = spark.y + distance * Math.sin(spark.angle);
        ctx.beginPath();
        ctx.arc(x, y, sparkSize / 3, 0, 2 * Math.PI);
        ctx.fillStyle = sparkColor;
        ctx.globalAlpha = 1 - progress;
        ctx.fill();
        ctx.globalAlpha = 1;
        return true;
      });

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration, easeFunc, extraScale]);

  // Listen for clicks anywhere in the document
  useEffect(() => {
    const handleClick = (e: MouseEvent): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const now = performance.now();
    const newSparks: Spark[] = Array.from({length: sparkCount}, (_, i) => ({
      x,
      y,
      angle: (2 * Math.PI * i) / sparkCount,
      startTime: now,
    }));

    sparksRef.current.push(...newSparks);
  };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [sparkCount, sparkSize, sparkRadius, duration, extraScale, sparkColor, easeFunc]);

  // Make the canvas always fill the viewport
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);
    return () => window.removeEventListener("resize", setSize);
  }, []);

    return (
    <>
            <canvas
                ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9999]"
        style={{ width: "100vw", height: "100vh" }}
            />
            {children}
    </>
    );
};

export default ClickSpark;
