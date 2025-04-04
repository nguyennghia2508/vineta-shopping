"use client";

import React from "react";
import { Carousel } from "antd";

interface SliderItem {
    img?: string;
    title: string;
}

interface SlidersProps {
    className?: string;
    classNameImage?: string;
    data: SliderItem[];
    numberToShow?: number;
    title?: string;
    type?: string;

}

const SlidersCustom: React.FC<SlidersProps> = ({
    className,
    classNameImage,
    title,
    data,
    numberToShow,
    type,
}) => {

    return (
        <div className='container px-[24px] w-full max-w-[1488px] mx-auto'>
            {title &&
                <div className="slider-title mb-[48px] text-center gap-[12px]">
                    <h4 className="title text-[36px] leading-[44px] tracking-[-0.02rem] text-(--dark) font-[500]">{title}</h4>
                </div>
            }
            {type === "content" &&
                <Carousel
                    className={className}
                    slidesToShow={numberToShow}
                    draggable={false}
                    dots={false}
                    responsive={[
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 3,
                                initialSlide: 0,
                                dots: true,
                                dotsClass: "slick-dots slick-dots-bottom flex! relative! gap-[4px]! mt-[20px]! bottom-[-15px]!"
                            },
                        },
                        {
                            breakpoint: 575,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 2,
                                initialSlide: 0,
                                dots: true,
                                dotsClass: "slick-dots slick-dots-bottom flex! relative! gap-[4px]! mt-[20px]! bottom-[-15px]!"
                            },
                        },
                    ]}
                    appendDots={(dots: any) => (
                        <div>
                            <ul>
                                {dots.map((dot: any, index: number) => (
                                    <li
                                        className={
                                            dot.props.className
                                                ? `${dot.props.className} custom-li-class after:bg-(--primary)! outline-none border-none`
                                                : `custom-li-class bg-(--dark)!`
                                        }
                                        key={index}
                                    >
                                        {React.isValidElement(dot.props.children) && dot.props.children.type === 'button' ? (
                                            React.cloneElement(dot.props.children, {
                                                className: "swiper-bullet"
                                            })
                                        ) : (
                                            dot.props.children
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                >
                    {data.map((item, idx) => (
                        <div className="swiper-slide w-[178px]! mr-[64px]">
                            {item.img && (
                                <div key={idx} className="overflow-hidden text-center gap-[20px] relative grid hover:object-cover hover:w-full hover-h-full">
                                    <a
                                        href="shop-default.html"
                                        className="rounded-[50%] aspect-[1] overflow-hidden"
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className={classNameImage}
                                        />
                                    </a>
                                    <div className="wg-context text-center">
                                        <a
                                            href="shop-default.html"
                                            className="text-(--dark)! text-[16px]! leading-[24px]! hover:text-(--primary)! font-[500]!"
                                        >
                                            {item.title}
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                    ))}
                </Carousel>
            }

            {type === "cart-list" &&
                <Carousel
                    className={className}
                    slidesToShow={numberToShow}
                    draggable={false}
                    dots={false}
                    responsive={[
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 3,
                                initialSlide: 0,
                                dots: true,
                                dotsClass: "slick-dots slick-dots-bottom flex! relative! gap-[4px]! mt-[20px]! bottom-[-15px]!"
                            },
                        },
                        {
                            breakpoint: 575,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 2,
                                initialSlide: 0,
                                dots: true,
                                dotsClass: "slick-dots slick-dots-bottom flex! relative! gap-[4px]! mt-[20px]! bottom-[-15px]!"
                            },
                        },
                    ]}
                    appendDots={(dots: any) => (
                        <div>
                            <ul>
                                {dots.map((dot: any, index: number) => (
                                    <li
                                        className={
                                            dot.props.className
                                                ? `${dot.props.className} custom-li-class after:bg-(--primary)! outline-none border-none`
                                                : `custom-li-class bg-(--dark)!`
                                        }
                                        key={index}
                                    >
                                        {React.isValidElement(dot.props.children) && dot.props.children.type === 'button' ? (
                                            React.cloneElement(dot.props.children, {
                                                className: "swiper-bullet"
                                            })
                                        ) : (
                                            dot.props.children
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                >
                    {data.map((item, idx) => (
                        <div className="swiper-slide w-[178px]! mr-[64px]">
                            {item.img && (
                                <div key={idx} className="overflow-hidden text-center gap-[20px] relative grid hover:object-cover hover:w-full hover-h-full">
                                    <a
                                        href="shop-default.html"
                                        className="rounded-[50%] aspect-[1] overflow-hidden"
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className={classNameImage}
                                        />
                                    </a>
                                    <div className="wg-context text-center">
                                        <a
                                            href="shop-default.html"
                                            className="text-(--dark)! text-[16px]! leading-[24px]! hover:text-(--primary)! font-[500]!"
                                        >
                                            {item.title}
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                    ))}
                </Carousel>
            }
        </div>
    );
};

export default SlidersCustom;