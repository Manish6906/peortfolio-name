import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Images/Vector (3).svg";
import logo2 from "../assets/Images/Vector (4).svg";
import { Link } from "react-router-dom";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const pages = [
    "Home", "About", "Projects", "Blog",
    "Guestbook", "Bucket List", "Book a call", "Uses",
    "Attribution", "Links"
  ];

  const connect = ["GitHub", "LinkedIn", "X (Twitter)"];
  const legal = ["Privacy Policy", "Terms of Use"];

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning ☀️";
    if (hour < 17) return "Good Afternoon 🌤️";
    if (hour < 21) return "Good Evening 🌙";
    return "Good Night 🌌";
  };

  return (
    <>
      {/* TOP BAR */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-50"
      >
        <div
          onClick={() => setOpen(true)}
          className="flex items-center justify-center px-4 py-[6px] 
          bg-[rgba(48,48,48,0.8)] backdrop-blur-xl 
          border border-white/10 rounded-full cursor-pointer 
          min-w-[130px] relative overflow-hidden"
        >
          {/* GREETING */}
          <motion.span
            animate={{
              opacity: showGreeting ? 1 : 0,
              y: showGreeting ? 0 : -10,
            }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute text-white text-sm font-medium whitespace-nowrap"
          >
            {getGreeting()}
          </motion.span>

          {/* ICONS */}
          <motion.div
            animate={{
              opacity: showGreeting ? 0 : 1,
              y: showGreeting ? 10 : 0,
            }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-10"
          >
            <img src={logo} className="h-5" />
            <Link to="">
              <img src={logo2} className="h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-gray-600/20 z-[90]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />

            {/* BOTTOM SHEET */}
            <motion.div
              initial={{ y: "110%", opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: "110%", opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 w-[94%] z-[100] 
              bg-[#212020] rounded-xl px-3 pt-2 pb-4 text-white 
              max-h-[65vh] overflow-y-auto shadow-2xl no-scrollbar"
            >
              {/* SEARCH */}
              <div className="flex gap-2 mb-3">
                <input
                  placeholder="Search pages..."
                  className="flex-1 px-3 py-1 rounded-xl text-[13px] 
                  bg-white/10 border border-white/10 outline-none"
                />
                <button className="px-4 py-1 text-[13px] bg-white/10 rounded-xl">
                  Reach out
                </button>
              </div>

              {/* PAGES */}
              <h3 className="text-white/40 text-sm mb-2">Pages</h3>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {pages.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.05,
                      duration: 0.3,
                    }}
                    className={`flex items-center text-[11px] gap-3 p-2 rounded-lg
                    ${i === 0
                        ? "bg-white/15"
                        : "bg-white/5 hover:bg-white/10"
                      }`}
                  >
                    <div className="w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center">
                      📄
                    </div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* CONNECT */}
              <h3 className="text-white/40 text-sm mb-2">Connect</h3>
              <div className="flex gap-3 mb-4">
                {connect.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="px-4 py-1 bg-white/5 rounded-xl text-[11px]"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>

              {/* LEGAL */}
              <h3 className="text-white/40 text-sm mb-2">Legal</h3>
              <div className="flex gap-3">
                {legal.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="px-4 py-1 bg-white/5 rounded-xl text-[11px]"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}