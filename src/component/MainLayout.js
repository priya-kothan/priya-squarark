import React from "react";
import "./MainLayout.css";
import bannerimage from "../images/bannerimage.png";
import logo from "../images/logo.png";
import Mockup01 from "../images/Mockup01.png";
import product from "../images/product.png";
import Rectangle1 from "../images/Rectangle 251.png";
import Rectangle2 from "../images/Rectangle 252.png";
import Rectangle3 from "../images/Rectangle 253.png";
import Rectangle4 from "../images/Rectangle 254.png";
import Rectangle5 from "../images/Rectangle 255.png";
import Rectangle6 from "../images/Rectangle 256.png";
import Rectangle7 from "../images/Rectangle 257.png";
import Rectangle8 from "../images/Rectangle 258.png";
import Rectangle9 from "../images/Rectangle 259.png";
import Rectangle10 from "../images/Rectangle 261.png";
import Rectangle11 from "../images/Rectangle 262.png";
import Rectangle12 from "../images/Rectangle 263.png";
import Rectangle13 from "../images/Rectangle 264.png";
import Rectangle14 from "../images/Rectangle 265.png";
import shape from "../images/Combined Shape.png";
import Rectangle15 from "../images/Rectangle 260.png";
import offsquare from "../images/offsquare.png";

const MainLayout = () => {
  return (
    <>
      <div>
        <div className="squarearch__container">
          <div className="squarearch__titleBar">
            <div className="square_title">
              <img src={logo} alt="logo" width="50" height="50"></img>
              <span className="element">SQUAREARK</span>
            </div>
            <div className="inner_Header">
              <span className="element">About Us</span>
              <span className="element">Ambassador</span>
              <span className="element">Corporate</span>
              <span className="element">Brands</span>
              <div className="language">
                <div className="en__element">EN</div>
                <div className="en__element">CN</div>
              </div>
            </div>
          </div>
          <div className="square__wrapper">
            <div className="square__content">
              SquareArk works with the world’s biggest brands to deliver
              exclusive deals with 100% authentic product.
            </div>
            <div className="mobile">
              <img
                src={bannerimage}
                alt="banner"
                width="900px"
                height="608px"
              ></img>
            </div>
          </div>
        </div>
        <div className="Square_product">
          {/* <div className="left_product">
          <div className="main-content">
            <div className="text__1">For Individuals</div>
            <div className="text_2">Start your new business with 0 capital</div>
          </div>
          <div className="P1__desgin">
            <img src={product} alt="product" width="458px" height="428px"></img>
          </div>
        </div> */}

          <div className="main-content">
            <div className="text__wrapper">
              <div className="text__1">For Individuals</div>
              <div className="text_2">
                Start your new business with 0 capital
              </div>
            </div>
            <div className="P1__desgin">
              <img
                src={product}
                alt="product"
                width="300px"
                height="300px"
              ></img>
            </div>
          </div>

          <div className="background">
            <div className="rg_product">
              <img
                src={shape}
                alt="shape"
                width="28.19px"
                height="28.19px"
                style={{ margin: "50px" }}
              ></img>
            </div>
          </div>
          <div className="box">
            <div className="box-text-1">For Brand Partners</div>
            <div className="box-text-2">Grow your business faster</div>
            <div>
              <img
                src={Mockup01}
                alt="Mockup01"
                width="1200px"
                height="394px"
              ></img>
            </div>
          </div>
        </div>
        <div className="branding">
          <div className="branding__text">Brands we work with</div>
          <div className="branding___item">
            <div>
              <img
                src={Rectangle1}
                alt="Rectangle1"
                width="199px"
                height="100px"
              ></img>
            </div>
            <div>
              <img
                src={Rectangle4}
                alt="Rectangle4"
                width="199px"
                height="100px"
              ></img>
            </div>
            <div>
              <img
                src={Rectangle7}
                alt="Rectangle7"
                width="199px"
                height="100px"
              ></img>
            </div>
            <div>
              <img
                src={Rectangle15}
                alt="Rectangle15"
                width="199px"
                height="100px"
              ></img>
            </div>
            <div>
              <img
                src={Rectangle12}
                alt="Rectangle12"
                width="199px"
                height="100px"
              ></img>
            </div>
            <div>
              <img
                src={Rectangle2}
                alt="Rectangle2"
                width="199px"
                height="100px"
              ></img>
            </div>
            <div>
              <img
                src={Rectangle5}
                alt="Rectangle5"
                width="199px"
                height="100px"
              ></img>
            </div>
            <div>
              <img
                src={Rectangle8}
                alt="Rectangle8"
                width="199px"
                height="100px"
              ></img>
            </div>
            <div>
              <img
                src={Rectangle10}
                alt="Rectangle10"
                width="199px"
                height="100px"
              ></img>
            </div>
            <div>
              <img
                src={Rectangle13}
                alt="Rectangle13"
                width="199px"
                height="100px"
              ></img>
            </div>
            <div>
              <img
                src={Rectangle3}
                alt="Rectangle3"
                width="199px"
                height="100px"
              ></img>
            </div>

            <div>
              <img
                src={Rectangle6}
                alt="Rectangle6"
                width="199px"
                height="100px"
              ></img>
            </div>

            <div>
              <img
                src={Rectangle9}
                alt="Rectangle9"
                width="199px"
                height="100px"
              ></img>
            </div>

            <div>
              <img
                src={Rectangle11}
                alt="Rectangle11"
                width="199px"
                height="100px"
              ></img>
            </div>

            <div>
              <img
                src={Rectangle14}
                alt="Rectangle14"
                width="199px"
                height="100px"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="off">
        <img src={offsquare} alt="offsquare" width="226px" height="227px"></img>
      </div>
    </>
  );
};

export default MainLayout;
