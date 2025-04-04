"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
} from "@/components/ui/select";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

const NavigationBar: React.FC = () => {
    const BASE_URL = "https://vineta-html.vercel.app/";

    const pageTypes = [
        { value: "fashion", label: "Fashion" },
        { value: "furniture", label: "Furniture" },
        { value: "electronics", label: "Electronics" },
        { value: "accessories", label: "Accessories" },
        { value: "food", label: "Food & Drink" },
        { value: "other", label: "Other" },
    ];

    const demoItems = [
        { href: "index.html", imgSrc: "images/demo/fashion-1.jpg", label: "Fashion Style 1" },
        { href: "home-fashion-02.html", imgSrc: "images/demo/fashion-2.jpg", label: "Fashion Style 2" },
        { href: "home-electronic.html", imgSrc: "images/demo/electronic.jpg", label: "Electronic" },
        { href: "home-furniture.html", imgSrc: "images/demo/furniture.jpg", label: "Furniture" },
        { href: "home-fashion-women.html", imgSrc: "images/demo/women-fashion.jpg", label: "Women Fashion" },
        { href: "home-skincare.html", imgSrc: "images/demo/comestic.jpg", label: "Skincare" },
        { href: "home-bicycle.html", imgSrc: "images/demo/bicycle.jpg", label: "Bicycle" },
        { href: "home-phonecase.html", imgSrc: "images/demo/phonecase.jpg", label: "Phone Case" },
        { href: "home-pet-accessories.html", imgSrc: "images/demo/pet-accessories.jpg", label: "Pet Accessories" },
        { href: "home-sportwear.html", imgSrc: "images/demo/sportwear.jpg", label: "Sportwear" },
    ];

    return (
        <NavigationMenu className="text-center">
            <NavigationMenuList className="box-nav-menu gap-[32px] flex items-center justify-start">
                <NavigationMenuItem className="menu-item py-[33px] px-0 hover:text-(--primary)">
                    <NavigationMenuTrigger className="group data-[state=open]:text-(--primary) leading-[21px] font-[500] text-[14px] flex items-center gap-[2px] transition-all duration-300 ease-in-out relative cursor-pointer">
                        Home
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                        className="
                            mega-home rounded-[16px] top-full left-0 right-[100px] p-[37px_128px_39px_132px] 
                            max-w-[1381px] min-w-[300px] max-h-[calc(100vh-100px)] m-auto overflow-auto z-[999] 
                            bg-blue-100 absolute shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]
                        "
                    >

                        <div className="box-search">
                            <Select>
                                <SelectTrigger className="w-40">
                                    <SelectValue placeholder="Page Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Categories</SelectLabel>
                                        {pageTypes.map((type) => (
                                            <SelectItem key={type.value} value={type.value}>
                                                {type.label}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <form className="flex items-center gap-3 mb-4">
                                <div className="relative w-full">
                                    <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <Input placeholder="Search demo..." className="pl-8" />
                                </div>
                                <Button>Search</Button>
                            </form>
                        </div>
                        <div className="row-demo">
                            {demoItems.map((item) => (
                                <Card key={item.href} className="w-36">
                                    <a href={item.href} className="block text-center">
                                        <img
                                            alt={item.label}
                                            src={`${BASE_URL}${item.imgSrc}`}
                                            className="h-40 w-full object-cover rounded-md"
                                        />
                                        <div className="mt-2 text-sm">{item.label}</div>
                                    </a>
                                </Card>
                            ))}
                        </div>
                        <div className="view-all-demo text-center">
                            <Button asChild>
                                <a href="#modalDemo">Explore all demos (17+)</a>
                            </Button>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="menu-item py-[33px] px-0 hover:text-(--primary)">
                    <NavigationMenuTrigger className="group data-[state=open]:text-(--primary) leading-[21px] font-[500] text-[14px] flex items-center gap-[2px] transition-all duration-300 ease-in-out relative cursor-pointer">
                        Shop
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                        className="
                            mega-home rounded-[16px] top-full left-[76px] right-[80px] p-[32px_123px_60px] 
                            max-w-[1381px] min-w-[300px] max-h-[calc(100vh-100px)] m-auto overflow-auto z-[999] 
                            bg-blue-100 absolute shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]
                        "
                    >

                        <div className="box-search">
                            <Select>
                                <SelectTrigger className="w-40">
                                    <SelectValue placeholder="Page Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Categories</SelectLabel>
                                        {pageTypes.map((type) => (
                                            <SelectItem key={type.value} value={type.value}>
                                                {type.label}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <form className="flex items-center gap-3 mb-4">
                                <div className="relative w-full">
                                    <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <Input placeholder="Search demo..." className="pl-8" />
                                </div>
                                <Button>Search</Button>
                            </form>
                        </div>
                        <div className="row-demo">
                            {demoItems.map((item) => (
                                <Card key={item.href} className="w-36">
                                    <a href={item.href} className="block text-center">
                                        <img
                                            alt={item.label}
                                            src={`${BASE_URL}${item.imgSrc}`}
                                            className="h-40 w-full object-cover rounded-md"
                                        />
                                        <div className="mt-2 text-sm">{item.label}</div>
                                    </a>
                                </Card>
                            ))}
                        </div>
                        <div className="view-all-demo text-center">
                            <Button asChild>
                                <a href="#modalDemo">Explore all demos (17+)</a>
                            </Button>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="menu-item py-[33px] px-0 hover:text-(--primary)">
                    <NavigationMenuTrigger className="group data-[state=open]:text-(--primary) leading-[21px] font-[500] text-[14px] flex items-center gap-[2px] transition-all duration-300 ease-in-out relative cursor-pointer">
                        Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                        className="
                            mega-home rounded-[16px] top-full left-0 right-[100px] p-[37px_128px_39px_132px] 
                            max-w-[1381px] min-w-[300px] max-h-[calc(100vh-100px)] m-auto overflow-auto z-[999] 
                            bg-blue-100 absolute shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]
                        "
                    >

                        <div className="box-search">
                            <Select>
                                <SelectTrigger className="w-40">
                                    <SelectValue placeholder="Page Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Categories</SelectLabel>
                                        {pageTypes.map((type) => (
                                            <SelectItem key={type.value} value={type.value}>
                                                {type.label}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <form className="flex items-center gap-3 mb-4">
                                <div className="relative w-full">
                                    <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <Input placeholder="Search demo..." className="pl-8" />
                                </div>
                                <Button>Search</Button>
                            </form>
                        </div>
                        <div className="row-demo">
                            {demoItems.map((item) => (
                                <Card key={item.href} className="w-36">
                                    <a href={item.href} className="block text-center">
                                        <img
                                            alt={item.label}
                                            src={`${BASE_URL}${item.imgSrc}`}
                                            className="h-40 w-full object-cover rounded-md"
                                        />
                                        <div className="mt-2 text-sm">{item.label}</div>
                                    </a>
                                </Card>
                            ))}
                        </div>
                        <div className="view-all-demo text-center">
                            <Button asChild>
                                <a href="#modalDemo">Explore all demos (17+)</a>
                            </Button>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="menu-item py-[33px] px-0 hover:text-(--primary)">
                    <NavigationMenuTrigger className="group data-[state=open]:text-(--primary) leading-[21px] font-[500] text-[14px] flex items-center gap-[2px] transition-all duration-300 ease-in-out relative cursor-pointer">
                        Pages
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                        className="
                            mega-home rounded-[16px] top-full left-0 right-[100px] p-[37px_128px_39px_132px] 
                            max-w-[1381px] min-w-[300px] max-h-[calc(100vh-100px)] m-auto overflow-auto z-[999] 
                            bg-blue-100 absolute shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]
                        "
                    >

                        <div className="box-search">
                            <Select>
                                <SelectTrigger className="w-40">
                                    <SelectValue placeholder="Page Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Categories</SelectLabel>
                                        {pageTypes.map((type) => (
                                            <SelectItem key={type.value} value={type.value}>
                                                {type.label}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <form className="flex items-center gap-3 mb-4">
                                <div className="relative w-full">
                                    <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <Input placeholder="Search demo..." className="pl-8" />
                                </div>
                                <Button>Search</Button>
                            </form>
                        </div>
                        <div className="row-demo">
                            {demoItems.map((item) => (
                                <Card key={item.href} className="w-36">
                                    <a href={item.href} className="block text-center">
                                        <img
                                            alt={item.label}
                                            src={`${BASE_URL}${item.imgSrc}`}
                                            className="h-40 w-full object-cover rounded-md"
                                        />
                                        <div className="mt-2 text-sm">{item.label}</div>
                                    </a>
                                </Card>
                            ))}
                        </div>
                        <div className="view-all-demo text-center">
                            <Button asChild>
                                <a href="#modalDemo">Explore all demos (17+)</a>
                            </Button>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="menu-item py-[33px] px-0 hover:text-(--primary)">
                    <NavigationMenuTrigger className="group data-[state=open]:text-(--primary) leading-[21px] font-[500] text-[14px] flex items-center gap-[2px] transition-all duration-300 ease-in-out relative cursor-pointer">
                        Blog
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                        className="
                            mega-home rounded-[16px] top-full left-0 right-[100px] p-[37px_128px_39px_132px] 
                            max-w-[1381px] min-w-[300px] max-h-[calc(100vh-100px)] m-auto overflow-auto z-[999] 
                            bg-blue-100 absolute shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]
                        "
                    >

                        <div className="box-search">
                            <Select>
                                <SelectTrigger className="w-40">
                                    <SelectValue placeholder="Page Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Categories</SelectLabel>
                                        {pageTypes.map((type) => (
                                            <SelectItem key={type.value} value={type.value}>
                                                {type.label}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <form className="flex items-center gap-3 mb-4">
                                <div className="relative w-full">
                                    <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <Input placeholder="Search demo..." className="pl-8" />
                                </div>
                                <Button>Search</Button>
                            </form>
                        </div>
                        <div className="row-demo">
                            {demoItems.map((item) => (
                                <Card key={item.href} className="w-36">
                                    <a href={item.href} className="block text-center">
                                        <img
                                            alt={item.label}
                                            src={`${BASE_URL}${item.imgSrc}`}
                                            className="h-40 w-full object-cover rounded-md"
                                        />
                                        <div className="mt-2 text-sm">{item.label}</div>
                                    </a>
                                </Card>
                            ))}
                        </div>
                        <div className="view-all-demo text-center">
                            <Button asChild>
                                <a href="#modalDemo">Explore all demos (17+)</a>
                            </Button>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <div className="menu-item py-[33px] px-0 hover:text-(--primary)">
                    <span className="leading-[21px] font-[500] text-[14px] flex items-center gap-[2px] transition-all duration-300 ease-in-out relative cursor-pointer">
                        Buy Theme!
                    </span>
                </div>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default NavigationBar;