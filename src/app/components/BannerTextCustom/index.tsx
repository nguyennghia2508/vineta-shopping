"use client";

import Link from "next/link";
import React from "react";
import ButtonCustom from "../ButtonCustom";
import { ChevronRightIcon } from "lucide-react";
import FadeInCustom from "../FadeInCustom";
import BannerContentCustom from "../BannerContentCustom";

interface BannerTextCustomProps {
  images: string[];
  title: string;
  description: string;
  link?: string;
  buttonText?: string;
  isImageLeft?: boolean;
  isTitleAbove?: boolean;
}

const BannerTextCustom: React.FC<BannerTextCustomProps> = ({
  images,
  title,
  description,
  link = "#",
  buttonText,
  isImageLeft = true,
  isTitleAbove = true,
}) => {
  const hasTwoImages = images.length === 2;

  return (
    <div className="container px-6 w-full max-w-[1488px] mx-auto">
      <div className="row-content flex flex-wrap mx-[-12px] [&>*]:px-[12px]">
        {/* Hình ảnh nằm bên trái */}
        {isImageLeft && (
          <div className={`${hasTwoImages ? "md:w-7/12" : "md:w-6/12"}`}>
            {hasTwoImages ? (
              <div className="image-banner relative overflow-hidden">
                <div
                  className="image image-1 
                                    max-w-[663px] 
                                    w-full 
                                    rounded-[16px] 
                                    overflow-hidden 
                                    hover-shine 
                                    hover-img 
                                    hover:z-2 
                                    hover:relative
                                    hover:[&>.shine-item:after]:h-[250%]
                                    hover:[&>.shine-item:after]:bg-transparent
                                    hover:[&>.shine-item:after]:transition-all
                                    hover:[&>.shine-item:after]:ease-linear
                                    hover:[&>.shine-item:after]:duration-600
                                    hover:[&>.shine-item>.image]:scale-[1.06]"
                >
                  <div
                    className="shine-item img-style 
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
                                        after:z-[1]"
                  >
                    <img
                      src={images[0]}
                      data-src={images[0]}
                      alt="Banner 1"
                      className="image w-full h-full transition-all duration-2000 hover:ease-[cubic-bezier(0,0,0.44,1.38)] object-cover
                                            "
                    />
                  </div>
                </div>
                <div
                  className="image image-2 
                                    max-w-[361px] 
                                    right-0 
                                    bottom-[44px] 
                                    absolute 
                                    w-full 
                                    overflow-hidden 
                                    rounded-[16px] 
                                    hover-shine hover-img
                                    hover:[&>.shine-item:after]:h-[250%]
                                    hover:[&>.shine-item:after]:bg-transparent
                                    hover:[&>.shine-item:after]:transition-all
                                    hover:[&>.shine-item:after]:ease-linear
                                    hover:[&>.shine-item:after]:duration-600
                                    hover:[&>.shine-item>.image]:scale-[1.06]"
                >
                  <div
                    className="shine-item img-style 
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
                                        after:z-[1]"
                  >
                    <img
                      src={images[1]}
                      data-src={images[1]}
                      alt="Banner 2"
                      className="image w-full h-full transition-all duration-2000 hover:ease-[cubic-bezier(0,0,0.44,1.38)] object-cover"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="hover-shine hover-img overflow-hidden">
                <div
                  className="image-banner rounded-[16px] w-full relative overflow-hidden hover:relative
                                    hover:[&>.shine-item:after]:h-[250%]
                                    hover:[&>.shine-item:after]:bg-transparent
                                    hover:[&>.shine-item:after]:transition-all
                                    hover:[&>.shine-item:after]:ease-linear
                                    hover:[&>.shine-item:after]:duration-600
                                    hover:[&>.shine-item>.image]:scale-[1.06]"
                >
                  <div
                    className="shine-item img-style 
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
                                        after:z-[1]"
                  >
                    <img
                      src={images[0]}
                      data-src={images[0]}
                      alt="Banner 1"
                      className="image w-full h-full transition-all duration-2000 hover:ease-[cubic-bezier(0,0,0.44,1.38)] object-cover
                                            "
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Nội dung văn bản */}
        <div
          className={`${
            hasTwoImages ? "md:w-5/12" : "md:w-6/12"
          } font-(family-name:--font-family-2)`}
        >
          <FadeInCustom
            className="content-banner gap-[32px] h-full pl-[108px] flex flex-col items-start justify-center"
            animationType={
              isImageLeft
                ? hasTwoImages
                  ? "up"
                  : "right"
                : hasTwoImages
                ? "up"
                : "left"
            }
          >
            <BannerContentCustom
              title={title}
              description={description}
              isTitleAbove={isTitleAbove}
              link={link}
              buttonText={buttonText}
            />
          </FadeInCustom>
        </div>

        {/* Hình ảnh nằm bên phải */}
        {!isImageLeft && (
          <div className={`${hasTwoImages ? "md:w-7/12" : "md:w-6/12"}`}>
            {hasTwoImages ? (
              <div className="image-banner relative overflow-hidden flex justify-end">
                <div
                  className="image image-2 hover-shine hover-img
                                    max-w-[361px] 
                                    z-1 
                                    left-0 
                                    bottom-[44px] 
                                    absolute 
                                    w-full 
                                    overflow-hidden 
                                    rounded-[16px] 
                                    hover:[&>.shine-item:after]:h-[250%]
                                    hover:[&>.shine-item:after]:bg-transparent
                                    hover:[&>.shine-item:after]:transition-all
                                    hover:[&>.shine-item:after]:ease-linear
                                    hover:[&>.shine-item:after]:duration-600
                                    hover:[&>.shine-item>.image]:scale-[1.06]"
                >
                  <div
                    className="shine-item img-style 
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
                                        after:z-[1]"
                  >
                    <img
                      src={images[1]}
                      data-src={images[1]}
                      alt="Banner 2"
                      className="image w-full h-full transition-all duration-2000 hover:ease-[cubic-bezier(0,0,0.44,1.38)] object-cover"
                    />
                  </div>
                </div>
                <div
                  className="image image-1 
                                    max-w-[663px] 
                                    w-full 
                                    rounded-[16px] 
                                    overflow-hidden 
                                    hover-shine 
                                    hover-img 
                                    hover:z-2 
                                    hover:relative
                                    hover:[&>.shine-item:after]:h-[250%]
                                    hover:[&>.shine-item:after]:bg-transparent
                                    hover:[&>.shine-item:after]:transition-all
                                    hover:[&>.shine-item:after]:ease-linear
                                    hover:[&>.shine-item:after]:duration-600
                                    hover:[&>.shine-item>.image]:scale-[1.06]"
                >
                  <div
                    className="shine-item img-style 
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
                                        after:z-[1]"
                  >
                    <img
                      src={images[0]}
                      data-src={images[0]}
                      alt="Banner 1"
                      className="image w-full h-full transition-all duration-2000 hover:ease-[cubic-bezier(0,0,0.44,1.38)] object-cover"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="hover-shine hover-img overflow-hidden">
                <div
                  className="image-banner 
                                    rounded-[16px] 
                                    w-full 
                                    relative 
                                    overflow-hidden 
                                    hover:relative
                                    hover:[&>.shine-item:after]:h-[250%]
                                    hover:[&>.shine-item:after]:bg-transparent
                                    hover:[&>.shine-item:after]:transition-all
                                    hover:[&>.shine-item:after]:ease-linear
                                    hover:[&>.shine-item:after]:duration-600
                                    hover:[&>.shine-item>.image]:scale-[1.06]"
                >
                  <div
                    className="shine-item img-style 
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
                                        after:z-[1]"
                  >
                    <img
                      src={images[0]}
                      data-src={images[0]}
                      alt="Banner 1"
                      className="image w-full h-full transition-all duration-2000 hover:ease-[cubic-bezier(0,0,0.44,1.38)] object-cover
                                        "
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BannerTextCustom;
