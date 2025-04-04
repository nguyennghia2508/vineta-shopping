import { TabsProps } from "antd";
import { BannerTextCustom, CarouselCustom, SlidersCustom, TabsCustom } from "../components";

const HomePage: React.FC = () => {

  const data = [
    {
      img: "images/cls-categories/skincare/product-1.jpg",
      title: "Cleansers",
    },
    {
      img: "images/cls-categories/skincare/product-2.jpg",
      title: "Moisturizers",
    },
    {
      img: "images/cls-categories/skincare/product-3.jpg",
      title: "Serums & Treatments",
    },
    {
      img: "images/cls-categories/skincare/product-4.jpg",
      title: "Body & Face Masks",
    },
    {
      img: "images/cls-categories/skincare/product-5.jpg",
      title: "Body Lotions",
    },
    {
      img: "images/cls-categories/skincare/product-6.jpg",
      title: "Sun Care & Tanning",
    },
  ];

  const productList = [
    {
      img: "images/products/skincare/product-1.jpg",
      imgHover: "images/cls-categories/skincare/product-5.jpg",
      title: "Estee Lauder Advanced Night Repair",
      priceSale: 130,
      price: 150,
      volume: [
        "50ml",
        "100ml"
      ],
      discountPercent: 20,
      productStatus: "",
    },
    {
      img: "images/products/skincare/product-2.jpg",
      imgHover: "images/cls-categories/skincare/product-6.jpg",
      title: "Skullcandy Crusher ANC 2 Over-Ear",
      priceSale: 130,
      price: 150,
      volume: [
        "50ml",
        "100ml"
      ],
      discountPercent: 0,
      productStatus: "Trending",
    },
    {
      img: "images/products/skincare/product-3.jpg",
      imgHover: "images/cls-categories/skincare/product-7.jpg",
      title: "Skullcandy Crusher ANC 2 Over-Ear",
      priceSale: 130,
      price: 150,
      volume: [
        "50ml",
        "100ml"
      ],
      discountPercent: 20,
      productStatus: "",
    },
    {
      img: "images/products/skincare/product-4.jpg",
      imgHover: "images/cls-categories/skincare/product-8.jpg",
      title: "Lancome Advanced Genifique",
      priceSale: 130,
      price: 150,
      volume: [
        "50ml",
        "100ml"
      ],
      discountPercent: 0,
      productStatus: ""
    }
  ];

  const tabItems: TabsProps['items'] = [
    {
      key: '1',
      label: "What's hot?",
      children:
        <>
          <SlidersCustom
            className="pl-[26px] pr-[26px] z-1 ml-auto mr-auto relative overflow-hidden [&>.slick-list]:mb-[30px]!"
            classNameImage="overflow-hidden w-full object-cover transform hover:opacity-100 scale-100 hover:scale-[1.06] duration-2000 hover:ease-[cubic-bezier(0,0,0.44,1.38)]"
            type="cart-list"
            numberToShow={4}
            data={productList} />
        </>,
    },
    {
      key: '2',
      label: 'Best Sellers',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Just Arrivals',
      children: 'Content of Tab Pane 3',
    },
  ];

  return (
    <div>
      <CarouselCustom />
      <div className="sliders pt-[90px] pb-[90px] block">
        <SlidersCustom
          className="pl-[26px] pr-[26px] z-1 ml-auto mr-auto relative overflow-hidden [&>.slick-list]:mb-[30px]!"
          classNameImage="overflow-hidden w-full object-cover transform hover:opacity-100 scale-100 hover:scale-[1.06] duration-2000 hover:ease-[cubic-bezier(0,0,0.44,1.38)]"
          title="Categories"
          numberToShow={6}
          type="content"
          data={data} />
      </div>
      <div className="sliders pt-[80px] pb-[80px] block bg-[#f5e1c7]">
        <TabsCustom data={tabItems} />
      </div>
      <div className="banner-text-skincare pt-[83px] pb-[98px] block">
        <BannerTextCustom
          imageSrc="/images/banner/skincare-2.jpg"
          title="Radiant Skin Awaits"
          description="Discover our skincare essentials for a glowing, healthy complexion."
          link="shop-default.html"
          buttonText="Shop Now"
        />
      </div>
    </div>
  );
};

export default HomePage;