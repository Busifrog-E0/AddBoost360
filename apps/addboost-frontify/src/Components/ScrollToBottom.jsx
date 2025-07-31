import { useEffect, useState } from "react";

const ScrollToBottom = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center transition-opacity duration-500 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            <span className="text-white text-xs tracking-widest mb-1 font-arya">SCROLL</span>

            <svg
                className="animate-float text-white text-lg"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
            >
                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
        </div>
    );
};

export default ScrollToBottom;
