"use client";

import '@ant-design/v5-patch-for-react-19';
import React, { useEffect, useRef, useState } from "react";
import { Carousel, Radio, Rate, Tooltip } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import type { CarouselRef } from "antd/es/carousel";
import DrawerCustom from '../DrawerCustom';
import Link from 'next/link';
import { EyeIcon } from 'lucide-react';
import { IoStar, } from "react-icons/io5";
import { IoMdQuote } from "react-icons/io";
import { SlHandbag, SlHeart } from "react-icons/sl";
import CartItemCustom from '../CartItemCustom';

export interface SliderItem {
    id?: string;
    img: string;
    imgHover?: string;
    title?: string;
    stock?: number;
    priceSale?: number;
    price?: number;
    volume?: { options: string[]; selected: number };
    discountPercent?: number;
    productStatus?: string;
    videoSrc?: string;
    name?: string;
    rating?: number
}

interface SlidersProps {
    className?: string;
    classNameImage?: string;
    classNameLeft?: string;
    classNameRight?: string;
    data: SliderItem[];
    numberToShow?: number;
    title?: string;
    type?: string;

}

const SlidersCustom: React.FC<SlidersProps> = ({
    className,
    classNameLeft,
    classNameRight,
    classNameImage,
    title,
    data,
    numberToShow,
    type,
}) => {
    const carouselRef = useRef<CarouselRef>(null);
    const leftCarouselRef = useRef<CarouselRef>(null);
    const rightCarouselRef = useRef<CarouselRef>(null);
    const isSyncingRef = useRef(false);

    const [isFirstSlide, setIsFirstSlide] = useState<boolean>(true);
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isLastSlide, setIsLastSlide] = useState<boolean>(false);
    const [drawerVisible, setDrawerVisible] = useState<boolean>(false);

    const goPrev = () => {
        carouselRef.current?.prev();
    };

    const goNext = () => {
        carouselRef.current?.next();
    };

    const handleBeforeChange = (current: number, next: number) => {
        setCurrentSlide(next);
        setIsFirstSlide(next === 0);

        const totalSlides = Math.ceil(data.length / (numberToShow || 1));
        setIsLastSlide(next >= totalSlides - 1);
    };

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const onCloseDrawer = () => {
        setDrawerVisible(false);
    };

    return (
        <>
            {type === "content" && (
                <div className="container px-[24px] w-full max-w-[1488px] mx-auto">
                    {title && (
                        <div className="slider-title mb-[48px] text-center gap-[12px] font-(family-name:--font-family-2)">
                            <h4 className="title text-[36px] leading-[44px] tracking-[-0.02rem] text-(--dark) font-[500]">{title}</h4>
                        </div>
                    )}
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
                                    dotsClass: "slick-dots slick-dots-bottom flex! relative! gap-[4px]! mt-[20px]! bottom-[-15px]!",
                                },
                            },
                            {
                                breakpoint: 575,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 2,
                                    initialSlide: 0,
                                    dots: true,
                                    dotsClass: "slick-dots slick-dots-bottom flex! relative! gap-[4px]! mt-[20px]! bottom-[-15px]!",
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
                                                    ? `${dot.props.className} custom-li-className after:bg-(--primary)! outline-none border-none`
                                                    : `custom-li-className bg-(--dark)!`
                                            }
                                            key={index}
                                        >
                                            {React.isValidElement(dot.props.children) && dot.props.children.type === "button"
                                                ? React.cloneElement(dot.props.children, {
                                                    className: "swiper-bullet",
                                                })
                                                : dot.props.children}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    >
                        {data.map((item, idx) => (
                            <div className="swiper-slide w-[178px]! mr-[64px]" key={idx}>
                                {item.img && (
                                    <div className="overflow-hidden text-center gap-[20px] relative grid hover:object-cover hover:w-full hover-h-full">
                                        <Link href="shop-default.html" className="rounded-[50%] aspect-[1] overflow-hidden">
                                            <img src={item.img} alt={item.title} className={classNameImage} />
                                        </Link>
                                        <div className="wg-context text-center">
                                            <Link
                                                href="shop-default.html"
                                                className="text-(--dark)! text-[16px]! leading-[24px]! hover:text-(--primary)! font-[500]!"
                                            >
                                                {item.title}
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </Carousel>
                </div>
            )}

            {type === "cart-list" && (
                <div className="relative">
                    <Carousel
                        ref={carouselRef}
                        className={className}
                        slidesToShow={numberToShow}
                        draggable
                        dots={false}
                        infinite={false}
                        beforeChange={handleBeforeChange}
                        // responsive={[
                        //     {
                        //         breakpoint: 1200,
                        //         settings: {
                        //             slidesToShow: 4,
                        //             slidesToScroll: 3,
                        //             initialSlide: 0,
                        //             dots: true,
                        //             dotsClass: "slick-dots slick-dots-bottom flex! relative! gap-[4px]! mt-[20px]! bottom-[-15px]!",
                        //         },
                        //     },
                        //     {
                        //         breakpoint: 575,
                        //         settings: {
                        //             slidesToShow: 3,
                        //             slidesToScroll: 2,
                        //             initialSlide: 0,
                        //             dots: true,
                        //             dotsClass: "slick-dots slick-dots-bottom flex! relative! gap-[4px]! mt-[20px]! bottom-[-15px]!",
                        //         },
                        //     },
                        // ]}
                        appendDots={(dots: any) => (
                            <div>
                                <ul>
                                    {dots.map((dot: any, index: number) => (
                                        <li
                                            className={
                                                dot.props.className
                                                    ? `${dot.props.className} custom-li-className after:bg-(--primary)! outline-none border-none`
                                                    : `custom-li-className bg-(--dark)!`
                                            }
                                            key={index}
                                        >
                                            {React.isValidElement(dot.props.children) && dot.props.children.type === "button"
                                                ? React.cloneElement(dot.props.children, {
                                                    className: "swiper-bullet",
                                                })
                                                : dot.props.children}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    >
                        {data.map((item: SliderItem, idx: number) => (
                            <div className="swiper-slide w-[342px] mr-[24px] select-none" key={idx}>
                                <CartItemCustom item={item} onShowDrawer={showDrawer} />Z
                            </div>
                        ))}
                    </Carousel>
                    <DrawerCustom
                        titleDrawer="Shopping Cart"
                        isOpen={drawerVisible}
                        onClose={onCloseDrawer}
                    />
                    <div className="flex gap-[12px] absolute top-[-91px] right-0 transfom-none">
                        <div
                            className={`m-[0] 
                                hover:bg-(--dark)
                                hover:duration-300
                                hover:border-(--rgba-dark-2)
                                hover:text-(--white)
                                hover:ease-in-out 
                                ${isFirstSlide ?
                                    `border-transparent 
                                    cursor-text 
                                    opacity-35 
                                    pointer-events-none 
                                    rounded-[999px] 
                                    flex w-[44px] 
                                    h-[44px] 
                                    border 
                                    items-center 
                                    justify-center 
                                    bg-(--white)`
                                    :
                                    `rounded-[999px]
                                    flex w-[44px] 
                                    h-[44px] 
                                    border 
                                    border-(--line) 
                                    items-center 
                                    justify-center 
                                    bg-(--white)`
                                }`}
                            onClick={goPrev}
                            role="button"
                            aria-label="Previous slide"
                        >
                            <LeftOutlined style={{ fontSize: 24 }} />
                        </div>
                        <div
                            className={`m-[0] 
                                hover:bg-(--dark)
                                hover:duration-300
                                hover:border-(--rgba-dark-2)
                                hover:text-(--white)
                                hover:ease-in-out 
                                ${isLastSlide ?
                                    `border-transparent 
                                    cursor-text 
                                    opacity-35 
                                    pointer-events-none 
                                    rounded-[999px] 
                                    flex w-[44px] 
                                    h-[44px] 
                                    border 
                                    items-center 
                                    justify-center 
                                    bg-(--white)`
                                    :
                                    `rounded-[999px]
                                    flex w-[44px] 
                                    h-[44px] 
                                    border 
                                    border-(--line) 
                                    items-center 
                                    justify-center 
                                    bg-(--white)`
                                }`}
                            onClick={goNext}
                            role="button"
                            aria-label="Next slide"
                        >
                            <RightOutlined style={{ fontSize: 24 }} />
                        </div>
                    </div>
                </div>
            )}

            {type === "video" && (
                <div className="container px-[24px] w-full max-w-[1488px] mx-auto">
                    {title && (
                        <div className="slider-title mb-[48px] text-center gap-[12px] font-(family-name:--font-family-2)">
                            <h4 className="title text-[36px] leading-[44px] tracking-[-0.02rem] text-(--dark) font-[500]">{title}</h4>
                        </div>
                    )}
                    <Carousel
                        className={className}
                        slidesToShow={numberToShow}
                        draggable={false}
                        dots={false}
                        infinite={false}
                        // responsive={[
                        //     {
                        //         breakpoint: 1200,
                        //         settings: {
                        //             slidesToShow: 3,
                        //             slidesToScroll: 3,
                        //             initialSlide: 0,
                        //             dots: true,
                        //             dotsClass: "slick-dots slick-dots-bottom flex! relative! gap-[4px]! mt-[20px]! bottom-[-15px]!",
                        //         },
                        //     },
                        //     {
                        //         breakpoint: 575,
                        //         settings: {
                        //             slidesToShow: 3,
                        //             slidesToScroll: 2,
                        //             initialSlide: 0,
                        //             dots: true,
                        //             dotsClass: "slick-dots slick-dots-bottom flex! relative! gap-[4px]! mt-[20px]! bottom-[-15px]!",
                        //         },
                        //     },
                        // ]}
                        appendDots={(dots: any) => (
                            <div>
                                <ul>
                                    {dots.map((dot: any, index: number) => (
                                        <li
                                            className={
                                                dot.props.className
                                                    ? `${dot.props.className} custom-li-className after:bg-(--primary)! outline-none border-none`
                                                    : `custom-li-className bg-(--dark)!`
                                            }
                                            key={index}
                                        >
                                            {React.isValidElement(dot.props.children) && dot.props.children.type === "button"
                                                ? React.cloneElement(dot.props.children, {
                                                    className: "swiper-bullet",
                                                })
                                                : dot.props.children}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    >
                        {data.map((item, idx) => (
                            <div className="cls-video h-[649px] rounded-[16px] overflow-hidden relative font-(family-name:--font-family)" key={idx}>
                                <video className='hover-video h-[649px] w-full cursor-pointer rounded-[16px] object-cover'
                                    muted
                                    playsInline
                                    loop
                                    autoPlay
                                    src={item.videoSrc}
                                />
                                <div className="cls-content 
                                        bottom-[24px] 
                                        right-[24px] 
                                        left-[24px] 
                                        p-[16px] 
                                        absolute 
                                        z-3 
                                        flex 
                                        items-center 
                                        justify-between 
                                        gap-[12px] 
                                        rounded-[61px] 
                                        bg-[rgba(63,63,63,0.8)] 
                                        transition-all 
                                        duration-300 
                                        ease-in-out"
                                >
                                    <div className="box-product flex items-center gap-[12px]">
                                        <div className="img-product rounded-[50%] overflow-hidden max-w-[78px]">
                                            <img src={item.img} alt="images/products/skincare/gel-foam.jpg" />
                                        </div>
                                        <div className="info-product grid gap-[10px]">
                                            <a
                                                href="product-detail.html"
                                                className="name-link 
                                                    cursor-pointer 
                                                    text-[16px] 
                                                    font-[700] 
                                                    leading-[24px] 
                                                    text-(--white)! 
                                                    overflow-hidden 
                                                    hover:text-(--primary)!"
                                            >
                                                {item.title}
                                            </a>
                                            <p className="price-wrap font-medium mt-2 space-x-2">
                                                <span className="price-new text-[16px] text-(--white) font-[700]">
                                                    ${item.priceSale?.toFixed(2)}
                                                </span>
                                                {item.priceSale !== undefined &&
                                                    item.price !== undefined &&
                                                    item.priceSale < item.price &&
                                                    (
                                                        <span className="price-old text-[16px] text-[rgba(158,158,147,0.6)] line-through decoration-1">
                                                            ${item.price.toFixed(2)}
                                                        </span>
                                                    )
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    <Link
                                        href=""
                                        className="icon hover-tooltip 
                                            flex 
                                            items-center 
                                            justify-center 
                                            w-[45px] 
                                            h-[45px] 
                                            bg-(--white)! 
                                            rounded-[50%] 
                                            shrink-0 
                                            text-[17px]
                                            relative"
                                    >
                                        <Tooltip title="Quick view">
                                            <EyeIcon className='h-[17px] w-[17px] text-(--dark)' />
                                        </Tooltip>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            )}

            {type === "review" && (
                <div className="container px-[24px] w-full max-w-[1488px] mx-auto">
                    {title && (
                        <div className="slider-title mb-[48px] text-center gap-[12px] font-(family-name:--font-family-2)">
                            <h4 className="title text-[36px] leading-[44px] tracking-[-0.02rem] text-(--dark) font-[500]">{title}</h4>
                        </div>
                    )}
                    <div className="review-wrapper flex">
                        <div className={classNameLeft}>
                            <Carousel
                                ref={leftCarouselRef}
                                slidesToShow={numberToShow}
                                dots={{ className: "mt-[32px]!" }}
                                draggable
                                fade
                                waitForAnimate={false}
                                beforeChange={(current, next) => {
                                    if (isSyncingRef.current) {
                                        isSyncingRef.current = false
                                        return;
                                    }
                                    isSyncingRef.current = true;
                                    rightCarouselRef.current?.goTo(next, false);
                                    setCurrentSlide(next);
                                }}
                            >
                                {data.map((item, idx) => (
                                    <div className="box-testimonial-main text-center gap-[32px] flex! flex-col items-center justify-center" key={idx}>
                                        <span className="quote icon-quote3 ">
                                            <IoMdQuote className='w-[80px] h-[80px]' />
                                        </span>
                                        <div className="content gap-[32px] grid">
                                            <div className="list-star-default flex items-center gap-[5px] justify-center">
                                                {item.rating && Array.from({ length: item.rating }, (_, i) => (
                                                    <IoStar key={i} className="icon-star h-[14px] text-[#ffaa47]" />
                                                ))}
                                            </div>
                                            <p className="text-review text-[20px] leading-[32px] pointer-events-auto">
                                                {item.title}
                                            </p>
                                            <div className="name text-md text-[16px] leading-[24px] font-[600] pointer-events-auto">{item.name}</div>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>

                        {/* Right Carousel: Images */}
                        <div className={classNameRight}>
                            <Carousel
                                ref={rightCarouselRef}
                                slidesToShow={numberToShow}
                                dots={false}
                                fade
                                draggable
                                waitForAnimate={false}
                                beforeChange={(current, next) => {
                                    if (isSyncingRef.current) {
                                        isSyncingRef.current = false
                                        return;
                                    }
                                    isSyncingRef.current = true;
                                    leftCarouselRef.current?.goTo(next, false);
                                }}
                            >
                                {data.map((item, idx) => (
                                    <div className="img-sw-thumb img-style 
                                            rounded-[16px] 
                                            overflow-hidden 
                                            relative 
                                            after:h-0 
                                            after:content-[''] 
                                            after:absolute
                                            after:left-[50%] 
                                            after:top-[50%] 
                                            after:w-[200%] 
                                            after:bg-[rgba(255,255,255,0.3)] 
                                            after:-translate-x-1/2 
                                            after:-translate-y-1/2 
                                            after:rotate-[-45deg] 
                                            after:z-[1]
                                            hover:after:h-[250%]
                                            hover:after:bg-transparent
                                            hover:after:transition-all
                                            hover:after:ease-linear
                                            hover:after:duration-600
                                            hover:[&>.image]:scale-[1.06]"
                                        key={idx}>
                                        <img
                                            src={item.img}
                                            alt={`review-img-${idx}`}
                                            className="image w-full h-full transition-all duration-2000 hover:ease-[cubic-bezier(0,0,0.44,1.38)] object-cover"
                                        />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            )}

            {type === "product-type" && (
                <div className="container px-[24px] w-full max-w-[1488px] mx-auto">
                    {title && (
                        <div className="slider-title mb-[48px] text-center gap-[12px] font-(family-name:--font-family-2)">
                            <h4 className="title text-[36px] leading-[44px] tracking-[-0.02rem] text-(--dark) font-[500]">{title}</h4>
                        </div>
                    )}
                    <div className="relative">
                        <Carousel
                            ref={carouselRef}
                            className={className}
                            slidesToShow={numberToShow}
                            dots={false}
                            infinite={false}
                        >
                            {data.map((item: SliderItem, idx: number) => (
                                <div className='gallery-item 
                                        hover:before:opacity-100 
                                        hover:before:visible 
                                        before:opacity-0 
                                        before:invisible 
                                        before:absolute 
                                        before:z-2 
                                        before:content-[""] 
                                        before:w-full 
                                        before:h-full 
                                        before:bg-[rgba(0,0,0,0.1)] 
                                        before:top-0 before:left-0 
                                        transition-all 
                                        duration-500 
                                        ease-in-out 
                                        hover:[&>.image]:scale-[1.06] 
                                        hover:[&>.image]:duration-500 
                                        hover:[&>.image]:ease-[cubic-bezier(0,0,0.44,1.18)] 
                                        hover:[&>.icon-product]:visible 
                                        hover:[&>.icon-product]:animate-fade-in rounded-[8px] 
                                        overflow-hidden'
                                >
                                    <div className='image img-style overflow-hidden scale-100 transition-all duration-500 ease-out'>
                                        <img src={item.img} className="object-cover" />
                                    </div>
                                    <Tooltip title="View Product">
                                        <Link
                                            href=""
                                            className="icon-product 
                                                hover:bg-(--dark)! 
                                                hover:text-(--white)! 
                                                invisible 
                                                transition-all 
                                                duration-300 
                                                ease-out 
                                                text-(--dark)! 
                                                bg-(--white)! 
                                                h-[48px] 
                                                w-[48px] 
                                                text-[19px] 
                                                rounded-[50%] 
                                                absolute 
                                                z-2 
                                                top-[50%] 
                                                left-[50%] 
                                                transform 
                                                translate-x-[-50%] 
                                                translate-y-[-50%] 
                                                flex 
                                                items-center 
                                                justify-center"
                                        >
                                            <SlHandbag />
                                        </Link>
                                    </Tooltip>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div >
            )}
        </>

    );
};

export default SlidersCustom;