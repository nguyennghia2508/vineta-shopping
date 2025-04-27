"use client";

import React, { useEffect, useState } from "react";
import { HiOutlineArrowUp } from "react-icons/hi";

const GoToTopButtonCustom: React.FC = ({ }) => {
    const [show, setShow] = useState(false);
    const [progressAngle, setProgressAngle] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            const angle = (scrollPercent / 100) * 360;
            setProgressAngle(angle);
            setShow(scrollTop > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            id="goTop"
            className={`
                fixed
                p-0
                bottom-[90px]
                right-[40px]
                w-[38px]
                h-[38px]
                bg-(--white)
                text-(--dark)
                text-[20px]
                text-center
                leading-[50px]
                cursor-pointer
                border-none
                rounded-[3px]
                shadow-(--shadow-1)
                transition-all
                duration-300
                ease-in
                z-1000
                inline-flex
                justify-center
                items-center
                gap-[8px]
                capitalize
                ${show ? "opacity-100 visible" : "opacity-0 invisible"}`}
            onClick={handleClick}
        >
            <span
                className="border-progress
                top-[-1px]
                lef-[-1px]
                absolute
                w-[calc(100%+2px)]
                h-[calc(100%+2px)]
                rounded-[3px]
                border
                border-solid
                border-(--dark)
                content-['']
                z-1
                transition-all
                duration-300
                ease-in-out
                "
                style={{
                    maskImage: `conic-gradient(#000 ${progressAngle}deg, transparent 0deg)`
                }}
            />
            <HiOutlineArrowUp className="icon icon-arrow-right w-[15px] h-[15px]" />
        </button>
    );
};

export default GoToTopButtonCustom;