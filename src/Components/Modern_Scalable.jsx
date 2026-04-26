import React, { useEffect, useState } from "react"
import earth from "../assets/Images/earth.png"
import messageIcon from "../assets/Images/messageIcon.svg"
import location from "../assets/Images/location.svg"
import emoji from "../assets/Images/emoji.png"
import emoji1 from "../assets/Images/emoji1.png"
function Modern_Scalable() {
  const [show, setShow] = useState(false);
  
    useEffect(() => {
      setShow(true); // page load hote hi animation start
    }, []);
  
  return (
    <>
    <section  className=" pt-15 md:pt-10 ">
      <div className="container">
<div className="relative h-[30%]  flex   justify-center text-center text-white overflow-hidden">

     <div className="pt-10 xl:py-20">
         {/* Background Image */}
    
    <div className="relative flex justify-center items-center">
  <div className=" h-[100%] w-[100%]  absolute xl:left-1/2 xl:top-1/6  xl:-translate-x-1/3 xl:-translate-y-1/10  2xl:left-1/2 2xl:top-1/6    2xl:-translate-x-1/3 2xl:-translate-y-1/9">
    <img
      src={earth}
      alt="earth"
      className=" h-[30rem]  w-[100%] sm:h-auto sm:w-auto object-cover opacity-60 "
    />
  </div>
</div>

      {/* Content */}
      <div className="relative z-10  px-4">

        {/* Badge */}

<div className="inline-block group relative rounded-[8px] cursor-pointer">
  
  {/* Gradient border (hidden by default) */}
  <div className="absolute inset-0 rounded-[8px] p-[1.5px] bg-gradient-to-r from-[#DF7A78] via-[#DF7A78] to-purple-500 opacity-0 group-hover:opacity-100 transition duration-600">
    <div className="w-full h-full rounded-[8px] bg-[#0b0f19]" />
  </div>

  {/* Content (always visible) */}
  <div className={`relative flex items-center gap-2 px-2 py-1.5 text-[10.59px] sm:text-[12px] text-white transition-all duration-700 ease-out
          ${show ? "opacity-100 -translate-y-0" : "opacity-0 -translate-y-10"}`}>
    
    <div className="bg-[#df7a78] rounded-md px-1 py-1 flex items-center gap-1 text-[12px]">
      <img src={emoji} alt="emoji" />
      <span>Upcoming</span>
    </div>

    <span className="text-[#c58962] font-bold text-sweep">
      Nextnode is launching soon!
    </span>

  </div>

</div>

        {/* Heading */}
       <div className="flex flex-col justify-center">
           <h1 className={`text-[34px] lg:text-[64px] font-bold mt-4 leading-tight transition-all duration-700 ease-out
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          Full Stack Developer Building <br />
          <span className="bg-gradient-to-r from-[#8F74BF] via-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent">
            Modern & Scalable
          </span>{" "}
          Web Applications
        </h1>
       </div>

        {/* Subtext */}
        <div >
          
          <div className="flex justify-center items-center ">
            <p className={`md:mt-4 text-gray-300 text-[16px]  max-w-[8000px] sm:text-[18px]  font-normal flex md:gap-2 justify-center items-center transition-all duration-700 ease-out
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {/* <img src={emoji1} alt="emoji" />  */}
        👋 Hello, I'm Aayush Bharti a Full Stack Developer Building Modern & Scalable Web Applications
        </p>
          </div>
        </div>

        {/* Buttons */}
        <div className={` mt-2 md:mt-6 flex justify-center  gap-5 items-center transition-all duration-700 ease-out
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
  
  {/* Main Button */}
  <button className=" btn-slide px-3  cursor-pointer py-2 sm:px-8 sm:py-4 rounded-full bg-[#e5e5e5] text-black text-[14.06px] md:text-[16px] font-medium">
    Let’s Connect
  </button>

  {/* Icon Button */}
  <div className="flex justify-center items-center ">
    <div className="border border-white px-2 cursor-pointer py-2 sm:py-4 sm:px-4 bg-white/20 rounded-full">
<img src={messageIcon} alt="message" className=" " />
    </div>
  </div>
  {/* <button className=" mt-3 ">
    
  </button> */}

</div>

<div className=" location relative left-0  top- sm:-top-1 sm:left-30 sm:-bottom-10 md:left-30 lg:top-0 lg:left-70">
  <img src={location} alt="location icon" />
</div>

      </div>
     </div>
    </div>
      </div>
    </section>
    </>
  )
}

export default Modern_Scalable