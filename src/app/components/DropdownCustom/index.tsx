"use client";

import React, { useState, useEffect } from "react";
import type { MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";

interface itemsProps {
    imgSrc?: string;
    key: string;
    label: string
}

interface DropdownCustomProps {
    image?: string;
    items?: itemsProps[];
}

const DropdownCustom: React.FC<DropdownCustomProps> = ({ items = [] }) => {
    const [selectedItem, setSelectedItem] = useState<itemsProps | null>(items[0] || null);

    const handleMenuClick: MenuProps["onClick"] = (e) => {
        const selected = items.find((item) => item.key === e.key);
        if (selected) {
            setSelectedItem(selected);
        }
    };

    const menuItems: MenuProps["items"] = items.map((item) => ({
        key: item.key,
        label: (
            <div className='flex items-center justify-start text-[14px] bg-none gap-[6px] leading-[18px]'>
                {item.imgSrc && <img src={item.imgSrc} alt={item.label} className="w-[14px] h-[14px] rounded-full" />}
                <span>{item.label}</span>
            </div>
        ),
        className: `${selectedItem?.key === item.key ? "text-(--primary)!" : "hover:text-(--primary)!"} bg-transparent! transition duration-300`
    }));

    return (
        <Dropdown menu={{ items: menuItems, onClick: handleMenuClick }} placement="bottom" arrow>
            <a onClick={(e) => e.preventDefault()}>
                <div className="dropdown-wrapper flex items-center gap-[3px]">
                    {selectedItem?.imgSrc &&
                        <img src={selectedItem.imgSrc} alt={selectedItem.label} className="w-[14px] h-[14px] rounded-full" />
                    }
                    <span className="option-inner flex items-center justify-start text-(--white-2)! text-[14px] hover:">
                        {selectedItem?.label}
                    </span>
                    <DownOutlined className="text-(--white-2)! w-[12px] h-[12px]" />
                </div>
            </a>
        </Dropdown>
    );
};

export default DropdownCustom;