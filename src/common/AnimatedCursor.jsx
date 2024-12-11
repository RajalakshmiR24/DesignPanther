import React, { useEffect, useRef } from "react";
import { throttle } from "lodash";
import "../index.css"; // Ensure global styles are applied

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e",
];

export const AnimatedCursor = () => {
  const circlesRef = useRef([]);
  const coords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Attach to the entire window
    const handleMouseMove = throttle((e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    }, 10);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Set up each circle
    circlesRef.current.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    // Animate circles
    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circlesRef.current.forEach((circle, index) => {
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.transform = `scale(${
          (circlesRef.current.length - index) / circlesRef.current.length
        })`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();
  }, []);

  return (
    <>
      {Array.from({ length: colors.length }).map((_, index) => (
        <div
          key={index}
          ref={(el) => (circlesRef.current[index] = el)}
          className="circle position-fixed"
        />
      ))}
    </>
  );
};
