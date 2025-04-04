"use client";

import React from "react";
import { Row, Col } from "antd";

interface BannerTextCustomProps {
    imageSrc: string;
    title: string;
    description: string;
    link?: string;
    buttonText?: string;
}

const BannerTextCustom: React.FC<BannerTextCustomProps> = ({
    imageSrc,
    title,
    description,
    link = "#",
    buttonText = "Shop Now",
}) => {
    return (
        <div className='container px-[24px] w-full max-w-[1488px] mx-auto'>
            <Row gutter={[24, 24]} className="flex items-center">
                {/* Hình ảnh */}
                <Col xs={24} md={12} className="flex justify-center">
                    <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                        <img
                            src={imageSrc}
                            alt={title}
                            className="w-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </Col>

                {/* Nội dung */}
                <Col xs={24} md={12} className="flex flex-col items-start justify-center">
                    <div className="space-y-4 animate-fadeInRight">
                        <h4 className="text-3xl font-semibold text-gray-900 dark:text-white">
                            {title}
                        </h4>
                        <p className="text-lg text-gray-700 dark:text-gray-300">{description}</p>
                        <a
                            href={link}
                            className="inline-flex items-center px-6 py-3 bg-red-500 text-white font-medium text-lg rounded-lg hover:bg-red-600 transition-all"
                        >
                            {buttonText}
                            <i className="ml-2 icon-arr-right"></i>
                        </a>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default BannerTextCustom;