import { useNavigate } from "react-router";
import Button from "../../Button";
import { useState } from "react";

const HeroSection = () => {
    // https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4
    const [homePageData, setHomePageData] = useState({
        title: "Digital Solutions That Empower Your Brand.",
        description: "Transform your brand with full-service digital marketing, AI-powered web solutions, global product sourcing, and startup empowerment—powered by experts across the world.",
        videoSrc: "https://static.videezy.com/system/resources/previews/000/018/776/original/solution-wei_C3_9F.mp4",
        buttonText: "BOOK A FREE CONSULTATION",
        buttonLink: "/contact"
    });
    const navigate = useNavigate();

    return (
        <div className="relative w-full h-[100vh] overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src={homePageData.videoSrc}
                autoPlay={true}
                loop
                muted
                playsInline
            />
            <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-r from-zinc-800 via-zinc-800/60 to-transparent" />
            <div className="relative z-10 w-full h-full grid xl:grid-cols-2 items-center px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 md:py-20 lg:py-24">
                <div className="flex flex-col gap-8 text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-arya uppercase">
                        {homePageData.title}
                    </h1>
                    <p className="text-lg">
                        {homePageData.description}
                    </p>
                    <div className="flex">
                        <Button onClick={() => navigate(homePageData.buttonLink)} text={homePageData.buttonText} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
