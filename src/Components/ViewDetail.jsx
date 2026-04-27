import React, { useRef, useState, useEffect } from "react";
import mobile from "../assets/Images/image 67.svg";
import circleImage from "../assets/Images/circlesvg.svg";

function ViewDetail() {
  const containerRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef({ x: 0, y: 0 });

  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false); // text zoom

  const [style, setStyle] = useState({
    left: 0,
    top: 0,
    scale: 0,
    opacity: 0,
  });

  const CIRCLE_SIZE = 110;
  const BUFFER = CIRCLE_SIZE / 2;

  useEffect(() => {
    let animation;

    const animate = () => {
      circle.current.x += (mouse.current.x - circle.current.x) * 0.12;
      circle.current.y += (mouse.current.y - circle.current.y) * 0.12;

      setStyle((prev) => ({
        ...prev,
        left: circle.current.x,
        top: circle.current.y,
      }));

      animation = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animation);
  }, []);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    x = Math.max(BUFFER, Math.min(x, rect.width - BUFFER));
    y = Math.max(BUFFER, Math.min(y, rect.height - BUFFER));

    mouse.current = { x, y };

    if (!visible) {
      circle.current = { x, y };
    }

    setVisible(true);
    setHovered(true);

    setStyle((prev) => ({
      ...prev,
      scale: 1,
      opacity: 1,
    }));
  };

  const handleLeave = () => {
    setHovered(false);

    setStyle((prev) => ({
      ...prev,
      scale: 0.9,
      opacity: 0,
    }));

    setTimeout(() => {
      setVisible(false);
    }, 300);
  };

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        className="w-full relative inline-block sm:mt-3 rounded-[28px] p-[1.1px] bg-gradient-to-r from-[#3A1C71] via-[#DF7A78] to-[#DF7A78]"
      >
        <div className="rounded-[26px] bg-[#181818] px-1 py-1">
          <div className="relative overflow-hidden bg-gradient-to-b from-[#5F219E] to-[#C6A3EA] rounded-[26px]">

            {/* text */}
            <div className="pt-2 pl-2 pr-5 lg:pl-[29px] sm:pt-5 sm:px-5 flex justify-between">
              <p
                className="max-w-[400px] text-[14px] md:text-[20px] text-white origin-left transition-all duration-300 ease-out"
                style={{
                  transform: hovered ? "scale(1.1)" : "scale(1)",
                }}
              >
                Developed a recruitment platform to connect job seekers and
                recruiters
              </p>
            </div>

            {/* image */}
            <div className="pt-10 flex justify-center px-10 lg:px-0">
              <img src={mobile} alt="mobile" />
            </div>

            {/* cursor */}
            {visible && (
              <img
                src={circleImage}
                alt="circle"
                className="absolute pointer-events-none z-50"
                style={{
                  left: style.left,
                  top: style.top,
                  width: CIRCLE_SIZE,
                  height: CIRCLE_SIZE,
                  opacity: style.opacity,
                  transform: `translate(-50%, -50%) scale(${style.scale})`,
                  transition:
                    "transform 0.35s ease, opacity 0.35s ease",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewDetail;