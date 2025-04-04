"use client";

import React from "react";
import { Carousel } from "antd";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import ButtonCustom from "../ButtonCustom";

const CarouselCustom: React.FC = () => {

    const slides = [
        {
            id: 1,
            imgSrc: "/images/slider/skincare/slider-skincare-1.jpg",
            title: "Glow with Confidence",
            description: "Discover your perfect skincare routine",
        },
        {
            id: 2,
            imgSrc: "/images/slider/skincare/slider-skincare-2.jpg",
            title: "Radiance Redefined",
            description: "Achieve flawless skin with expert-backed products.",
        },
        {
            id: 3,
            imgSrc: "/images/slider/skincare/slider-skincare-3.jpg",
            title: "Glow Like Never Before",
            description: "Nourish your skin with our premium skincare collection.",
        },
    ];

    return (
        <Carousel
            className="relative overflow-hidden"
            dots={{ className: "bottom-[31px]! z-[1]! relative!" }}
        // appendDots={(dots: any) => (
        //     <div>
        //         <ul>
        //             {dots.map((dot: any, index: number) => (
        //                 <li
        //                     className={
        //                         dot.props.className
        //                             ? `${dot.props.className} custom-li-class after:bg-(--dark) after:content-none after:w-[26px] after:h-[26px] after:absolute after:top-[50%] after:left-[50%] after:rounded-[50%] after:border-t-transparent after:opacity-0 after:transition-all after:duration-200 after:animate-spin-border`
        //                             : `custom-li-class`
        //                     }
        //                     key={index}
        //                 >
        //                     {React.isValidElement(dot.props.children) && dot.props.children.type === 'button' ? (
        //                         React.cloneElement(dot.props.children, {
        //                             className: "swiper-bullet"
        //                         })
        //                     ) : (
        //                         dot.props.children
        //                     )}
        //                 </li>
        //             ))}
        //         </ul>
        //     </div>
        // )}
        >
            {slides.map((slide) => (
                <div key={slide.id} className="relative h-full width-[1513px]">
                    <div className="slider-wrap">
                        <img
                            src={slide.imgSrc}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute grid gap-[40px] inset-0 flex flex-col items-center justify-center text-center text-white p-6">
                            <div className="content-slider text-center grid gap-[40px]">
                                <div className="box-title-slider">
                                    <h2 className="heading leading-[76.8px] text-[64px] font-medium">{slide.title}</h2>
                                    <p className="text-lg mt-2">{slide.description}</p>
                                </div>
                                <div className="box-btn">
                                    <ButtonCustom
                                        className="after:content-[''] after:absolute after:w-full after:h-full after:left-[-100%] after:top-0 hover:after:animate-shine-reverse after:opacity-60 after:bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.25),transparent)] overflow-hidden relative hover:no-underline hover:outline-none focus:no-underline focus:outline-none h-auto has-[>svg]:px-[32px] has-[>svg]:py-[13px] bg-white text-(--dark) inline-flex items-center justify-center text-[16px] leading-[24px] font-[500] transition-all duration-300 ease-in-out border border-dark rounded-[99px] gap-[5px]"
                                        text="Shop Collection"
                                        isArrow
                                    >
                                        <ChevronRightIcon className="flex justify-center" />
                                    </ButtonCustom>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default CarouselCustom;