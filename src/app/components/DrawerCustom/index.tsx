"use client";

import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Drawer, Empty, InputNumber, Progress, Radio, Select, notification } from 'antd';
import { useCartStore } from '@/app/store/cartStore';
import { XIcon, TruckIcon } from 'lucide-react';
import { FaPen } from "react-icons/fa";
import Link from 'next/link';
import ButtonCustom from '../ButtonCustom';

interface DrawerProps {
    titleDrawer: string
    isOpen?: boolean
    onClose: () => void
}

const DrawerCustom: React.FC<DrawerProps> = ({
    titleDrawer,
    isOpen,
    onClose
}) => {

    const { cart, removeFromCart, updateQuantity, updateVolume } = useCartStore();

    const [isChecked, setIsChecked] = useState(false);
    const [progressValue, setProgressValue] = useState(0);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (isOpen) {
            timer = setTimeout(() => {
                setProgressValue(75);
            }, 300);
        } else {
            setProgressValue(0);
        }

        return () => clearTimeout(timer);
    }, [isOpen]);

    const handleVolumeChange = (productId: string, index: number, selectedIndex: number) => {
        updateVolume(productId, index, selectedIndex);
    };

    const handleCheckout = () => {
        if (!isChecked) {
            notification.warning({
                message: 'Please agree to the terms and conditions',
                description: 'You need to agree to the terms and conditions before proceeding.',
            });
            return;
        }

        console.log(cart);
    };

    return (
        <Drawer
            className="
                font-(family-name:--font-family) 
                [&>.ant-drawer-body]:flex! 
                [&>.ant-drawer-body]:flex-col! 
                [&>.ant-drawer-body]:p-0! 
                [&>.ant-drawer-header]:relative 
                [&>.ant-drawer-header]:border-none! 
                [&>.ant-drawer-header]:p-[32px]! 
                [&>.ant-drawer-header]:pb-[10px]! 
                [&>.ant-drawer-header]:leading-[30px] 
                [&>.ant-drawer-header]:justify-between! 
                [&>.ant-drawer-header]:text-(--dark)! 
                [&>.ant-drawer-header>.ant-drawer-header-title]:flex-row-reverse!"
            title={
                <div className="
                    after:absolute 
                    after:content-[''] 
                    after:bottom-0 
                    after:h-[1px] 
                    after:bg-(--line) 
                    after:left-[32px] 
                    after:right-[32px] 
                    flex 
                    items-center 
                    gap-2 
                    text-[21px] 
                    font-[500]!"
                >
                    <span>{titleDrawer}</span>
                    <span className="text-sm text-gray-500">({cart.length})</span>
                </div>
            }
            placement="right"
            onClose={onClose}
            open={isOpen}
            width={520}
        >
            <div className="tf-mini-cart-threshold pt-[24px] pb-[21px] px-[32px]">
                <div className="text text-[14px] leading-[22.4px] mb-[23px]">
                    Spend <span className="fw-medium font-[500]">$100</span> more to get <span className="fw-medium font-[500]">Free Shipping</span>
                </div>
                <div className="relative w-full">
                    <Progress
                        percent={progressValue}
                        showInfo={false}
                        className="
                            [&>.ant-progress-outer>.ant-progress-inner>.ant-progress-bg-outer]:bg-(--primary)! 
                            [&>.ant-progress-outer>.ant-progress-inner>.ant-progress-bg-outer]:transition-[width]!
                            [&>.ant-progress-outer>.ant-progress-inner>.ant-progress-bg-outer]:duration-2000
                            [&>.ant-progress-outer>.ant-progress-inner>.ant-progress-bg-outer]:ease-in-out"
                    />
                    <div
                        style={{ left: `${progressValue - 5}%` }}
                        className="
                            absolute 
                            top-1/2 
                            w-[35px] 
                            h-[35px] 
                            flex 
                            items-center 
                            justify-center 
                            rounded-[50%] 
                            border-[3px] 
                            borderborder-solid 
                            border-[#ffb5b5] 
                            bg-(--primary) 
                            translate-y-[-50%] 
                            transition-left 
                            duration-2000 
                            ease-in-out"
                    >
                        <TruckIcon
                            className="w-[18px] h-[18px] text-(--white)"
                        />
                    </div>
                </div>
            </div>
            <div className="tf-mini-cart-wrap flex flex-col grow relative overflow-hidden">
                <div className="tf-mini-cart-main flex-auto relative">
                    <div className="tf-mini-cart-sroll
                            [&::-webkit-scrollbar]:w-[4px] 
                            [&::-webkit-scrollbar-thumb]:bg-[var(--primary)] 
                            absolute 
                            top-0 
                            bottom-0 
                            left-0 
                            right-0 
                            overflow-auto"
                    >
                        <div className="tf-mini-cart-items flex gap-[12px] flex-col">
                            {cart.length > 0 ? (
                                cart.map((item, index) => (
                                    <div key={`${item.id}-${item.volume.options[item.volume.selected]}`} className="tf-mini-cart-item file-delete px-[32px] flex gap-[10px]">
                                        <div className="tf-mini-cart-image block w-[95px] h-auto shrink-0 rounded-[8px] overflow-hidden">
                                            <Link href="product-detail.html">
                                                <img src={item.img} alt={item.title} className='w-full h-full object-cover' />
                                            </Link>
                                        </div>
                                        <div className="tf-mini-cart-info grow flex flex-col gap-[8px]">
                                            <div className="flex justify-between">
                                                <Link className="title-link text-(--dark)! text-[16px] leading-[24px] font-[500] hover:text-(--primary)!" href="">
                                                    {item.title}
                                                </Link>
                                                <XIcon
                                                    className="w-[16px] h-[24px]"
                                                    onClick={() => removeFromCart(item.id, item.volume.selected, item.variantId)}
                                                />
                                            </div>

                                            <div className="info-variant">
                                                <Select
                                                    popupMatchSelectWidth={false}
                                                    suffixIcon={<FaPen className='icon-arrow absolute text-(--dark)! right-0 top-[-20%]! flex text-[9px] leading-[10px]' />}
                                                    className='
                                                        flex 
                                                        hover:[&>.ant-select-arrow>.icon-arrow]:text-(--primary)! 
                                                        gap-[8px] 
                                                        relative 
                                                        w-max 
                                                        [&_.ant-select-selector]:pr-[5px]! 
                                                        [&_.ant-select-selector]:w-max! 
                                                        [&_.ant-select-selector]:relative 
                                                        [&_.ant-select-selector]:gap-[10px] 
                                                        [&_.ant-select-selector]:border-none! 
                                                        [&_.ant-select-selector]:outline-none! 
                                                        [&_.ant-select-selector]:shadow-none! 
                                                        [&_.ant-select-selector]:pl-0!'
                                                    value={item.volume.options[item.volume.selected]}
                                                    onChange={(value) => {
                                                        const selectedIndex = item.volume.options.findIndex(v => v === value);
                                                        handleVolumeChange(item.id, index, selectedIndex);
                                                    }}
                                                    dropdownStyle={{ padding: 0, minHeight: "auto", border: "none" }}
                                                    dropdownRender={(menu) => (
                                                        <div className='dropdown-content
                                                        [&_.ant-select-item-option-selected]:bg-gray-400!
                                                        [&_.ant-select-item-option-selected]:rounded-none!
                                                        [&_.ant-select-item-option:not(.ant-select-item-option-selected)]:rounded-none!
                                                        [&_.ant-select-item-option:not(.ant-select-item-option-selected)]:hover:rounded-none!
                                                        [&_.ant-select-item-option-selected]:text-(--white)!
                                                        [&_.ant-select-item-option:not(.ant-select-item-option-selected)]:text-(--dark)
                                                        [&_.ant-select-item-option:not(.ant-select-item-option-selected)]:bg-(--white)
                                                        [&_.ant-select-item-option:not(.ant-select-item-option-selected):hover]:bg-gray-400!
                                                        [&_.ant-select-item-option:not(.ant-select-item-option-selected):hover]:text-(--white)!'
                                                        >
                                                            {menu}

                                                        </div>
                                                    )}
                                                    options={item.volume.options.map((v) => ({
                                                        value: v,
                                                        label: <div className='text flex text-[12px] leading-[18px] min-h-auto pl-0!'>{v}</div>
                                                    }))}
                                                />
                                            </div>

                                            <p className="price-wrap text-sm fw-medium space-x-1">
                                                <span className="new-price text-primary">${item.priceSale.toFixed(2)}</span>
                                                {item.price > item.priceSale && (
                                                    <span className="old-price text-gray-400 line-through">
                                                        ${item.price.toFixed(2)}
                                                    </span>
                                                )}
                                            </p>

                                            <div className="wg-quantity w-[90px] bg-[#f1f1f1] overflow-hidden rounded-[43px] flex justify-between">
                                                <button
                                                    className="btn-quantity minus-btn 
                                                        hover:text-(--primary) 
                                                        h-[30px] 
                                                        w-[30px] 
                                                        text-[18px] 
                                                        flex 
                                                        p-0 
                                                        items-center 
                                                        justify-center 
                                                        text-[#011624] 
                                                        bg-transparent 
                                                        border 
                                                        border-solid 
                                                        border-transparent 
                                                        transition-all 
                                                        duration-300 
                                                        ease-in-out 
                                                        cursor-pointer"
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    disabled={item.quantity <= 1}
                                                >
                                                    -
                                                </button>
                                                <InputNumber
                                                    min={1}
                                                    value={item.quantity}
                                                    onChange={(value) => updateQuantity(item.id, Number(value))}
                                                    className="quantity-product 
                                                        focus-within:border! 
                                                        focus-within:border-[#d9d9d9]! 
                                                        focus-within:outline-none! 
                                                        focus-within:bg-(--white)! 
                                                        focus-within:shadow-none! 
                                                        focus:border! 
                                                        focus:border-[#d9d9d9]! 
                                                        focus:outline-none! 
                                                        focus:bg-(--white)! 
                                                        focus:shadow-none! 
                                                        hover:border-[#d9d9d9]! 
                                                        h-[30px]! 
                                                        w-[30px]! 
                                                        text-[14px]! 
                                                        bg-transparent! 
                                                        font-[700]! 
                                                        leading-[16.8px] 
                                                        tracking-[-0.03rem]! 
                                                        border-0! 
                                                        p-0! 
                                                        text-center 
                                                        text-(--dark)! 
                                                        cursor-pointer!"
                                                    controls={false}
                                                />
                                                <button
                                                    className="btn-quantity plus-btn 
                                                        hover:text-(--primary) 
                                                        h-[30px] 
                                                        w-[30px] 
                                                        text-[18px] 
                                                        flex 
                                                        p-0 
                                                        items-center 
                                                        justify-center 
                                                        text-[#011624] 
                                                        bg-transparent 
                                                        border 
                                                        border-solid 
                                                        border-transparent 
                                                        transition-all 
                                                        duration-300 
                                                        ease-in-out 
                                                        cursor-pointer"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <Empty />
                            )}
                        </div>
                    </div>
                </div>
                <div className='tf-mini-cart-bottom shrink-0 shadow-[0_4px_20px_0_rgba(0,0,0,0.1019607843)]'>
                    <div className='tf-mini-cart-bottom-wrap px-[32px] pt-[24px] pb-[34px]'>
                        <div className='tf-cart-totals-discounts flex items-center justify-between mb-[10px]'>
                            <div className='tf-cart-total text-[21px] leading-[30px] font-[500]'>Total:</div>
                            <div className='tf-totals-total-value text-[21px] leading-[30px] font-[500]'>
                                ${cart.reduce((total, item) => total + item.priceSale * item.quantity, 0).toFixed(2)} USD
                            </div>
                        </div>
                        <div className='tf-cart-tax opacity-80 pb-[14px] border-b border-solid border-b-(--line) mb-[13px] text-[14px] leading-[20px]'>Taxes and shipping calculated at checkout</div>
                        <div className='tf-cart-checkbox flex items-center gap-[8px] cursor-pointer mb-[32px]'>
                            <div className='tf-checkbox-wrapp flex place-items-center relative overflow-hidden'>
                                <Checkbox
                                    onChange={(e) => setIsChecked(e.target.checked)}
                                    className="[&_.ant-checkbox-input:focus-visible]:outline-none! [&_.ant-checkbox-inner]:outline-none! [&_.ant-checkbox-checked>.ant-checkbox-inner]:bg-(--primary)! [&:not(&.ant-checkbox-wrapper-disabled):hover]:[&_.ant-checkbox-inner]:border-[#d9d9d9]! [&_.ant-checkbox:not(.ant-checkbox-disabled):hover]:[&_.ant-checkbox-inner]:border-(--primary)!">
                                    <div className='cursor-pointer text-[14px] leading-[20px]'>
                                        I agree with the <Link className='underline! underline-offset-[2px]! text-(--dark)! hover:text-(--primary)!' href="">terms and conditions</Link>
                                    </div>
                                </Checkbox>
                            </div>
                        </div>
                        <div className='tf-mini-cart-view-checkout flex gap-[10px]'>
                            <ButtonCustom
                                className="normal-case after:content-['] after:absolute after:top-0 after:left-[-100%] after:w-full after:h-full after:opacity-60 after:bg-[linear-gradient(120deg,rgba(0,0,0,0)_20%,rgba(255,255,255,0.4),rgba(0,0,0,0)_70%)] hover:after:animate-shine-reverse cursor-pointer! relative shrink! overflow-hidden transition-all duration-300 ease-in-out border border-solid border-(--dark-2) bg-(--dark-2) text-(--white) h-auto! w-full py-[13px]! px-[32px] rounded-[99px] inline-flex items-center justify-center gap-[10px] text-[16px] leading-[24px] font-[500]"
                                onClick={handleCheckout}
                                text="Check out"
                            />
                            <ButtonCustom
                                className="normal-case hover:text-(--white) hover:border-(--dark-2) hover:bg-(--dark-2) cursor-pointer! relative shrink! overflow-hidden transition-all duration-300 ease-in-out border border-solid border-(--dark-2) bg-(--white) text-(--dark-2) h-auto! w-full py-[13px]! px-[32px] rounded-[99px] inline-flex items-center justify-center gap-[10px] text-[16px] leading-[24px] font-[500]"
                                text="View cart"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </Drawer>
    );
};

export default DrawerCustom;