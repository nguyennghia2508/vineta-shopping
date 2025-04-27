"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faXTwitter, faSnapchat } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import DropdownCustom from '../DropdownCustom';

const TopBar: React.FC = () => {

  const messages = [
    "Return extended to 60 days",
    "Life-time Guarantee",
    "Limited-Time Offer"
  ];

  const repeatedMessages = Array(5).fill(messages).flat();

  const languages = [
    {
      label: 'English',
      key: '1',
    },
    {
      label: 'العربية',
      key: '2',
    },
    {
      label: '简体中文',
      key: '3',
    },
    {
      label: "اردو",
      key: '4'
    }
  ];

  const socialLinks = [
    { href: "https://www.facebook.com/", className: "social-facebook", icon: faFacebookF },
    { href: "https://www.instagram.com/", className: "social-instagram", icon: faInstagram },
    { href: "https://x.com/", className: "social-x", icon: faXTwitter },
    { href: "https://www.snapchat.com/", className: "social-snapchat", icon: faSnapchat },
  ];

  const currencies = [
    { imgSrc: "https://vineta-html.vercel.app/images/country/us.png", label: "United States (USD $)", key: '1' },
    { imgSrc: "https://vineta-html.vercel.app/images/country/fr.png", label: "France (EUR €)", key: '2' },
    { imgSrc: "https://vineta-html.vercel.app/images/country/ger.png", label: "Germany (EUR €)", key: '3' },
    { imgSrc: "https://vineta-html.vercel.app/images/country/vn.png", label: "Vietnam (VND ₫)", key: '4' }
  ];

  return (
    <div className="topbar border-none bg-purple py-[7px] px-0">
      <div className='container px-[24px] w-full max-w-[1488px] mx-auto'>
        <div className='topbar-wrapper flex gap-[150px] items-center justify-between'>
          <div className="topbar-left-wrapper hidden xl:block shrink-0">
            <div className="social-icon">
              <ul className="tf-social-icon topbar-left flex flex-wrap gap-[8px]">
                {socialLinks.map((social, index) => (
                  <li key={index}>
                    <a href={social.href}
                      className={
                        `social-item
                          hover:text-(--primary)
                          hover:border-(--primary)
                          focus:outline-none
                          focus:ring-0
                          focus:shadow-none
                          w-[28px] 
                          h-[28px] 
                          flex 
                          items-center 
                          justify-center 
                          text-white 
                          text-[12px] 
                          rounded-full 
                          border 
                          border-[var(--line)] 
                          bg-transparent 
                          transition-all 
                          duration-300
                          ${social.className}`}
                    >
                      <FontAwesomeIcon icon={social.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="topbar-advert overflow-hidden">
            <div className="topbar-center-wrapper hover:[animation-play-state:paused] flex items-center animate-infinite-scroll duration-300">
              <div className="initial-child-container flex flex-[0_0_auto] flex-row items-center min-w-auto">
                {repeatedMessages.map((msg, index) => (
                  <React.Fragment key={index}>
                    {index > 0 &&
                      <div className="marquee-child-item text-white mx-[10px] flex bg-white w-[4px] h-[4px] rounded-full">
                        <span className="dot" />
                      </div>
                    }
                    <div className="marquee-child-item text-white mx-[10px] flex text-[14px] leading-[18px] font-dm-sans">
                      <p>{msg}</p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="topbar-right-setting hidden xl:block shrink-0">
            <div className="topbar-right-wrapper flex justify-end gap-[16px] items-center">
              <div className="setting-languages">
                <DropdownCustom items={languages} />
              </div>
              <div className="setting-currencies">
                <DropdownCustom items={currencies} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;