import React, { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { HiArrowDown, HiArrowUp } from "react-icons/hi";

const ScrollButton = () => {
  const [atBottom, setAtBottom] = useState(false);
  const [animateWhatsApp, setAnimateWhatsApp] = useState(true);

  const handleScroll = () => {
    const targetScroll = atBottom ? 0 : document.documentElement.scrollHeight;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScrollPosition = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 1;
      setAtBottom(isAtBottom);
    };

    window.addEventListener("scroll", handleScrollPosition);
    return () => {
      window.removeEventListener("scroll", handleScrollPosition);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimateWhatsApp(false), 10000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <a
        href="https://api.whatsapp.com/send/?phone=56936603892"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Chat en WhatsApp"
        className={`fixed bottom-20 right-4 z-10 cursor-pointer p-3 bg-white hover:bg-primary text-white rounded-full shadow-lg transition-transform hover:scale-105 chrisvd9_transition ${
          animateWhatsApp ? "whatsapp-flash" : ""
        }`}
      >
        <BsWhatsapp className="text-green-500 size-6" />
      </a>

      <button
        onClick={handleScroll}
        aria-label={atBottom ? "Subir al inicio" : "Bajar al final"}
        className="fixed bottom-6 right-4 z-10 cursor-pointer p-3 bg-[#242424] text-white rounded-xl shadow-lg hover:bg-[#242424]/60 hover:backdrop-blur-lg transition-transform hover:scale-105 chrisvd9_transition"
      >
        {atBottom ? (
          <HiArrowUp className="size-6" />
        ) : (
          <HiArrowDown className="size-6" />
        )}
      </button>
    </>
  );
};

export default ScrollButton;
