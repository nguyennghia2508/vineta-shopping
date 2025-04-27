import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

interface ContentProps {
  title: string;
  description: string;
  isTitleAbove: boolean;
  link: string;
  buttonText?: string;
}


const BannerContentCustom: React.FC<ContentProps> = ({
  title,
  description,
  isTitleAbove,
  link,
  buttonText,
}) => (
  <>
    <div className="box-title-banner gap-[12px] grid">
      {isTitleAbove ? (
        <>
          <h4 className="title-banner text-[36px] leading-[44px] text-(--dark) font-medium">{title}</h4>
          <p className="text text-[20px] leading-[24px] text-(--dark)">{description}</p>
        </>
      ) : (
        <>
          <p className="text text-[20px] leading-[24px] text-(--dark)">{description}</p>
          <h4 className="title-banner text-[36px] leading-[44px] text-(--dark) font-medium">{title}</h4>
        </>
      )}
    </div>
    <div className="box-btn-banner">
      <Link
        href={link}
        className="
          after:content-['] 
          after:absolute 
          after:top-0 
          after:left-[-100%] 
          after:w-full 
          after:h-full 
          after:opacity-60 
          after:bg-[linear-gradient(120deg,rgba(0,0,0,0)_20%,rgba(255,255,255,0.4),rgba(0,0,0,0)_70%)] 
          hover:after:animate-shine-reverse 
          cursor-pointer! 
          relative 
          shrink! 
          overflow-hidden 
          transition-all 
          duration-300 
          ease-in-out 
          border 
          border-solid 
          border-[#DF3C01] 
          bg-[#DF3C01] 
          text-(--white) 
          h-auto! 
          w-full 
          py-[14]! 
          px-[35px]! 
          rounded-[99px] 
          inline-flex 
          items-center 
          justify-center 
          gap-[5px] 
          text-[16px] 
          leading-[24px] 
          font-[500]"
      >
        {buttonText}
        <ChevronRightIcon className="flex justify-center" />
      </Link>
    </div>
  </>
);

export default BannerContentCustom;