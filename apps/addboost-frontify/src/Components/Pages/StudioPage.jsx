import { motion } from "framer-motion";
import studiobg from '../../assets/studiobg.webp'

export default function StudioPage() {
    return (
        <div className="relative h-[100svh] overflow-hidden">
            {/* 🔹 Background Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 z-0"
            >
                <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${studiobg})` }}>
                    <div className="w-full h-full bg-PrimaryDarkBlue/60 backdrop-brightness-50" />
                </div>
            </motion.div>

            {/* 🔹 Foreground Content */}
            <div className="relative z-10 h-full flex items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center "
                >
                    <motion.h1
                        className="text-4xl md:text-6xl leading-tight font-arya text-white   "
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                    >
                        Visual Thinking for Bold Brands
                    </motion.h1>

                    <motion.p
                        className="mt-4 text-lg md:text-xl text-gray-300 font-inter"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                    >
                        We capture the essence of your brand, one frame at a time.
                    </motion.p>

                    <motion.div
                        className="mt-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.7 }}
                    >
                        <span className="text-sm uppercase tracking-widest text-gray-400 font-inter">
                            Something exciting is in the works — check back soon.
                        </span>
                        <p className="text-2xl mt-2 text-white font-inter">Be part of the journey.</p>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    );
}
