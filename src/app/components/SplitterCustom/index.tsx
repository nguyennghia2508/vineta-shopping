"use client";

import { Col, Row } from 'antd';
import React, { useState, useRef } from 'react';
import { IoIosMenu } from "react-icons/io";
import { PiCubeLight } from "react-icons/pi";

interface ImageCompareProps {
    imgLeft: string;
    imgRight: string;
    title?: string;
}

const SplitterCustom: React.FC<ImageCompareProps> = ({ imgLeft, imgRight, title }) => {
    const [leftWidth, setLeftWidth] = useState(50);
    const isDragging = useRef(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const startDrag = (e: React.MouseEvent) => {
        isDragging.current = true;
        e.preventDefault();
    };

    const stopDrag = () => {
        isDragging.current = false;
    };

    const handleDrag = (e: React.MouseEvent) => {
        if (!isDragging.current || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        let newLeft = ((e.clientX - containerRect.left) / containerRect.width) * 100;
        newLeft = Math.min(Math.max(newLeft, 0), 100);
        setLeftWidth(newLeft);
    };

    const handleClick = (e: React.MouseEvent) => {
        if (!containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        let newLeft = ((e.clientX - containerRect.left) / containerRect.width) * 100;
        newLeft = Math.min(Math.max(newLeft, 0), 100);
        setLeftWidth(newLeft);
    };

    const services = [
        {
            title: "FREE SHIPPING",
            description: "Enjoy free shipping on all orders",
            Icon: () => (
                <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M52.4944 21.674C52.4839 21.4218 52.4098 21.1763 52.279 20.9605C52.1482 20.7446 51.9649 20.5653 51.7461 20.4393L33.2492 9.75421C33.0217 9.62286 32.7636 9.55371 32.5009 9.55371C32.2382 9.55371 31.9802 9.62286 31.7527 9.75421L13.2483 20.4393C13.021 20.5705 12.8322 20.7592 12.7009 20.9864C12.5695 21.2136 12.5003 21.4714 12.5 21.7338V42.266C12.5003 42.5285 12.5695 42.7862 12.7009 43.0134C12.8322 43.2406 13.021 43.4293 13.2483 43.5605L31.7527 54.2456C31.9802 54.377 32.2382 54.4461 32.5009 54.4461C32.7636 54.4461 33.0217 54.377 33.2492 54.2456L51.7536 43.5605C51.9809 43.4293 52.1697 43.2406 52.301 43.0134C52.4323 42.7862 52.5016 42.5285 52.5019 42.266V21.7338C52.5019 21.7338 52.4944 21.6964 52.4944 21.674ZM32.5009 12.7772L48.0123 21.7563L32.5009 30.6905L16.9895 21.7114L32.5009 12.7772ZM15.493 24.3228L31.0044 33.2794V50.3622L15.493 41.3831V24.3228ZM33.9975 50.3622V33.2794L49.5088 24.3003V41.4055L33.9975 50.3622Z" fill="black"></path>
                </svg>
            ),
        },
        {
            title: "EASY RETURNS",
            description: "Within 14 days for a return",
            Icon: () => (
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.5392 14.5393C26.0761 14.5393 19.0059 20.5928 17.4169 28.5939L14.098 24.4449L12 26.1238L17.3726 32.8395C17.6345 33.1659 18.024 33.3432 18.4216 33.3432C18.6244 33.3432 18.8298 33.2975 19.022 33.2022L27.0808 29.1727L25.8787 26.7699L19.9568 29.7302C21.0555 22.6599 27.1654 17.2256 34.5392 17.2256C42.6854 17.2256 49.3138 23.8539 49.3138 32.0001C49.3138 40.1463 42.6854 46.7746 34.5392 46.7746V49.4609C44.1668 49.4609 52 41.6277 52 32.0001C52 22.3725 44.1668 14.5393 34.5392 14.5393Z" fill="black"></path>
                </svg>
            ),
        },
        {
            title: "24/7 SUPPORT",
            description: "Outstanding premium support",
            Icon: () => (
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M49.8573 26.1742C49.3295 24.5398 49.5545 22.0864 48.1827 20.1921C46.8 18.2829 44.3952 17.7403 43.0373 16.7471C41.6938 15.7645 40.4438 13.6261 38.1837 12.8886C35.9873 12.1719 33.7414 13.1445 32 13.1445C30.2588 13.1445 28.013 12.1717 25.8163 12.8885C23.5566 13.6259 22.3056 15.7647 20.9629 16.7469C19.6065 17.7389 17.1999 18.283 15.8175 20.1919C14.4468 22.0846 14.6695 24.5436 14.1427 26.1741C13.6413 27.7259 12 29.5883 12 32.0002C12 34.4135 13.6394 36.2688 14.1427 37.8262C14.6705 39.4606 14.4455 41.9139 15.8173 43.8082C17.1999 45.7175 19.6046 46.2601 20.9627 47.2533C22.306 48.2358 23.5562 50.3743 25.8163 51.1117C28.0112 51.828 30.2606 50.8559 32 50.8559C33.737 50.8559 35.9916 51.827 38.1837 51.1118C40.4434 50.3745 41.6937 48.2361 43.0371 47.2535C44.3935 46.2615 46.8001 45.7174 48.1825 43.8085C49.5533 41.9157 49.3304 39.4569 49.8573 37.8263C50.3587 36.2744 52 34.412 52 32.0002C52 29.587 50.361 27.7323 49.8573 26.1742ZM46.8838 36.8653C46.2686 38.7696 46.4298 40.9008 45.6516 41.9753C44.863 43.0642 42.7913 43.5615 41.1926 44.7309C39.6114 45.8872 38.5032 47.7203 37.2143 48.1408C35.9949 48.5388 34.0077 47.7307 32.0001 47.7307C29.9777 47.7307 28.011 48.5405 26.7858 48.1408C25.497 47.7203 24.3904 45.8885 22.8075 44.7308C21.2183 43.5685 19.1347 43.061 18.3484 41.9752C17.5727 40.9042 17.7278 38.7583 17.1163 36.8654C16.517 35.0108 15.125 33.4049 15.125 32.0002C15.125 30.594 16.5157 28.9937 17.1162 27.135C17.7314 25.2308 17.5702 23.0995 18.3484 22.025C19.1365 20.9369 21.2098 20.4379 22.8075 19.2695C24.3937 18.1094 25.4949 16.2807 26.7856 15.8596C28.004 15.4621 29.9977 16.2696 31.9999 16.2696C34.0259 16.2696 35.9877 15.4593 37.2142 15.8596C38.5028 16.28 39.6104 18.1125 41.1926 19.2696C42.7816 20.4318 44.8653 20.9394 45.6516 22.0251C46.4274 23.0963 46.2715 25.24 46.8837 27.1349V27.1349C47.483 28.9896 48.875 30.5954 48.875 32.0002C48.875 33.4064 47.4843 35.0067 46.8838 36.8653ZM39.1987 26.9849C39.8089 27.5952 39.8089 28.5845 39.1987 29.1946L31.3779 37.0154C30.7677 37.6257 29.7783 37.6256 29.1681 37.0154L24.8014 32.6487C24.1912 32.0385 24.1911 31.0492 24.8013 30.439C25.4116 29.8289 26.401 29.8288 27.011 30.439L30.273 33.7009L36.9888 26.985C37.5991 26.3748 38.5884 26.3748 39.1987 26.9849Z" fill="black"></path>
                </svg>
            ),
        },
    ];

    return (
        <div className="container px-[24px] w-full max-w-[1488px] mx-auto font-(family-name:--font-family-2)">
            {title && (
                <div className="splitter-title mb-[48px] text-center gap-[12px]">
                    <h4 className="title text-[36px] leading-[44px] tracking-[-0.02rem] text-dark font-[500]">
                        {title}
                    </h4>
                </div>
            )}
            <div
                className="img-viewer-compare-wrap mb-[40px] relative"
                ref={containerRef}
                onMouseMove={handleDrag}
                onClick={handleClick}
                onMouseDown={startDrag}
                onMouseUp={stopDrag}
                style={{ cursor: 'col-resize' }}
            >
                <div className="image-compare relative rounded-[16px] overflow-hidden">
                    <img
                        className="licv__img h-auto w-full block rounded-0 border-0 m-0 p-0 max-w-none select-none cursor-pointer pointer-events-none"
                        data-src={imgLeft}
                        src={imgLeft}
                        alt="Before"
                    />
                    <span
                        className={`icv__label icv__label-before 
                            select-none 
                            absolute 
                            z-25 
                            overflow-hidden 
                            left-[24px] 
                            px-[24px] 
                            py-[9px] 
                            text-[var(--dark)] 
                            bg-[var(--white)] 
                            font-medium leading-[24px] 
                            rounded-[40px] 
                            bottom-[24px] 
                            font-(family-name:--font-family-2) 
                            ${leftWidth < 10 ? 'hidden' : ''}`}
                    >
                        Before
                    </span>
                    <span
                        className={`icv__label icv__label-after 
                            select-none absolute 
                            z-25 
                            overflow-hidden 
                            right-[24px] 
                            px-[24px] 
                            py-[9px] 
                            text-[var(--dark)] 
                            bg-[var(--white)] 
                            font-medium 
                            leading-[24px] 
                            rounded-[40px] 
                            bottom-[24px] 
                            font-(family-name:--font-family-2) 
                            ${leftWidth > 90 ? 'hidden' : ''}`}
                    >
                        After
                    </span>
                    <div
                        className={`icv__wrapper absolute z-10 h-full! overflow-hidden bg-cover bg-center right-0 top-0`}
                        style={{
                            width: `calc(100% - ${leftWidth}%)`
                        }}
                    >
                        <img
                            className="icv__img h-full absolute w-auto max-w-none left-auto right-[0px] pointer-events-none select-none cursor-pointer"
                            src={imgRight}
                            alt="After"
                        />
                    </div>
                    <div
                        className="icv__control absolute w-[50px] flex flex-col justify-center items-center box-border h-full top-0 z-20"
                        style={{
                            left: `calc(${leftWidth}% - 25px)`,
                        }}
                    >
                        <div className="icv__control-line w-[2px] h-[50%] z-16 bg-[rgb(255,255,255)]" />
                        <div className="icv__circle 
                                flex 
                                items-center 
                                justify-center 
                                relative 
                                rounded-full 
                                w-[60px] 
                                h-[60px] 
                                min-w-[60px] 
                                min-h-[60px] 
                                max-w-[60px] 
                                max-h-[60px] 
                                bg-[rgba(255,255,255,0.3)] 
                                backdrop-blur-[5px]"
                        >
                            <div className='w-[48px] h-[48px] rotate-90! rounded-[999px] bg-white flex items-center justify-center'>
                                <IoIosMenu className='w-[50px] h-[25px]' />
                            </div>
                        </div>
                        <div className="icv__control-line w-[2px] h-[50%] z-16 bg-[rgb(255,255,255)]" />
                    </div>
                </div>
            </div>
            <Row gutter={[24, 24]}
                className='m-0! flex-row! flex-nowrap! gap-0!'
            >
                {services.map(({ title, description, Icon }, index) => (
                    <Col
                        className='w-[464px]! mr-[24px]! block relative shrink-0 h-full! p-0!'
                        key={index}
                    >
                        <div className="tf-icon-box 
                                gap-[25px] 
                                rounded-[16px] 
                                flex 
                                flex-col 
                                items-center 
                                justify-center 
                                text-center 
                                p-[20px] 
                                border 
                                border-solid 
                                border-(--line)"
                        >
                            <Icon />
                            <div className="content grid gap-[15px]">
                                <div className="title text-[20px] leading-[20px] font-medium">{title}</div>
                                <p className="desc text-[16px] leading-[24px] text-(--text)">{description}</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default SplitterCustom