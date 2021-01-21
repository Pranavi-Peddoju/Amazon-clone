import React from "react";
import Product from "../Products/Product";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
          alt=""
        />
        {/* <div className="banner-container">
          <Slider {...settings}>
            <div className="banners">
              <img
                className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
                alt=""
              />
            </div>
            <div className="banners">
              <img
                className="home_image"
                src="https://cdn.shopify.com/s/files/1/1780/7915/files/Thermaltake_Level_20_RGB_Titanium_Gaming_Keyboard_From_The_Peripheral_Store_Banner_01.jpg?v=1598266526"
                alt=""
              />
            </div>
            <div className="banners">
              <img
                className="home_image"
                src="https://cdn.shopify.com/s/files/1/1780/7915/files/Game_Monitor_6a7a1deb-2d61-4307-99ac-f8c5a18d298f.jpg?8000210842524768871"
                alt=""
              />
            </div>
          </Slider>
        </div> */}
      </div>
      <div className="home_row">
        <Product
          id="234366"
          title="World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books): Perfect Motivational Gift Set "
          image="https://images-na.ssl-images-amazon.com/images/I/71frknp-CWL.jpg"
          price={320}
          rating={3}
        />
        <Product
          id="234273"
          title="New Apple iPhone 12 (256GB, Blue) [Locked] + Carrier Subscription"
          image="https://images-na.ssl-images-amazon.com/images/I/71ZOtNdaZCL._SL1500_.jpg"
          price={84900}
          rating={4}
        />
        <Product
          id="227333"
          title="FLiX (Beetel) S1 Smart Watch, IP 68 Water Resistant, 1.4 Inch Color Display (Black)"
          image="https://images-na.ssl-images-amazon.com/images/I/51hWcRMH0NL._SL1280_.jpg"
          price={2990}
          rating={4}
        />
        <Product
          id="298624"
          title="All-new Echo Dot | Next-gen smart speaker with improved bass and Alexa (Blue)"
          image="https://images-na.ssl-images-amazon.com/images/I/61MbLLagiVL._SL1000_.jpg"
          price={3999}
          rating={3}
        />
      </div>
      <div className="home_row">
        <Product
          id="268263"
          title="New Apple iPad Pro (12.9-inch,Wi-fi,128GB) - Silver(4th Generation)"
          price={598.99}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          rating={4}
        />
        <Product
          id="223994"
          title="Samsung Curved LED Gaming Monitor"
          price={199.99}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          rating={3}
        />
        <Product
          id="282646"
          title="Kenwood kMix Stand Mixer for Baking , Stylish Kitchen Mixer with K-beater, Liter Glass Bowl"
          price={239.0}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          rating={5}
        />
      </div>
      <div className="home_row">
        <Product
          id="261719"
          title="LG 190.5 cm (75 inches) 75SK8000PTA 4K Super UHD LED Smart TV (Black) "
          price={301446.0}
          image="https://images-na.ssl-images-amazon.com/images/I/91tjctyEfEL._SL1500_.jpg"
          rating={3}
        />
      </div>

      <div className="home_product_slider">
        <h2 className="section">More Products</h2>

        <Slider {...settings2} className="product-slider">
          <Product
            id="251249"
            title="Home Centre Freddie Queen-Size Bed with Box Storage"
            price={26292.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61ZTZtcCFdL._SL1200_.jpg"
            rating={4}
          />
          <Product
            id="232373"
            title="Lenovo Ideapad S145 AMD Ryzen 5 15.6 HD Laptop (8GB/1TB/1.85Kg)"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61oDmcTpk7L._AC_SX425_.jpg"
            rating={5}
          />
          <Product
            id="2672521"
            title="Logitech Gaming Multimedia USB Keyboard & USB Mouse Combo -Transformer"
            image="https://webobjects2.cdw.com/is/image/CDW/3006282?$product-main$"
            price={1299}
            rating={4}
          />
          <Product
            id="242888"
            title="boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)"
            image="https://images-na.ssl-images-amazon.com/images/I/719elVA3FvL._SL1500_.jpg"
            price={300}
            rating={4}
          />
          <Product
            id="271348"
            title="Apple Magic Mouse 2 (Wireless, Rechargable) - Space Grey"
            image="https://macblowouts.com/wp-content/uploads/2016/12/18465_2F1481221798_2Fmb112.jpg"
            price={8799}
            rating={4}
          />
        </Slider>
      </div>
    </div>
  );
}

export default Home;
