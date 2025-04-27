"use client";

import React, { useEffect, useRef, useState } from "react";
import { Carousel, Radio, Rate, Tooltip } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import ButtonCustom from "../ButtonCustom";
import DrawerCustom from '../DrawerCustom';
import { useCartStore } from '@/app/store/cartStore';
import Link from 'next/link';
import { PiEye } from 'react-icons/pi';
import { PiShuffleFill } from "react-icons/pi";
import { SliderItem } from '../SlidersCustom';
import { SlHandbag, SlHeart } from "react-icons/sl";
interface CartItemProps {
    item: SliderItem;
    onShowDrawer: () => void;
}


const CartItemCustom: React.FC<CartItemProps> = ({
    item,
    onShowDrawer,
}) => {
    const { addToCart } = useCartStore();

    const isDragging = useRef(false);

    const [selectedVolumes, setSelectedVolumes] = useState<Record<string, string>>({});

    const handleVolumeChange = (item: SliderItem, value: string) => {
        setSelectedVolumes((prev) => ({
            ...prev,
            [item.id!]: value,
        }));
    };

    const handleAddToCart = (item: SliderItem) => {
        if (item.id && item.volume) {
            const selectedValue = selectedVolumes[item.id] || item.volume.options[item.volume.selected];
            const selectedIndex = item.volume.options.indexOf(selectedValue);

            const variantId = selectedIndex > 0 ? `${item.id}-${selectedIndex}` : '';

            const cartItem = {
                id: item.id,
                variantId,
                title: item.title || '',
                img: item.img,
                price: item.price || 0,
                priceSale: item.priceSale || 0,
                volume: {
                    options: item.volume.options,
                    selected: selectedIndex,
                },
                quantity: 1,
            };
            addToCart(cartItem);
            onShowDrawer()
        }
        onShowDrawer()
    };

    return (
        <>
            <div className="card-product group text-center rounded-[16px] bg-(--white)">
                <div className="card-product-wrapper relative aspect-[1]">
                    <Link
                        onMouseDown={() => (isDragging.current = false)}
                        onMouseMove={() => (isDragging.current = true)}
                        onClick={(e) => {
                            if (isDragging.current) {
                                e.preventDefault();
                                e.stopPropagation();
                            }
                        }}
                        href="product-detail.html"
                        className="block w-full h-full rounded-[16px] overflow-hidden relative"
                    >
                        <img
                            src={item.img}
                            alt="image-product"
                            className="img-product
                            block 
                            h-full
                            w-full
                            object-cover
                            object-center
                            max-w-full
                            transform
                            scale-100
                            align-middle
                            hover:opacity-0"
                        />
                        {item.imgHover && (
                            <img
                                src={item.imgHover}
                                alt="image-hover"
                                className="img-hover
                                absolute
                                inset-0
                                opacity-0
                                max-w-full
                                transform
                                scale-100
                                align-middle
                                block
                                h-full
                                w-full
                                object-cover
                                object-center
                                duration-700
                                hover:z-[1]
                                hover:opacity-100
                                hover:scale-105"
                            />
                        )}
                        <div className="on-sale-wrap
                        absolute
                        top-[20px]
                        right-[20px]
                        left-[20px]
                        z-[5]
                        flex
                        gap-[6px]
                        cursor-text"
                        >
                            {/* Discount badge */}
                            {item.discountPercent !== undefined && item.discountPercent > 0 && (
                                <span
                                    className="on-sale-item
                                    inline-flex
                                    justify-center
                                    items-center
                                    px-[10px]
                                    py-0
                                    min-w-[50px]
                                    w-max
                                    text-[13px]
                                    font-medium
                                    h-[26px]
                                    text-center
                                    capitalize
                                    relative
                                    bg-[var(--primary)]
                                    text-[var(--white)]
                                    rounded-[22px]"
                                >
                                    20% Off
                                </span>
                            )}

                            {/* productStatus badge */}
                            {item.productStatus && (
                                <span
                                    className={`on-sale-item
                                inline-flex
                                justify-center
                                items-center
                                px-[10px]
                                py-0
                                min-w-[50px]
                                w-max
                                text-[13px]
                                font-medium
                                h-[26px]
                                text-center
                                capitalize
                                relative
                                text-[var(--white)]
                                rounded-[22px]
                                ${item.productStatus === "Trending" ? "bg-[#a474ff]" : ""}
                                ${item.productStatus === "Hot" ? "bg-[#62d15e]" : ""}
                                `}
                                >
                                    {item.productStatus}
                                </span>
                            )}
                        </div>
                    </Link>

                    {/* Action buttons */}
                    <ul className="list-product-btn
                        top-[20px]
                        right-[20px]
                        bottom-[10px]
                        gap-[16px]
                        absolute
                        flex
                        items-center
                        flex-col
                        z-[6]"
                    >
                        <li className="wishlist 
                            opacity-0
                            translate-x-4
                            invisible
                            transition-all
                            duration-300
                            group-hover:opacity-100
                            group-hover:translate-x-0
                            group-hover:visible"
                        >
                            <Tooltip
                                classNames={{
                                    root: 'text-[12px]!'
                                }}
                                title="Add to Wishlist"
                                placement='left'>
                                <Link
                                    href=""
                                    className="box-icon
                                    flex
                                    items-center
                                    justify-center
                                    cursor-pointer
                                    w-[45px]
                                    h-[45px]
                                    text-(--dark)!
                                    relative
                                    rounded-[50%]
                                    bg-(--surface)!
                                    hover:bg-(--dark)!
                                    hover:text-(--white)!
                                    transition-all
                                    duration-300
                                    ease-in-out
                                    no-underline"
                                >
                                    <SlHeart className="icon-heart" size={16} />
                                </Link>
                            </Tooltip>
                        </li>
                        <li className="opacity-0
                            translate-x-4
                            invisible
                            transition-all
                            duration-300
                            group-hover:opacity-100
                            group-hover:translate-x-0
                            group-hover:visible
                            delay-100"
                        >
                            <Tooltip
                                classNames={{
                                    root: 'text-[12px]!'
                                }}
                                title="Quick View"
                                placement='left'>
                                <Link
                                    href=""
                                    className="box-icon
                                    flex
                                    items-center
                                    justify-center
                                    cursor-pointer
                                    w-[45px]
                                    h-[45px]
                                    text-(--dark)!
                                    relative
                                    rounded-[50%]
                                    bg-(--surface)!
                                    hover:bg-(--dark)!
                                    hover:text-(--white)!
                                    transition-all
                                    duration-300
                                    ease-in-out
                                    no-underline"
                                >
                                    <PiEye className="icon-view" size={18} />
                                </Link>
                            </Tooltip>
                        </li>
                        <li className="compare
                        opacity-0
                        translate-x-4
                        invisible
                        transition-all
                        duration-300
                        group-hover:opacity-100
                        group-hover:translate-x-0
                        group-hover:visible
                        delay-200"
                        >
                            <Tooltip
                                classNames={{
                                    root: 'text-[12px]!'
                                }}
                                title="Add to Compare"
                                placement='left'>
                                <Link
                                    href=""
                                    className="box-icon
                                    flex
                                    items-center
                                    justify-center
                                    cursor-pointer
                                    w-[45px]
                                    h-[45px]
                                    text-(--dark)!
                                    relative
                                    rounded-[50%]
                                    bg-(--surface)!
                                    hover:bg-(--dark)!
                                    hover:text-(--white)!
                                    transition-all
                                    duration-300
                                    ease-in-out
                                    no-underline"
                                >
                                    <PiShuffleFill className="icon-compare" size={18} />
                                </Link>
                            </Tooltip>
                        </li>
                    </ul>
                </div>

                <div className="card-product-info pt-[20px] px-[12px] pb-[22px] gap-[10px] grid font-(family-name:--font-family)">
                    {item.title && (
                        <Link
                            href="product-detail.html"
                            className="hover:text-(--primary)! text-(--dark)! text-[16px] leading-[25.6px] font-[500] cursor-pointer transition overflow-hidden capitalize"
                        >
                            {item.title}
                        </Link>
                    )}

                    <p className="price-wrap font-medium mt-2 space-x-2">
                        <span className="text-primary text-[16px]">
                            ${item.priceSale?.toFixed(2)}
                        </span>
                        {item.priceSale !== undefined &&
                            item.price !== undefined &&
                            item.priceSale < item.price && (
                                <span className="text-gray-400 line-through text-sm">
                                    ${item.price.toFixed(2)}
                                </span>
                            )}
                    </p>

                    {/* Volume */}
                    {item.volume && item.volume.options && item.volume.options.length > 0 && (
                        <Radio.Group
                            defaultValue={item.volume.options[item.volume.selected]}
                            className="flex! justify-center items-center mt-[2px] gap-[5px] flex-wrap"
                            optionType="button"
                            onChange={(e) => handleVolumeChange(item, e.target.value)}
                        >
                            {item.volume.options.map((v, i) => (
                                <Radio.Button
                                    key={i}
                                    value={v}
                                    className="list-volume 
                                    text-(--dark)! 
                                    border-s-[1px]! 
                                    hover:border-(--dark)! 
                                    duration-400 
                                    ease-in-out 
                                    [&.ant-radio-button-wrapper-checked]:border-(--dark)! 
                                    rounded-[35px]! 
                                    border-solid 
                                    border 
                                    border-[rgba(142,142,142,0.2)]! 
                                    before:bg-transparent! 
                                    before:w-auto"
                                >
                                    {v}
                                </Radio.Button>
                            ))}
                        </Radio.Group>
                    )}

                    {/* Add to Cart Button */}
                    {item.stock && item.stock > 0 ?
                        <div className="px-[27px] mt-[10px]">
                            <ButtonCustom
                                className="
                                hover:bg-(--primary) 
                                hover:border-(--primary) 
                                hover:duration-300 
                                hover:ease-in-out 
                                w-full 
                                bg-(--text-2) 
                                text-(--white) 
                                border 
                                border-solid 
                                border-(--text-2) 
                                rounded-[99px] 
                                py-[13] 
                                px-[32px] 
                                inline-flex 
                                items-center 
                                justify-center 
                                gap-[10px] 
                                text-[16px] l
                                eading-[24px] 
                                font-[400] 
                                h-full"
                                text="Add to Cart"
                                onClick={() => handleAddToCart(item)}
                            />
                        </div>
                        :
                        <div className="px-[27px] mt-[10px]">
                            <ButtonCustom
                                className="
                                w-full 
                                bg-(--text-2) 
                                text-(--white) 
                                opacity-80 
                                border 
                                border-solid 
                                border-(--text-2) 
                                rounded-[99px] 
                                py-[13] 
                                px-[32px] 
                                inline-flex 
                                items-center 
                                justify-center
                                gap-[10px] 
                                text-[16px] 
                                leading-[24px] 
                                font-[400] 
                                h-full"
                                text="Sold out"
                            />
                        </div>
                    }

                    {/* Stock status */}
                    {item.stock && item.stock > 0 ?
                        <div className="
                            flex 
                            justify-center 
                            text-center 
                            items-center 
                            gap-[5px]
                            mt-[10px] 
                            text-[#59a33b] 
                            text-[16px] 
                            font-[500] 
                            leading-[26px] 
                            whitespace-nowrap 
                            overflow-hidden 
                            text-ellipsis"
                        >
                            <span className="dot
                                after:bg-[#78cb57] 
                                after:content-[''] 
                                after:absolute 
                                after:top-[2px] 
                                after:right-[2px] 
                                after:left-[2px] 
                                after:bottom-[2px] 
                                after:rounded-[50%] 
                                after:z-2 
                                bg-[rgba(120,203,87,0.3411764706)] 
                                inline-block 
                                w-[10px] 
                                h-[10px] 
                                rounded-[50%] 
                                relative"
                            />
                            In stock, ready to ship
                        </div>
                        :
                        <div className="
                            flex 
                            justify-center 
                            text-center 
                            items-center 
                            gap-[5px] 
                            mt-[10px] 
                            text-[#ef5757] 
                            text-[16px] 
                            font-[500] 
                            leading-[26px] 
                            whitespace-nowrap 
                            overflow-hidden 
                            text-ellipsis"
                        >
                            <span className="dot
                                after:bg-[#ef5757] 
                                after:content-[''] 
                                after:absolute 
                                after:top-[2px] 
                                after:right-[2px] 
                                after:left-[2px] 
                                after:bottom-[2px] 
                                after:rounded-[50%] 
                                after:z-2
                                bg-[rgba(203,87,87,0.3411764706)]
                                inline-block
                                w-[10px]
                                h-[10px]
                                rounded-[50%]
                                relative"
                            />
                            Out of stock
                        </div>
                    }
                </div>
            </div>
        </>
    )
};

export default CartItemCustom;