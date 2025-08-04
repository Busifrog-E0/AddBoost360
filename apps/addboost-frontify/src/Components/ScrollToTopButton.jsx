import { useState, useRef, useEffect } from 'react';
import ScrollUp from '../assets/ScrollUp.svg'

const ScrollToTopButton = ({ size = 'sm', color = 'bg-primary' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            // Hide while scrolling
            setIsVisible(false);

            // Clear any previous timeout
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            // Show button if scrolling stops for 300ms and scrolled down
            timeoutRef.current = setTimeout(() => {
                if (window.scrollY > 300) {
                    setIsVisible(true);
                }
            }, 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-20 right-3.5 z-50 p-3 bg-white rounded-full shadow-lg transition-opacity duration-300 ease-in-out ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            <img src={ScrollUp} className="w-5 h-5" />
        </button>
    );
};

export default ScrollToTopButton;
