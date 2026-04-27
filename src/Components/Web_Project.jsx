import React from "react";
import { motion } from "framer-motion";
import Line24 from "../assets/Images/Line 24.png";
import Line25 from "../assets/Images/Line 25.png";
import Line26 from "../assets/Images/Line 26.png";
import arrow from "../assets/Images/arrow.svg";
import DownArrow from "../assets/Images/Vector.png";
import vector13 from "../assets/Images/Vector13.png";
import vector16 from "../assets/Images/Vector16.png";
import linepurple from "../assets/Images/linepurple.png";

function Web_Project() {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.92,
    },
    show: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.18,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="px-2 md:px-0 xl:px-0 overflow-hidden">
      <div className="container">
        <div className="flex justify-center pb-3 relative rounded-xl border border-white/10">

          <div className="w-full relative pb-5 lg:pb-10 overflow-hidden">

            {/* Purple Line */}
            <motion.img
              src={linepurple}
              alt="line"
              className="absolute right-0"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
            />

            {/* Cards */}
            <div className="flex gap-1 sm:flex-row justify-center lg:justify-evenly xl:justify-between items-center lg:gap-8 pt-[60px] pb-[50px] lg:pl-[75px] lg:pr-[76px]">

              {/* Card 1 */}
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="relative rounded-xl lg:w-[33.3%] p-[1px] xl:ml-[120px]"
              >
                <div className="bg-[#0e0c13] rounded-xl w-full lg:w-[200px] p-2 sm:p-5 border border-white/10">
                  <img src={Line24} alt="lines" className="mb-3 w-full" />

                  <ul className="text-[8px] md:text-[12px] text-gray-300 space-y-3 sm:space-y-2">
                    <li>• Clean & Modern Code</li>
                    <li>• Full Stack Expertise</li>
                    <li>• Responsive Websites</li>
                    <li>• Reliable Support</li>
                  </ul>
                </div>

                <span className="absolute left-6 -bottom-4 xl:-bottom-6 xl:left-1/30 xl:-translate-x-1/2 bg-[#8f74bf] text-white text-[16px] px-1 md:px-2 md:py-1 rounded-md flex items-center gap-1">
                  <span className="text-[#4e0fbf]">●</span>
                  <h1 className="text-[8px] md:text-[14px]">
                    Why Choose Me
                  </h1>
                </span>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                custom={1}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="relative rounded-xl lg:w-[33.3%] p-[1px] xl:ml-[50px]"
              >
                <div className="bg-[#1d0f10] w-full lg:w-[200px] rounded-xl p-2 sm:p-4 border border-white/10">
                  <img src={Line25} alt="lines" className="mb-3 w-full" />

                  <ul className="text-gray-300 space-y-3">

                    <li>
                      <div className="flex items-center text-[8px] md:text-[12px]">
                        <div className="w-[40px] md:w-[60px]">3L</div>
                        <div className="flex gap-2 items-center">
                          <img src={DownArrow} alt="arrow" />
                          <span>25%</span>
                          <img
                            src={vector13}
                            alt="graph"
                            className="w-[30px] sm:w-full"
                          />
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="flex items-center text-[8px] md:text-[12px]">
                        <div className="w-[40px] md:w-[60px]">$11.B3</div>
                        <div className="flex gap-2 items-center">
                          <img src={DownArrow} alt="arrow" />
                          <span>15%</span>
                          <img
                            src={vector13}
                            alt="graph"
                            className="w-[30px] sm:w-full"
                          />
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="flex items-center text-[8px] md:text-[12px]">
                        <div className="w-[40px] md:w-[60px]">15.Bk</div>
                        <div className="flex gap-2 items-center">
                          <img src={DownArrow} alt="arrow" />
                          <span>9%</span>
                          <img
                            src={vector13}
                            alt="graph"
                            className="w-[32px] sm:w-full"
                          />
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="flex items-center text-[8px] md:text-[12px]">
                        <div className="w-[40px] md:w-[60px]">2.19%</div>
                        <div className="flex gap-2 items-center">
                          <img src={DownArrow} alt="arrow" />
                          <span>2.19%</span>
                          <img
                            src={vector16}
                            alt="graph"
                            className="w-[25px] sm:w-full"
                          />
                        </div>
                      </div>
                    </li>

                  </ul>
                </div>

                <span className="absolute left-6 -bottom-4 xl:-bottom-5 xl:left-1/30 xl:-translate-x-1/2 bg-[#d76d77] text-white text-[14px] px-1 md:px-2 md:py-1 rounded-md flex items-center gap-1">
                  <span className="text-[#d70216]">●</span>
                  <p className="text-[8px] md:text-[14px]">
                    Business Analytics
                  </p>
                </span>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                custom={2}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="relative rounded-xl lg:w-[33.3%] flex justify-center xl:justify-end p-[1px]"
              >
                <div className="bg-[#021007] w-full lg:w-[200px] rounded-xl p-2 sm:p-4 border border-white/10">
                  <img src={Line26} alt="lines" className="mb-3 w-full" />

                  <ul className="text-sm text-gray-300 space-y-3 text-[8px] md:text-[12px]">

                    <li className="flex justify-between">
                      <span>Projects Completed</span>
                      <span className="text-green-400">50+</span>
                    </li>

                    <li className="flex justify-between">
                      <span>Years Experience</span>
                      <span className="text-green-400">3+</span>
                    </li>

                    <li className="flex justify-between">
                      <span>Happy Clients</span>
                      <span className="text-green-400">20+</span>
                    </li>

                    <li className="flex justify-between">
                      <span>Technologies</span>
                      <span className="text-green-400">10+</span>
                    </li>

                  </ul>
                </div>

                <span className="absolute left-6 -bottom-4 lg:left-15 xl:-bottom-5 xl:left-1/4 xl:-translate-x-1/15 bg-[#14aa4b] text-white text-[14px] px-1 md:px-2 md:py-1 rounded-md flex items-center gap-1">
                  <span className="text-[14px] text-[#00dd51]">●</span>
                  <p className="text-[8px] md:text-[14px]">
                    Full Stack Developer
                  </p>
                </span>
              </motion.div>

            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:mt-8 text-center flex flex-col items-center w-full"
            >
              <h2 className="text-white text-[18px] xl:text-[20px] font-bold">
                Let’s Build Your Next Web Project
              </h2>

              <p className="text-[#BDBDBD] text-center mt-2 text-[12px] xl:text-[16px] w-[300px] lg:w-full">
                Need a fast, scalable, and modern web application? I can help
                turn your idea into a fully functional product.
              </p>
            </motion.div>

            {/* Arrow */}
            <motion.img
              src={arrow}
              alt="arrow"
              className="absolute bottom-4 right-4 lg:h-10 lg:w-10 cursor-pointer"
              initial={{ opacity: 0, scale: 0.4, rotate: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              whileHover={{ scale: 1.15, rotate: 10 }}
              transition={{ duration: 0.8 }}
            />

          </div>
        </div>
      </div>
    </section>
  );
}

export default Web_Project;