"use client";

import NavigationBar from "../NavigationBar";
import { SearchIcon, UserIcon, HeartIcon, ShoppingCartIcon } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const Header: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [headerTop, setHeaderTop] = useState("unset");
  const headerRef = useRef<HTMLDivElement | null>(null);

  const getHeaderHeight = () => {
    return headerRef.current ? headerRef.current.offsetHeight : 0;
  };

  const controlNavbar = () => {
    const currentScrollPos = window.scrollY;
    const headerHeight = getHeaderHeight();

    if (currentScrollPos > prevScrollPos) {
      setHeaderTop("-87px");
    } else if (currentScrollPos < prevScrollPos && prevScrollPos > headerHeight * 2 && currentScrollPos > headerHeight) {
      setHeaderTop("0px");
    } else if (currentScrollPos <= headerHeight) {
      setHeaderTop("unset");
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [prevScrollPos]);

  const navItems = [
    { id: "search", href: "#search", toggle: "modal", icon: <SearchIcon /> },
    { id: "account", href: "#login", toggle: "offcanvas", icon: <UserIcon /> },
    { id: "wishlist", href: "wish-list.html", icon: <HeartIcon />, count: 0 },
    { id: "cart", href: "#shoppingCart", toggle: "offcanvas", icon: <ShoppingCartIcon />, count: 0 },
  ];

  return (
    <div
      ref={headerRef}
      className={`header sticky mb-[-87px] left-0 right-0 z-999 transition-all ease-out duration-300 ${headerTop === "0px" ? "bg-(--dark) shadow-[0_1px_3px_rgba(0,0,0,0.1)]" : "bg-transparent shadow-none"} text-(--white)`}
      style={{ top: headerTop }}
    >
      <div className='container px-[24px] w-full max-w-[1488px] mx-auto'>
        <div className="row wrapper-header flex items-center min-h-[87px]">
          <div className="px-[12px] hidden lg:block w-5/12">
            <NavigationBar />
          </div>
          <div className="w-1/2 md:w-1/3 xl:w-1/6 px-[12px] flex justify-center">
            <a href="home-skincare.html" className="logo-header">
              <img src="https://vineta-html.vercel.app/images/logo/logo-white.svg" alt="logo" className="logo w-[128px]" />
            </a>
          </div>
          <div className="w-5/12">
            <ul className="nav-icon flex justify-end items-center gap-[20px]">
              <ul className="nav-icon flex justify-end items-center gap-[20px]">
                {navItems.map(({ id, href, toggle, icon, count }) => (
                  <li key={id} className={`nav-${id}`}>
                    <a href={href} className="nav-icon-item hover:text-(--primary) transition-all duration-300 ease-in-out relative" {...(toggle && { 'data-bs-toggle': toggle })}>
                      {icon}
                      {count !== undefined &&
                        <span
                          className="count-box text-(--white) rounded-[50%] bg-(--primary) top-0 right-0 w-[16px] h-[16px] absolute px-[5px] font-[500] text-[11px] z-[2] mt-[3px] mr-[3px] block text-center leading-[16px] whitespace-nowrap translate-x-[50%] -translate-y-[50%] transform"
                        >
                          {count}
                        </span>}
                    </a>
                  </li>
                ))}
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;