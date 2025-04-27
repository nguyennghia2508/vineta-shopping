import { TabsProps } from "antd";
import { BannerTextCustom, CarouselCustom, FadeInCustom, GoToTopButtonCustom, MarqueeCustom, SlidersCustom, SplitterCustom, TabsCustom } from "../components";

const HomePage: React.FC = () => {

  const messages = [
    "50% Off On Selected Items",
    "Summer Sales",
  ];

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
      id: '00001',
      img: "images/products/skincare/product-1.jpg",
      imgHover: "images/products/skincare/product-5.jpg",
      title: "Estee Lauder Advanced Night Repair",
      stock: 100,
      priceSale: 130,
      price: 150,
      volume: {
        options: ["50ml", "100ml"],
        selected: 0,
      },
      discountPercent: 20,
      productStatus: "",
    },
    {
      id: '00002',
      img: "images/products/skincare/product-2.jpg",
      imgHover: "images/products/skincare/product-6.jpg",
      title: "Skullcandy Crusher ANC 2 Over-Ear",
      stock: 10,
      priceSale: 130,
      price: 150,
      volume: {
        options: ["50ml", "100ml"],
        selected: 1,
      },
      discountPercent: 0,
      productStatus: "Trending",
    },
    {
      id: '00003',
      img: "images/products/skincare/product-3.jpg",
      imgHover: "images/products/skincare/product-7.jpg",
      title: "Skullcandy Crusher ANC 2 Over-Ear",
      stock: 15,
      priceSale: 130,
      price: 150,
      volume: {
        options: ["50ml", "100ml"],
        selected: 0,
      },
      discountPercent: 20,
      productStatus: "",
    },
    {
      id: '00004',
      img: "images/products/skincare/product-4.jpg",
      imgHover: "images/products/skincare/product-8.jpg",
      title: "Lancome Advanced Genifique",
      stock: 0,
      priceSale: 130,
      price: 150,
      volume: {
        options: ["50ml", "100ml"],
        selected: 0,
      },
      discountPercent: 0,
      productStatus: "",
    },
    {
      id: '00005',
      img: "images/products/skincare/product-1.jpg",
      imgHover: "images/products/skincare/product-5.jpg",
      title: "Estee Lauder Advanced Night Repair",
      stock: 1,
      priceSale: 130,
      price: 150,
      volume: {
        options: ["50ml", "100ml"],
        selected: 1,
      },
      discountPercent: 20,
      productStatus: "Hot",
    },
  ];

  const tabItems: TabsProps['items'] = [
    {
      key: '1',
      label: "What's Hot?",
      children:
        <>
          <SlidersCustom
            className="[&>.slick-list>.slick-track]:flex! [&>.slick-list>.slick-track]:w-[4320px]! [&>.slick-list>.slick-track>.slick-slide]:w-[342px]! [&>.slick-list>.slick-track>.slick-slide]:mr-[24px]"
            classNameImage=""
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

  const videoSlider = [
    {
      videoSrc: "images/video/skincare-3.mp4",
      img: "images/products/skincare/gel-foam.jpg",
      price: 100,
      priceSale: 80,
      title: "Brightening Cleansing Gel Foam",
    },
    {
      videoSrc: "images/video/skincare-2.mp4",
      img: "images/products/skincare/mugwort-essence.jpg",
      price: 0,
      priceSale: 120,
      title: "Mugwort Essence 160ml",
    },
    {
      videoSrc: "images/video/skincare.mp4",
      img: "images/products/skincare/clean-filter.jpg",
      price: 130,
      priceSale: 100,
      title: "No.1 Clear Filter Sun Essence",
    },
  ];

  const reviewSlider = [
    {
      name: "Vineta P",
      title:
        "I’ve been using this skincare line for a month, and the results are amazing! My skin feels smoother, looks brighter, and has a healthy glow. The products are gentle yet effective, and I love the natural ingredients. I’m definitely a fan!",
      img: "images/testimonial/tes-skincare.jpg",
      rating: 5,
    },
    {
      name: "Themesflat",
      title:
        "I've been trying this haircare line for a month, and the results are incredible! My hair feels softer, looks shinier, and feels much healthier. The products are nourishing yet lightweight, and I love the natural ingredients.",
      img: "images/testimonial/tes-skincare2.jpg",
      rating: 5,
    },
  ];

  const ProductTypeList = [
    {
      img: "images/gallery/skincare/gallery-1.jpg",
    },
    {
      img: "images/gallery/skincare/gallery-2.jpg",
    },
    {
      img: "images/gallery/skincare/gallery-3.jpg",
    },
    {
      img: "images/gallery/skincare/gallery-4.jpg",
    },
    {
      img: "images/gallery/skincare/gallery-5.jpg",
    },
  ];


  return (
    <div>
      <GoToTopButtonCustom />
      <CarouselCustom />
      <MarqueeCustom repeat={7} items={messages} />
      <div className="sliders pt-[90px] pb-[90px] block">
        <FadeInCustom
          animationType="up"
        >
          <SlidersCustom
            className="
            pl-[26px] 
            pr-[26px] 
            z-1 
            ml-auto 
            mr-auto 
            relative 
            overflow-hidden 
            [&>.slick-list]:mb-[30px]!"
            classNameImage="overflow-hidden 
            w-full 
            object-cover 
            transform 
            hover:opacity-100 
            scale-100 hover:scale-[1.06] 
            duration-2000 
            hover:ease-[cubic-bezier(0,0,0.44,1.38)]"
            title="Categories"
            numberToShow={6}
            type="content"
            data={data} />
        </FadeInCustom>
      </div>

      <div className="sliders pt-[80px] pb-[80px] block bg-[#f5e1c7]">
        <TabsCustom
          className="slider
            [&>.ant-tabs-nav]:mb-[48px]! 
            [&>.ant-tabs-nav]:gap-[12px]! 
            [&>.ant-tabs-nav]:grid!
            [&>.ant-tabs-nav]:text-center!
            [&>.ant-tabs-nav]:before:border-none!
            [&>.ant-tabs-nav>.ant-tabs-nav-wrap>.ant-tabs-nav-list>.ant-tabs-ink-bar]:bg-[#df3c01]!
            [&>.ant-tabs-nav>.ant-tabs-nav-wrap>.ant-tabs-nav-list]:gap-[41px]
            [&>.ant-tabs-nav>.ant-tabs-nav-wrap>.ant-tabs-nav-list]:font-(family-name:--font-family)
            [&>.ant-tabs-nav>.ant-tabs-nav-wrap>.ant-tabs-nav-list>.ant-tabs-tab-active>.ant-tabs-tab-btn]:text-[#df3c01]!
            [&>.ant-tabs-nav>.ant-tabs-nav-wrap>.ant-tabs-nav-list>.ant-tabs-tab-active>.ant-tabs-tab-btn]:focus:text-[#df3c01]!
            [&>.ant-tabs-nav>.ant-tabs-nav-wrap>.ant-tabs-nav-list>.ant-tabs-tab-active>.ant-tabs-tab-btn]:outline-none
            [&>.ant-tabs-nav>.ant-tabs-nav-wrap>.ant-tabs-nav-list>.ant-tabs-tab]:hover:text-[#df3c01]!
            [&>.ant-tabs-nav>.ant-tabs-nav-wrap>.ant-tabs-nav-list>.ant-tabs-tab]:p-[0]!
            [&>.ant-tabs-nav>.ant-tabs-nav-wrap>.ant-tabs-nav-list>.ant-tabs-tab>.ant-tabs-tab-btn]:text-[36px]!
            [&>.ant-tabs-nav>.ant-tabs-nav-wrap>.ant-tabs-nav-list>.ant-tabs-tab>.ant-tabs-tab-btn]:leading-[43.2px]!
            [&>.ant-tabs-nav>.ant-tabs-nav-wrap>.ant-tabs-nav-list>.ant-tabs-tab>.ant-tabs-tab-btn]:font-[500]!
            [&>.ant-tabs-nav>.ant-tabs-nav-wrap>.ant-tabs-nav-list>.ant-tabs-tab.ant-tabs-tab-focus>.ant-tabs-tab-btn]:outline-none!
            [&>.ant-tabs-nav>.ant-tabs-nav-wrap>.ant-tabs-nav-list>.ant-tabs-tab:not(.ant-tabs-tab-active)>.ant-tabs-tab-btn]:text-[#727272]!
            [&>.ant-tabs-nav>.ant-tabs-nav-wrap>.ant-tabs-nav-list>.ant-tabs-tab:not(.ant-tabs-tab-active)>.ant-tabs-tab-btn]:outline-none!"
          data={tabItems} />
      </div>
      <div className="banner-text-skincare pt-[83px] pb-[98px] block">
        <BannerTextCustom
          images={[
            "/images/banner/skincare-2.jpg"
          ]}
          title="Radiant Skin Awaits"
          description="Discover our skincare essentials for a glowing, healthy complexion."
          link=""
          buttonText="Shop Now"
        />
      </div>
      <div className="banner-text-skincare pt-[83px] pb-[98px] block">
        <BannerTextCustom
          images={[
            "/images/banner/skincare-1.jpg"
          ]}
          title="Nourish & Revitalize"
          description="Pamper your skin with products designed to hydrate, repair, and rejuvenate."
          link=""
          buttonText="Shop Now"
          isImageLeft={false}
        />
      </div>
      <SlidersCustom
        className="
          [&_.slick-track]:flex! 
          [&_.slick-list_.slick-slide]:w-[464px]! 
          [&_.slick-list_.slick-slide]:mr-[24px]! 
          [&_.slick-list_.slick-slide]:block! 
          [&_.slick-list_.slick-slide]:shrink-0!"
        classNameImage=""
        title="Inspired by You"
        numberToShow={3}
        type="video"
        data={videoSlider} />
      <div className="banner-text-skincare pt-[83px] pb-[98px] block">
        <BannerTextCustom
          images={[
            "/images/banner/skincare-3.jpg",
            "/images/banner/skincare-4.jpg"
          ]}
          title="Refresh & Revitalize"
          description="Buy 1, Get 1 Free on select items"
          link=""
          buttonText="Explore Offers"
          isTitleAbove={false}
        />
      </div>
      <div className="review-part py-[80px] bg-[#f5e1c7]">
        <SlidersCustom
          className=""
          classNameLeft="
            box-left 
            [&_.slick-track]:flex!
            [&_.slick-track]:!w-fit
            [&_.slick-track]:!mb-[40px]
            px-[99px] py-[60px] w-[63%] 
            [&_.slick-list]:relative 
            [&_.slick-list_.slick-slide]:w-[709px]!
            [&_.slick-list_.slick-slide:first-child]:mr-0
            [&_.slick-list_.slick-slide:not(:first-child)]:mr-[24px]
            [&_.slick-list_.slick-slide]:select-none!
            [&_.slick-list_.slick-slide]:cursor-pointer!
            "
          classNameRight="
            box-right 
            block 
            w-[37%]
            [&_.slick-list_.slick-slide]:w-[533px]!
            [&_.slick-list_.slick-slide:first-child]:mr-0
            [&_.slick-list_.slick-slide:not(:first-child)]:mr-[24px]
            [&_.slick-list_.slick-slide]:select-none!
            [&_.slick-list_.slick-slide]:cursor-pointer!
          "
          classNameImage=""
          numberToShow={1}
          type="review"
          data={reviewSlider} />
      </div>
      <div className="compare-content py-[120px]">
        <SplitterCustom
          title="Before & After: Reveal Your Radiance"
          imgLeft="images/section/skincare-before.jpg"
          imgRight="images/section/skincare-after.jpg"
        />
      </div>
      <div className="service-content py-[80px] bg-[#f5e1c7]">
        <FadeInCustom
          animationType="up"
        >
          <SlidersCustom
            title="Follow our gram @Vineta"
            className="
              [&>.slick-list>.slick-track]:flex!
              [&>.slick-list>.slick-track>.slick-slide]:relative!
              [&>.slick-list>.slick-track>.slick-slide]:block!
              [&>.slick-list>.slick-track>.slick-slide]:w-[280px]!
              [&>.slick-list>.slick-track>.slick-slide]:shrink-0
              [&>.slick-list>.slick-track>.slick-slide]:mr-[10px]!
              [&>.slick-list>.slick-track>.slick-slide]:select-none"
            classNameImage=""
            numberToShow={5}
            type="product-type"
            data={ProductTypeList} />
        </FadeInCustom>
      </div>
    </div>
  );
};

export default HomePage;