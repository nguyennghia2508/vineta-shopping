"use client";

import NavigationBar from "../NavigationBar";
import { SearchIcon, UserIcon, HeartIcon, ShoppingCartIcon } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import DrawerCustom from "../DrawerCustom";
import { useCartStore } from "@/app/store/cartStore";

const Header: React.FC = () => {

  const { cart } = useCartStore();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [headerTop, setHeaderTop] = useState("unset");
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);

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
    { id: "search", toggle: "modal", icon: <SearchIcon /> },
    { id: "account", toggle: "offcanvas", icon: <UserIcon /> },
    { id: "wishlist", icon: <HeartIcon />, count: 0 },
    { id: "cart", toggle: "offcanvas", icon: <ShoppingCartIcon />, count: cart.length },
  ];

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <header
      ref={headerRef}
      className={`header sticky mb-[-87px] left-0 right-0 z-999 transition-all ease-out duration-300 ${headerTop === "0px" ? "bg-(--dark) shadow-[0_1px_3px_rgba(0,0,0,0.1)]" : "bg-transparent shadow-none"} text-(--white)`}
      style={{ top: headerTop }}
    >
      <div className='container px-[12px] w-full max-w-[1488px] mx-auto'>
        <div className="row wrapper-header flex items-center min-h-[87px]">
          <div className="px-[12px] hidden lg:block w-5/12 font-(family-name:--font-family-2)">
            <NavigationBar />
          </div>
          <div className="w-1/2 md:w-1/3 xl:w-1/6 px-[12px] flex justify-center">
            <a href="home-skincare.html" className="logo-header">
              <img src="images/logo/logo-white.svg" alt="logo" className="logo w-[128px]" />
            </a>
          </div>
          <div className="px-[12px] w-5/12">
            <ul className="nav-icon flex justify-end items-center gap-[20px] font-(family-name:--font-family-2)">
              {navItems.map(({ id, toggle, icon, count }) => (
                <li key={id} className={`nav-${id}`}>
                  <button
                    type="button"
                    onClick={() => {
                      if (id === "cart") showDrawer();
                    }}
                    className="nav-icon-item hover:text-(--primary) transition-all duration-300 ease-in-out relative"
                  >
                    {icon}
                    {count !== undefined && (
                      <span className="count-box 
                        text-(--white) 
                        rounded-[50%] 
                        bg-(--primary) 
                        top-0 
                        right-0 
                        w-[16px] 
                        h-[16px] 
                        absolute 
                        px-[5px] 
                        font-[500] 
                        text-[11px] 
                        z-[2] 
                        mt-[3px] 
                        mr-[3px] 
                        block 
                        text-center 
                        leading-[16px] 
                        whitespace-nowrap 
                        translate-x-[50%] 
                        -translate-y-[50%] 
                        transform"
                      >
                        {count}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <DrawerCustom
        titleDrawer="Shopping Cart"
        isOpen={drawerVisible}
        onClose={onCloseDrawer}
      />
    </header>
  );
};

export default Header;