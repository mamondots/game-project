import UseTitle from '../../Hooks/UseTitle';
import './Featured.css'
import titleImg from '../../assets/image/titleimg.png'
import { FaBell } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="card-arrow arrow-next" onClick={onClick}>
           
            <BsArrowRightShort></BsArrowRightShort>
        </div>
    )
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="card-arrow arrow-prev" onClick={onClick}>
             <BsArrowLeftShort></BsArrowLeftShort>
        </div>
    )
}

const Featured = () => {
    var settings = {
        dots:false,
        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots:false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('feature.json')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
    return (
        <div className='lg:px-20 md:px-16 sm:px-12 px-12 py-20' id="game">
            <div className='text-[#262626] lg:px-60 px-12 text-center'>
                <UseTitle
                    title={'JUST FEATURED'}
                    colorTitle={'GAMES'}
                    subTitle={'Compete with 100 players on a remote island for winner takes showdown known issue where certain skin strategic'}
                    titleImg={titleImg}
                >

                </UseTitle>
            </div>

            <div className='py-12'>
                <Slider {...settings}>

                    {
                        items.map((item, index) => <div key={item.index}>
                            <div className='mx-2 relative card-full cursor-pointer'>
                                <div className='lg:h-[65vh] h-full '>
                                    <img className='h-full w-full' src={item.image_url} alt="" />
                                </div>
                                <div className='bottom-0 down-text absolute px-4 py-4 text-white'>
                                    <h2 className='text-xl font-bold text-title'>JUST FOR <span className='text-[#E4A101]'>GAMERS</span></h2>
                                    <p className='flex items-center font-medium py-1 text-[12px] text-[#e0dfdf]'><FaBell></FaBell><span className='px-1'>
                                        PLAYSTATION 5 , XBOX</span></p>
                                </div>

                                <div className='hover-text px-4 py-4 text-white w-full text-center flex flex-col items-center z-10'>
                                    <h2 className='text-xl font-bold text-title relative z-10 cursor-pointer'>JUST FOR <span className='text-[#252524]'>GAMERS</span></h2>
                                    <p className='flex items-center font-medium py-1 text-[12px] text-[#e0dfdf] relative z-10'><FaBell></FaBell><span className='px-1'>
                                        PLAYSTATION 5 , XBOX</span></p>
                                </div>
                            </div>
                        </div>)
                    }


                </Slider>
            </div>


        </div>
    );
};

export default Featured;