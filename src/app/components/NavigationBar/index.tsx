"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";
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
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"
import {
    Form,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import Link from "next/link";

const pageTypes = [
    { value: "none", label: "Page Type" },
    { value: "fashion", label: "Fashion" },
    { value: "furniture", label: "Furniture" },
    { value: "electronics", label: "Electronics" },
    { value: "accessories", label: "Accessories" },
    { value: "food", label: "Food & Drink" },
    { value: "other", label: "Other" },
];

const pageTypeValues = pageTypes.map(p => p.value);
const FormSchema = z.object({
    type: z.union([
        z.enum(pageTypeValues as [string, ...string[]]),
        z.literal(undefined),
    ]).optional(),
    keyword: z.string().min(2, {
        message: "Keyword must be at least 2 characters.",
    }),
})

const NavigationBar: React.FC = () => {
    const BASE_URL = "https://vineta-html.vercel.app/";

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            keyword: "",
            type: undefined,
        },
    })

    const [isSelectOpen, setIsSelectOpen] = useState(false);

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

    const itemFeatures = [
        {
            heading: "Shop Layout",
            links: [
                { label: "Default", href: "shop-default.html" },
                { label: "Filter Left Sidebar", href: "shop-left-sidebar.html" },
                { label: "Filter Right Sidebar", href: "shop-right-sidebar.html" },
                { label: "Horizontal Filter", href: "shop-horizontal-filter.html" },
                { label: "Filter Drawer", href: "shop-default.html" },
                { label: "Collection List", href: "shop-collection-list.html" },
                { label: "Sub Collection 1", href: "shop-sub-collection.html" },
                { label: "Sub Collection 2", href: "shop-sub-collection-02.html" },
                { label: "Grid 3 Columns", href: "shop-grid-3-columns.html" },
                { label: "Grid 4 Columns", href: "shop-default.html" },
                { label: "Full Width", href: "shop-fullwidth.html" },
            ],
        },
        {
            heading: "Shop Lists",
            links: [
                { label: "Pagination Links", href: "shop-default.html" },
                { label: "Load More Button", href: "shop-load-more-button.html" },
                { label: "Infinity Scroll", href: "shop-infinity-scroll.html", status: "Hot" },
                { label: "Filter Sidebar", href: "shop-filter-sidebar.html" },
                { label: "Filter Hidden", href: "shop-filter-hidden.html" },
            ],
        },
        {
            heading: "Product Styles",
            links: [
                { label: "Product Style 1", href: "product-style-01.html" },
                { label: "Product Style 2", href: "product-style-02.html" },
                { label: "Product Style 3", href: "product-style-03.html" },
                { label: "Product Popup", href: "home-fashion-02.html" },
            ],
        },
    ];

    const onSubmit = (data: z.infer<typeof FormSchema>) => {
        console.log(data)
        toast.success("Find ok", {
            description: data.type
                ? `Your items ${data.type}: ${data.keyword}`
                : `Your items: ${data.keyword}`,
            position: "top-right",
        });
    }

    return (
        <NavigationMenu className="text-center">
            <NavigationMenuList className="box-nav-menu gap-[32px] flex items-center justify-start">
                <NavigationMenuItem className="menu-item py-[33px] px-0 hover:text-(--primary)">
                    <NavigationMenuTrigger
                        className="group 
                            data-[state=open]:text-(--primary) 
                            leading-[21px] 
                            font-[500] 
                            text-[14px] 
                            flex 
                            items-center 
                            gap-[2px] 
                            transition-all 
                            duration-300 
                            ease-in-out 
                            relative 
                            cursor-pointer"
                    >
                        Home
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                        onPointerLeave={(e) => {
                            if (isSelectOpen) {
                                e.preventDefault();
                            }
                        }}
                        className="mega-home
                            animate-[var(--animate-navigation-in-bottom)]
                            rounded-[16px]
                            top-full
                            opacity-0
                            left-0
                            right-[100px]
                            p-[37px_128px_39px_132px] 
                            max-w-[1381px]
                            min-w-[300px]
                            max-h-[calc(100vh-100px)]
                            m-auto
                            overflow-x-hidden
                            overflow-y-auto
                            bg-(--white) 
                            absolute 
                            shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]
                            [&::-webkit-scrollbar]:w-[5px]
                            [&::-webkit-scrollbar]:rounded-[4px]
                            [&::-webkit-scrollbar-thumb]:bg-(--bg-scrollbar-thumb)"
                    >
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="box-search
                                flex
                                gap-[10px]
                                max-w-[635px]
                                mt-0
                                mx-auto
                                mb-[20px]"
                            >
                                <div className="select-box relative pointer-events-auto">
                                    <FormField
                                        control={form.control}
                                        name="type"
                                        render={({ field }) => (
                                            <FormItem>
                                                <Select
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    onOpenChange={(open) => setIsSelectOpen(open)}>
                                                    <SelectTrigger
                                                        className="page-type
                                                            min-w-[192px] 
                                                            h-[48px]!
                                                            px-[20px]
                                                            py-[12px]
                                                            pr-[32px]
                                                            w-full
                                                            border-[1px] 
                                                            border-solid
                                                            border-[var(--line)]
                                                            rounded-[999px]
                                                            appearance-none
                                                            bg-transparent
                                                            text-[16px]
                                                            leading-[24px]
                                                            transition-all 
                                                            duration-300
                                                            ease-in-out
                                                            text-[var(--text)]
                                                            focus:border-(--dark)
                                                            focus:outline-none
                                                            focus:ring-0
                                                            focus:shadow-none
                                                            focus-visible:outline-none
                                                            focus-visible:ring-0
                                                            focus-visible:shadow-none"
                                                    >
                                                        <SelectValue placeholder="Page Type" />
                                                    </SelectTrigger>
                                                    <SelectContent
                                                        className="z-[9999] font-(family-name:--font-family-2) overflow-y-auto max-h-[20rem]"
                                                    >
                                                        {pageTypes.map((type, index) => (
                                                            <SelectItem key={index} value={type.value}>
                                                                {type.label}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grow-1 w-full relative">
                                    <FormField
                                        control={form.control}
                                        name="keyword"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className="relative">
                                                    <Input
                                                        placeholder="Search demo..."
                                                        className="
                                                        px-[20px]
                                                        py-[12px]
                                                        h-[48px]
                                                        pr-[42px]
                                                        rounded-[43px]
                                                        text-[16px]!
                                                        leading-[24px]
                                                        text-(--text)
                                                        border-(--line)
                                                        focus:border-(--dark)
                                                        focus:outline-none
                                                        focus:ring-0
                                                        focus:shadow-none
                                                        focus-visible:outline-none
                                                        focus-visible:ring-0
                                                        focus-visible:shadow-none"
                                                        {...field}
                                                    />
                                                    <Button
                                                        type="submit"
                                                        className="submit-search
                                                        absolute
                                                        right-[16px]
                                                        top-2/4
                                                        transform
                                                        -translate-y-1/2
                                                        p-0
                                                        bg-transparent
                                                        border-[0]
                                                        text-[var(--dark)]"
                                                    >
                                                        <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-[25px]! h-[25px]!" />
                                                    </Button>
                                                </div>
                                                <FormMessage className="absolute top-[55px] w-full text-center" />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </form>
                        </Form>
                        <div
                            className="row-demo
                                grid
                                grid-cols-[repeat(5,_1fr)]
                                gap-x-[24px]
                                gap-y-[32px]"
                        >
                            {demoItems.map((item) => (
                                <div
                                    key={item.href}
                                    className="row-item
                                        grid
                                        gap-[15px]
                                        text-center"
                                >
                                    <Link
                                        href={item.href}
                                        className="
                                            border-[1px]
                                            border-solid
                                            border-[var(--line)]
                                            rounded-[6px]
                                            overflow-hidden
                                            relative
                                            hover:border-(--primary)
                                            [transition:all_0.3s_ease-in-out]"
                                    >
                                        <Image
                                            alt={item.label}
                                            src={`${BASE_URL}${item.imgSrc}`}
                                            className=""
                                            width={200}
                                            height={200}
                                        />
                                        <div
                                            className="demo-label
                                            absolute
                                            top-[10px]
                                            right-[10px]
                                            flex
                                            gap-[5px]"
                                        >
                                            <span className="new-item
                                                text-[11px]
                                                leading-[15px]
                                                px-[8px]
                                                py-0
                                                rounded-[4px]
                                                bg-[var(--primary)]
                                                text-[var(--white)]"
                                            >
                                                New
                                            </span>
                                            <span className="hot-item
                                                text-[11px]
                                                leading-[15px]
                                                px-[8px]
                                                py-0
                                                rounded-[4px]
                                                bg-[#62d15e]
                                                text-(--white)"
                                            >
                                                Hot
                                            </span>
                                        </div>
                                    </Link>
                                    <Link
                                        href={item.href}
                                        className="
                                        text-sm 
                                        leading-[21px]
                                        no-underline
                                        cursor-pointer
                                        inline-block
                                        text-[var(--dark)]
                                        hover:text-(--primary)
                                        [transition:all_0.3s_ease-in-out]"
                                    >
                                        {item.label}
                                    </Link>
                                </div>
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
                    <NavigationMenuTrigger
                        className="group 
                            data-[state=open]:text-(--primary) 
                            leading-[21px] 
                            font-[500] 
                            text-[14px] 
                            flex 
                            items-center 
                            gap-[2px] 
                            transition-all 
                            duration-300 
                            ease-in-out 
                            relative 
                            cursor-pointer"
                    >
                        Shop
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                        className="mega-home
                            animate-[var(--animate-navigation-in-bottom)] 
                            rounded-[16px] 
                            top-full 
                            left-[76px] 
                            right-[80px] 
                            p-[32px_123px_60px]
                            max-w-[1381px] 
                            min-w-[300px] 
                            max-h-[calc(100vh-100px)] 
                            m-auto 
                            overflow-x-hidden
                            overflow-y-auto 
                            z-[999] 
                            bg-(--white) 
                            absolute 
                            shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]"
                    >

                        {itemFeatures.map((section, index) => (
                            <div className="footer-col-block inner-col" key={index}>
                                <div className='-heading mb-[24px] text-(--dark) text-[21px] leading-[30px] font-semibold'>
                                    {section.heading}
                                </div>
                                <div className="tf-collapse-content">
                                    <ul className="footer-menu-list grid gap-[15px]">
                                        {section.links.map((item, index) => (
                                            <li key={index}>
                                                <Link className='text-[17px] text-(--dark) transition-all duration-300 ease-in-out hover:text-(--primary)' href={item.href}>{item.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="menu-item py-[33px] px-0 hover:text-(--primary)">
                    <NavigationMenuTrigger
                        className="group 
                            data-[state=open]:text-(--primary) 
                            leading-[21px] 
                            font-[500] 
                            text-[14px] 
                            flex 
                            items-center 
                            gap-[2px] 
                            transition-all 
                            duration-300 
                            ease-in-out 
                            relative cursor-pointer"
                    >
                        Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                        className="
                            mega-
                            animate-[var(--animate-navigation-in-bottom)]
                            rounded-[16px]
                            top-full
                            left-[152px]
                            right-[100px]
                            p-[37px_128px_39px_132px] 
                            max-w-[1381px]
                            min-w-[300px]
                            max-h-[calc(100vh-100px)]
                            m-auto
                            overflow-auto
                            z-[999] 
                            bg-(--white)
                            absolute shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]
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
                                        <Image
                                            alt={item.label}
                                            src={`${BASE_URL}${item.imgSrc}`}
                                            className="h-40 w-full object-cover rounded-md"
                                            width={144}
                                            height={144}
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
                    <NavigationMenuTrigger
                        className="group
                            data-[state=open]:text-(--primary) 
                            leading-[21px] 
                            font-[500] 
                            text-[14px] 
                            flex 
                            items-center 
                            gap-[2px] 
                            transition-all 
                            duration-300 
                            ease-in-out 
                            relative cursor-pointer"
                    >
                        Pages
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                        className="
                            mega-home
                            animate-[var(--animate-navigation-in-bottom)]
                            rounded-[16px]
                            top-full
                            left-[228px]
                            right-[100px]
                            p-[37px_128px_39px_132px] 
                            max-w-[1381px]
                            min-w-[300px]
                            max-h-[calc(100vh-100px)]
                            m-auto
                            overflow-auto
                            z-[999] 
                            bg-(--white)
                            absolute
                            shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]
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
                                        <Image
                                            alt={item.label}
                                            src={`${BASE_URL}${item.imgSrc}`}
                                            className="h-40 w-full object-cover rounded-md"
                                            width={144}
                                            height={144}
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
                    <NavigationMenuTrigger
                        className="group 
                            data-[state=open]:text-(--primary) 
                            leading-[21px] 
                            font-[500] 
                            text-[14px] 
                            flex 
                            items-center 
                            gap-[2px] 
                            transition-all 
                            duration-300 
                            ease-in-out 
                            relative cursor-pointer"
                    >
                        Blogs
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                        className="
                            mega-home rounded-[16px] top-full left-0 right-[100px] p-[37px_128px_39px_132px] 
                            max-w-[1381px] min-w-[300px] max-h-[calc(100vh-100px)] m-auto overflow-auto z-[999] 
                            bg-(--white) absolute shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]
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
                                        <Image
                                            alt={item.label}
                                            src={`${BASE_URL}${item.imgSrc}`}
                                            className="h-40 w-full object-cover rounded-md"
                                            width={144}
                                            height={144}
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
                    <span className="
                        leading-[21px] 
                        font-[500] 
                        text-[14px] 
                        flex 
                        items-center 
                        gap-[2px] 
                        transition-all 
                        duration-300 
                        ease-in-out 
                        relative 
                        cursor-pointer"
                    >
                        Buy Theme!
                    </span>
                </div>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default NavigationBar;