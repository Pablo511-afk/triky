import { useEffect, useState } from "react";

export function usePointerMove() {
    const [position, setPosition] = useState({ x: "0", y: "0" });
  
 useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;

      setPosition({ x: clientX, y: clientY });
    };

    window.addEventListener("pointermove", handleMove);
    return () => {
      document.body.style.cursor = '';
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return {position} 
}