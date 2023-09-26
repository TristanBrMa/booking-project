import React, { useState, useEffect } from "react";
import cursorLol from "../assets/images/cursorLol.png";

function InverseMouseCursor() {
  const [cursorX, setCursorX] = useState(window.innerWidth / 2);
  const [cursorY, setCursorY] = useState(window.innerHeight / 2);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <img
      src={cursorLol}
      alt="Souris personnalisée"
      className="fixed w-32 h-32 transform z-10"
      style={{
        left: `${cursorX}px`,
        top: `${cursorY}px`,
      }}
    />
  );
}

export default InverseMouseCursor;
