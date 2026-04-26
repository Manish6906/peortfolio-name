import React, { useRef } from "react";
import shopify from "../assets/Images/Vector (5).svg";
import fullImage from "../assets/Images/fullImage.png";
import circleImage from "../assets/Images/circlesvg.svg";
import Background from "../assets/Images/Background.svg";
import star from "../assets/Images/vector3.png";
import Bun from "../assets/Images/Bun.png";
import Docker from "../assets/Images/Docker.png";
import Next from "../assets/Images/Next.js.png";
import pnpm from "../assets/Images/pnpm.png";
import PostgreSQL from "../assets/Images/PostgreSQL.png";
import Redis from "../assets/Images/Redis.png";
import Vercel from "../assets/Images/Vercel.png";
import ViewDetail from "./ViewDetail";
import { motion, useScroll, useTransform } from "framer-motion";

function RecruiterOne({ index }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // 🔥 Animation controls
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const isMobile = window.innerWidth < 1024;
  const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
  return (
    <>
      {/* <section className='  py-3 sm:py-0'> */}
      <section
        ref={ref}
        className="sticky    py-3 sm:py-0"
        style={{
          top: isMobile
            ? `${40 + index * 30}px` // 📱 mobile
            : `${100 + index * 80}px`, // 💻 desktop
          zIndex: 10 + index,
        }}
      >
        <div className="container">
          <motion.div style={{ scale, opacity, y }} className=" lg:px-0">
            <div className=" px-2   lg:px-0 py-[6px]">
              {/* Container */}
              <div
                className="image_background lg:flex gap-5 lg:gap-[75px] lg:pl-[40px] md:pb-[40px] lg:pt-[40px] lg:pr-[53px]  "
                style={{}}
              >
                {/* First div */}
                <div className="rounded-xl flex relative w-[100%] lg:w-[60%] ">
                 
                  <ViewDetail />
                </div>

                {/* Second div */}
                <div className=" flex flex-col justify-center  mt-10 lg:mt-0 ">
                  <div className="flex items-center gap-3 text-[#FFFFFF]">
                    <img src={shopify} alt="shopify logo" />
                    <h1 className="text-[26px] lg:text-[40px] font-bold">
                      Recruiter
                      <span className="bg-gradient-to-r from-[#D76D77] via-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent">
                        One
                      </span>
                    </h1>
                  </div>

                  <div className="md:max-w-[430px] hidden lg:block text-[#BDBDBD]">
                    <p>
                      Developed a recruitment platform to connect job seekers
                      and recruiters. Implemented job posting, candidate
                      profiles, and application tracking. Built secure user
                      authentication and role-based dashboards
                    </p>
                  </div>

                  <div className="hidden lg:block">
                    <div className="flex gap-2 pt-[11px] text-[#BDBDBD] text-[14px]">
                      <img src={star} alt="star" />
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </span>
                    </div>

                    <div className="flex gap-2 pt-[11px] text-[#BDBDBD] text-[14px]">
                      <img src={star} alt="star" />
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </span>
                    </div>

                    <div className="flex gap-2 pt-[11px] text-[#BDBDBD] text-[14px]">
                      <img src={star} alt="star" />
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </span>
                    </div>
                  </div>

                  {/* skills section */}
                  {/* <div className="flex flex-wrap gap-2 space-y-2  sm:w-[400px] lg:w-[384px] mt-7">
                    <img src={Bun} alt=" logo" />
                    <img src={Docker} alt=" logo" />
                    <img src={Next} alt=" logo" />
                    <img src={pnpm} alt=" logo" />
                    <img src={PostgreSQL} alt=" logo" />
                    <img src={Redis} alt=" logo" />
                    <img src={Vercel} alt=" logo" />
                  </div> */}
                  <motion.div
  className="flex flex-wrap gap-2 space-y-2 sm:w-[400px] lg:w-[384px] mt-7"
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
>
  <motion.img variants={item} src={Bun} alt="logo" />
  <motion.img variants={item} src={Docker} alt="logo" />
  <motion.img variants={item} src={Next} alt="logo" />
  <motion.img variants={item} src={pnpm} alt="logo" />
  <motion.img variants={item} src={PostgreSQL} alt="logo" />
  <motion.img variants={item} src={Redis} alt="logo" />
  <motion.img variants={item} src={Vercel} alt="logo" />
</motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default RecruiterOne;
