"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface ItemProps {
    children: React.ReactNode;
    className?: string;
    animationType: "up" | "left" | "right" | "down";
    delay?: number;
}

const FadeInCustom: React.FC<ItemProps> = ({
    children,
    className,
    animationType,
    delay = 0,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={clsx(
                "opacity-0 transition-all duration-700",
                isVisible && `animate-fade-in-${animationType}`,
                className
            )}
            style={{ animationDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default FadeInCustom;