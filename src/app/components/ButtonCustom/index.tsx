"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface ButtonProps {
    className: string,
    text?: string,
    isArrow?: Boolean,
    children?: React.ReactElement<any, any> | string,
    onClick?: () => void,
}

const ButtonCustom: React.FC<ButtonProps> = ({
    className,
    text,
    isArrow = true,
    children,
    onClick
}) => {

    return (
        <Button
            className={className}
            onClick={onClick}
        >
            {text}
            {children}
        </Button>
    );
};

export default ButtonCustom;