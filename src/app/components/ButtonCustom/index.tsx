"use client";

import React from "react";
import { Carousel } from "antd";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";

interface ButtonProps {
    className: string,
    text: string,
    isArrow: Boolean,
    children: React.ReactElement<any, any>,
}

const ButtonCustom: React.FC<ButtonProps> = ({
    className,
    text,
    isArrow = true,
    children
}) => {

    return (
        <Button
            className={className}
        >
            {text}
            {children}
        </Button>
    );
};

export default ButtonCustom;