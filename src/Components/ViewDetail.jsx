import React, { useRef, useState, useEffect } from "react";
import mobile from "../assets/Images/image 67.svg";
import circleImage from "../assets/Images/circlesvg.svg";

function ViewDetail() {
  const containerRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef({ x: 0, y: 0 });

  const [visible, setVisible] = useState(false);
  const [style, setStyle] = useState({ left: 0, top: 0 });

  const CIRCLE_SIZE = 110;
  const BUFFER = CIRCLE_SIZE / 1;

  useEffect(() => {
    let animation;

    const animate = () => {
      circle.current.x += (mouse.current.x - circle.current.x) * 0.12;
      circle.current.y += (mouse.current.y - circle.current.y) * 0.12;

      setStyle({
        left: circle.current.x,
        top: circle.current.y,
      });

      animation = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animation);
  }, []);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouse.current = { x, y };

    // allow outside but still visible
    const isInside =
      x >= -BUFFER &&
      y >= -BUFFER &&
      x <= rect.width + BUFFER &&
      y <= rect.height + BUFFER;

    setVisible(isInside);
  };

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setVisible(false)}
        className="w-full relative inline-block sm:mt-3 rounded-[28px] p-[1.1px] bg-gradient-to-r from-[#3A1C71] via-[#DF7A78] to-[#DF7A78]"
      >
        <div className="rounded-[26px] bg-[#181818] px-1 py-1">
          
          {/* ❗ IMPORTANT: no overflow-hidden here */}
          <div className="relative bg-gradient-to-b from-[#5F219E] to-[#C6A3EA] rounded-[26px]">

            {/* text */}
            <div className="pt-2 pl-2 pr-5 lg:pl-[29px] sm:pt-5 sm:px-5 flex justify-between">
              <p className="max-w-[400px] text-[14px] md:text-[20px] text-[#FFFFFF]">
                Developed a recruitment platform to connect job seekers and recruiters
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
                  transform: "translate(-50%, -50%)",
                  width: CIRCLE_SIZE,
                  height: CIRCLE_SIZE,
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