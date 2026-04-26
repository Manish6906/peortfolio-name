import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/Vector (3).svg"
import logo2 from "../assets/Images/Vector (4).svg"
import { motion } from "framer-motion";
import MobileNavbar from "./MobileNavbar";
const menuItems = [
  { label: "Guestbook", desc: "Let me know you were here", img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=80" },
  { label: "Bucket List", desc: "Things to do at least once in my life", img: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=600&q=80" },
];

const listItems = [
  { icon: "🔗", label: "Links", desc: "All my links are here" },
  { icon: "📖", label: "Uses", desc: "A peek into my digital..." },
  { icon: "💳", label: "Attribution", desc: "Journey to create this site" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const closeTimer = useRef(null);
  const [isPinned, setIsPinned] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowGreeting(false);
  }, 3000);

  return () => clearTimeout(timer);
}, []);

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning ☀️";
  if (hour < 17) return "Good Afternoon 🌤️";
  if (hour < 21) return "Good Evening 🌙";
  return "Good Night 🌌";
};
  


  const handleMouseEnter = () => {
  if (closeTimer.current) clearTimeout(closeTimer.current);
  if (!isPinned) {
    setOpen(true);
  }
};
const handleMouseLeave = () => {
  if (!isPinned) {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  }
};

 

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <section className="bg-[#000000] sticky top-0 z-50"
    >
      <div className="container ">
        <MobileNavbar />

     
    <div className=" h-18 hidden md:block text-white font-sans relative  ">

      {/* Fixed Logo */}
      <div className="absolute top-5  z-50 text-lg font-extrabold tracking-tight">
        <Link to="/"> <img src={logo} alt='logo' /></Link>
      </div>

      {/* Fixed Right Icon */}
      <div className="absolute top-5 right-0 z-50 text-lg  cursor-pointer">
        <Link to=""><img src={logo2} alt='icon' /></Link>
      </div>

      {/* Center Navbar */}
    <motion.div
  onMouseLeave={handleMouseLeave}
  initial={{ opacity: 0, y: -40 }}   // 👈 start hidden + upar
  animate={{ opacity: 1, y: 0 }}     // 👈 slide down + fade in
  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
  className="fixed top-0 left-1/2 mt-2 -translate-x-1/2 z-[200]"
>
  <motion.div
   initial={{ width: "150px" }}   // ✅ FIX
    animate={{
       width: showGreeting 
      ? "150px" 
      : open 
        ? "700px" 
        : "350px", 
    }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className="bg-[rgba(38,38,38,0.92)] backdrop-blur-2xl border border-white/10 
    shadow-[0_12px_50px_rgba(0,0,0,0.7)] overflow-hidden rounded-[22px] px-2"
  >
    
    {/* TOP NAV (CENTER FIXED) */}
   <div className="flex justify-center relative overflow-hidden">
  <div className="flex items-center justify-center gap-1 px-3 py- min-h-[40px]">

    {/* GREETING */}
    <motion.span
      initial={false}
      animate={{
        opacity: showGreeting ? 1 : 0,
        y: showGreeting ? 0 : -10,
      }}
      transition={{ duration: 0.25 }}
      className="absolute text-white text-[14px] font-medium whitespace-nowrap"
    >
      {getGreeting()}
    </motion.span>

    {/* NAV ITEMS */}
    <motion.nav
      initial={false}
      animate={{
        opacity: showGreeting ? 0 : 1,
        y: showGreeting ? 10 : 0,
      }}
      transition={{ duration: 0.25 }}
      className="flex items-center"
    >
      {["Home", "About", "Work", "Blog"].map((link) => (
        <button
          key={link}
          onClick={() => setActive(link)}
          className="relative px-[14px] py-[6px] cursor-pointer rounded-full text-[13.5px] font-medium text-white/70"
        >
          {active === link && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-white/15 rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          )}

          <span className="relative z-10 text-white">
            {link}
          </span>
        </button>
      ))}

      {/* MORE BUTTON */}
      <button
        onMouseEnter={handleMouseEnter}
        onClick={() => {
          setIsPinned((prev) => !prev);
          setOpen((prev) => !prev);
        }}
        className="flex items-center gap-1 cursor-pointer px-[14px] py-[6px] rounded-full text-[13.5px] font-medium text-white/65 hover:bg-white/8 hover:text-white"
      >
        More
        <span
          className="text-[10px] opacity-55 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▾
        </span>
      </button>
    </motion.nav>
  </div>
</div>

    {/* DROPDOWN */}
   <div
  onMouseEnter={cancelClose}
  className={`
    origin-top transform-gpu will-change-transform
    transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
    overflow-hidden
    ${open
      ? "opacity-100 scale-y-100 translate-y-0 max-h-[400px] py-4 px-6"
      : "opacity-0 scale-y-95 -translate-y-2 max-h-0 py-0 px-6 pointer-events-none"
    }
  `}
>
      <div className="grid grid-cols-3 gap-4">
        
        {/* LEFT CARDS */}
        {menuItems.map((item, i) => (
  <div
    key={item.label}
    className={`
      relative rounded-[13px] overflow-hidden h-[200px]
      transition-all duration-500
      ${open
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-4"
      }
    `}
    style={{
      transitionDelay: `${i * 100}ms`
    }}
  >
            <img
              src={item.img}
              className="w-full h-full object-cover brightness-[0.65]"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-[15px] font-bold">{item.label}</h3>
              <p className="text-[12px] text-white/70">{item.desc}</p>
            </div>
          </div>
        ))}

        {/* RIGHT LIST */}
        <div className="flex flex-col gap-3 justify-center">
          {listItems.map((item, i) => (
  <div
    key={item.label}
    className={`
      flex items-center gap-3 p-3 rounded-xl
      bg-white/7 hover:bg-white/12 transition-all duration-500
      ${open
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-4"
      }
    `}
    style={{
      transitionDelay: `${(i + 2) * 100}ms`
    }}
  >
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h4 className="text-[13.5px] font-semibold">{item.label}</h4>
                <p className="text-[11px] text-white/50">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
    </motion.div>
    </motion.div>
 
</div>
    </div>
     
    </section>
  );
}