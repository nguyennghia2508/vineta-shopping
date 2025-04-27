"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faXTwitter, faSnapchat } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';
import NewsletterFormCustom from '../NewsletterFormCustom';

const Footer: React.FC = () => {

  const socialLinks = [
    { href: "https://www.facebook.com/", className: "social-facebook", icon: faFacebookF, parentClassName: "hover:text-(--white) hover:bg-(--facebook-cl) hover:border-none" },
    { href: "https://www.instagram.com/", className: "social-instagram", icon: faInstagram, parentClassName: "hover:text-(--white) hover:bg-[image:var(--instagram-cl)] hover:border-none" },
    { href: "https://www.snapchat.com/", className: "social-snapchat", icon: faSnapchat, parentClassName: "hover:text-(--white) hover:bg-(--snapchat-cl) hover:border-none" },
    { href: "https://x.com/", className: "social-x", icon: faXTwitter, parentClassName: "hover:text-(--white) hover:bg-(--twitter-cl) hover:border-none" },
  ];

  const contactLinks = [
    {
      href: "https://www.google.com/maps?q=123Yarranst,Punchbowl,NSW2196,Australia/",
      className: "contact-location",
      icon: faLocationDot,
      text: "123 Yarran st, Punchbowl, NSW 2196, Australia"
    },
    {
      href: "tel:18888383022",
      className: "contact-phone",
      icon: faPhone,
      text: "(64) 8342 1245"
    },
    {
      href: "mailto:support@example.com",
      className: "contact-email",
      icon: faEnvelope,
      text: "support@example.com"
    }
  ];

  const paymentLinks = [
    { src: "images/payment/EximBank.png", alt: "EximBank" },
    { src: "images/payment/ApplePay.png", alt: "ApplePay" },
    { src: "images/payment/DinersClub.png", alt: "DinersClub" },
    { src: "images/payment/Discover.png", alt: "Discover" },
    { src: "images/payment/GooglePay.png", alt: "GooglePay" },
    { src: "images/payment/Mastercard-2.png", alt: "Mastercard-2" },
    { src: "images/payment/Mastercard.png", alt: "Mastercard" },
    { src: "images/payment/Shop.png", alt: "Shop" },
    { src: "images/payment/UnionPay.png", alt: "UnionPay" },
    { src: "images/payment/Visa.png", alt: "Visa" }
  ];

  const footerLinks = [
    {
      heading: "About Us",
      links: [
        { label: "About Us", href: "about-us.html" },
        { label: "Contact Us", href: "contact-us.html" },
        { label: "Our Store", href: "store-location.html" },
        { label: "Our Story", href: "about-us.html" },
      ],
    },
    {
      heading: "Resource",
      links: [
        { label: "Privacy Policies", href: "privacy-policy.html" },
        { label: "Terms & Conditions", href: "term-and-condition.html" },
        { label: "Returns & Refunds", href: "return-and-refund.html" },
        { label: "FAQ’s", href: "faq.html" },
        { label: "Shipping", href: "shipping.html" },
      ],
    },
  ];

  return (
    <footer className="font-(family-name:--font-family) text-[16px] leading-[24px] font-[400] text-(--text) bg-[#fffcfa] block">
      <div className="footer-top border border-solid border-t-(--line) border-b-(--line) px-0 py-[32px]">
        <div className="container px-[24px] w-full max-w-[1488px] mx-auto">
          <div className="footer-top-wrap flex items-center justify-between gap-[15px] flex-wrap">
            <div className="footer-logo max-w-[157px] w-full">
              <Link href="" >
                <img src="images/logo/logo.svg" alt="logo" className="logo w-full" />
              </Link>
            </div>
            <div>
              <ul className="tf-social-icon flex flex-wrap gap-[8px]">
                {socialLinks.map((social, index) => (
                  <li key={index}>
                    <Link href={social.href} className={
                      `social-item ${social.parentClassName} 
                        flex items-center 
                        justify-center 
                        rounded-[50%] 
                        text-[22px] 
                        w-[52px] 
                        h-[52px] 
                        border 
                        border-(--line) 
                        text-[#383d38] 
                        bg-transparent 
                        transition-all 
                        ease-in-out 
                        duration-300
                      ${social.className}`}>
                      <FontAwesomeIcon icon={social.icon} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-body">
        <div className="container px-[24px] w-full max-w-[1488px] mx-auto">
          <div className="row-footer flex gap-0">
            <div className="footer-contact w-[29%] pl-0 px-[24px] py-[60px] border-r border-r-(--line)">
              <div className='footer-heading mb-[24px] text-[#0d0d0d] text-[21px] leading-[30px] font-semibold'>Business Contact</div>
              <div className='tf-collapse-content'>
                <ul className='footer-info mb-[24px] grid gap-[15px] list-none pl-0'>
                  {contactLinks.map((contact, index) => (
                    <li key={index} className='flex items-center gap-[10px] text-[#0d0d0d]'>
                      <span className="
                        hover:bg-(--primary) 
                        hover:text-(--white) 
                        hover:border-(--primary) 
                        flex 
                        justify-center 
                        items-center 
                        duration-300 
                        ease-in-out 
                        transition-all 
                        mt-[-3px] 
                        w-[32px]! 
                        h-[32px]! 
                        rounded-[50%] 
                        border 
                        border-(--line) 
                        shrink-0 
                        bg-(--white) 
                        text-(--dark) 
                        text-[14px]"
                      >
                        <FontAwesomeIcon className="w-[12px] h-[14px]" icon={contact.icon} />
                      </span>
                      <Link href={contact.href} className={
                        `contact-item cursor-pointer duration-300 ease-in-out transition-all hover:text-(--primary) text-[17px]
                      ${contact.className}`}>
                        {contact.text}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://www.google.com/maps?q=15Yarranst,Punchbowl,NSW,Australia"
                  className="tf-btn 
                    after:transition-all 
                    after:ease-in-out 
                    after:content-[''] 
                    after:absolute 
                    after:bottom-[0px] 
                    after:left-0 
                    after:right-auto 
                    after:w-full 
                    after:h-[1px] 
                    after:bg-[#444444] 
                    text-[#444444] 
                    hover:after:bg-(--primary) 
                    hover:text-(--primary) 
                    flex 
                    items-center 
                    border-none 
                    bg-transparent 
                    w-fit 
                    relative 
                    gap-[2px] 
                    duration-300 
                    transition-all 
                    ease-in-out"
                >
                  <span className="text-sm text-transform-none">
                    Get direction
                  </span>
                  <ArrowUpRightIcon className="icon-arrow-top-right w-[15px] h-[15px]" />
                </Link>
              </div>
            </div>
            <div className="footer-subscribe w-[42%] border-r border-r-(--line) p-[60px] pr-[74px] pl-[80px]">
              <div className='footer-heading mb-[24px] text-[#0d0d0d] text-[21px] leading-[30px] font-semibold'>Subscribe Newsletter</div>
              <div className='tf-collapse-content'>
                <div className='footer-newsletter gap-[32px] grid'>
                  <p className='text-[17px]'>We invite you to register to read the latest news, offers and events about our company. We promise not spam your inbox.</p>
                  <NewsletterFormCustom className='max-w-[401px]' />
                </div>
              </div>
            </div>
            <div className="footer-information w-[29%] pr-0 px-[80px] py-[60px] flex justify-between gap-[24px]">
              {footerLinks.map((section, index) => (
                <div className="footer-col-block inner-col" key={index}>
                  <div className='-heading mb-[24px] text-[#0d0d0d] text-[21px] leading-[30px] font-semibold'>
                    {section.heading}
                  </div>
                  <div className="tf-collapse-content">
                    <ul className="footer-menu-list grid gap-[15px]">
                      {section.links.map((item, i) => (
                        <li key={i}>
                          <Link className='text-[17px] transition-all duration-300 ease-in-out hover:text-(--primary)' href={item.href}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom border border-solid border-t-(--line)'>
        <div className="container px-[24px] w-full max-w-[1488px] mx-auto">
          <div className='footer-bottom-wrap flex items-center justify-between flex-wrap py-[32px] px-0 relative gap-[15px]'>
            <p className='text text-[15px] leading-[20px] text-(--dark)'>
              Copyright © 2025 by <span className='font-semibold'>Vineta</span>. All Rights Reserved.
            </p>
            <ul className="tf-payment flex flex-wrap items-center gap-[8px]">
              {paymentLinks.map((payment, index) => (
                <li key={index} className="item">
                  <img
                    src={payment.src}
                    alt={payment.alt}
                    className="payment-item max-w-[40px]"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;