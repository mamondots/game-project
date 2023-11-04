import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Banner.css'

import img1 from '../../assets/image/slider_img01.png'
import img2 from '../../assets/image/slider_img02.png'

import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="arrow arrow-next" onClick={onClick}>
            <BsArrowLeftShort></BsArrowLeftShort>
        </div>
    )
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="arrow arrow-prev" onClick={onClick}>
            <BsArrowRightShort></BsArrowRightShort>
        </div>
    )
}

const Banner = () => {
    var settings = {
        dots: false,
        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="relative" id="home">
            <div className="">
            <div className="relative overflow-hidden">
                <div className="banner">
                    <Slider {...settings}>

                        <div className="bg-banner lg:px-20 md:px-16 sm:px-12 px-12 py-12 text-white">
                            <div className=" relative z-10 grid lg:grid-cols-2 gap-8">

                                <div className="py-20 flex items-center justify-center flex-col text-center lg:text-left lg:items-start">
                                    <p className="text-xl font-bold text-[#E4A101] py-4 uppercase text-title">world gaming</p>
                                    <h2 className="text-6xl font-extrabold text-title">Create <span className="text-[#E4A101]">Manage</span> Matches</h2>
                                    <p className="py-4 text-[#c7c5c5]">Find technology or people for digital projects in public sector and Find an individual specialist develope researcher.</p>
                                    <div className="py-2">
                                        <button className="bg-[#E4A101] text-[#1C1421] px-6 py-3 font-semibold banner-btn">READ MORE</button>

                                    </div>
                                </div>

                                <div className="lg:flex w-full relative hidden">
                                    <div className="left-0 top-[10%] absolute bottom-0">
                                        <img className="" src={img2} alt="" />
                                    </div>

                                    <div>
                                        <img className="right-0 absolute top-[10%] " src={img1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="secand-banner lg:px-20 md:px-16 sm:px-12 px-12 py-12 text-white">
                            <div className=" relative z-10 grid lg:grid-cols-2 gap-8">

                                <div className="py-20">
                                    <p className="text-xl font-bold text-[#E4A101] py-4 uppercase text-title">world gaming</p>
                                    <h2 className="text-6xl font-extrabold text-title">Cod <span className="text-[#E4A101]">Modern </span>  Warfare</h2>
                                    <p className="py-4 text-[#c7c5c5]">Find technology or people for digital projects in public sector and Find an individual specialist develope researcher.</p>
                                    <div className="py-2">
                                        <button className="bg-[#E4A101] text-[#1C1421] px-6 py-3 font-semibold banner-btn">READ MORE</button>

                                    </div>
                                </div>

                                <div className="lg:flex w-full relative hidden">
                                    <div className="left-0 top-[10%] absolute bottom-0">
                                        <img className="" src={img2} alt="" />
                                    </div>

                                    <div>
                                        <img className="right-0 absolute top-[10%] " src={img1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </Slider>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;