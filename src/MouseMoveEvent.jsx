import { useEffect, useState } from "react";

const MouseMoveEvent = () => {
  const [mouseMove, setMouseMove] = useState({ x: 0, y: 0 });

  // # Jab v hum event listener ko add karte hain humme usse remove karna h karna hain
  // Always develop this habit of removing event listeners using cleanup fc in useEffect return 
  useEffect(() => {
    const handleMouseMove = (e) => {
      console.log({ x: e.clientX, y: e.clientY });
      setMouseMove({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      console.log("Cleanup function");
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h2>X : {mouseMove.x}</h2>
      <h2>Y : {mouseMove.y}</h2>
    </div>
  );
};

export default MouseMoveEvent;
