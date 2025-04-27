import { SparkleIcon } from "lucide-react";
import React from "react";

interface MarqueeProps {
    items: string[];
    repeat: number
}

const MarqueeCustom: React.FC<MarqueeProps> = ({
    items,
    repeat
}) => {

    const repeatedMessages = Array(5).fill(items).flat();

    return (
        <div className="marquee-sale marquee-border 
            overflow-hidden 
            font-main 
            py-[23px] 
            flex 
            h-78px 
            border-t-1 
            border-solid 
            border-t-(--dark) 
            border-b-1 
            border-b-(--dark)"
        >
            <div
                className="marquee-center-wrapper 
                    hover:[animation-play-state:paused] 
                    flex 
                    items-center 
                    animate-infinite-scroll-60 
                    duration-300"
            >
                <div className="initial-child-container flex flex-[0_0_auto] flex-row items-center min-w-auto">
                    {repeatedMessages.map((msg, index) => (
                        <React.Fragment key={index}>
                            {index > 0 &&
                                <div className="marquee-child-item text-(--dark) mx-[40px] flex font-icomoon">
                                    <SparkleIcon className="stroke-1" />
                                </div>
                            }
                            <div className="marquee-child-item mx-[40px] text-(--dark) flex">
                                <p className="marquee-text text-[17px] leading-[24px] font-[500] font-(family-name:--font-family-2)">{msg}</p>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MarqueeCustom;