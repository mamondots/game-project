import UseTitle from '../../Hooks/UseTitle';
import './Shop.css'
import titleImg from '../../assets/image/titleimg.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { HiShoppingCart } from 'react-icons/hi';
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

const Shop = () => {

    var settings = {
        dots: false,
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
                    dots: false
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

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    return (
        <div className='lg:px-20 md:px-16 sm:px-12 px-12 py-16 bg-[#1C181E]' id="products">
            <div className='text-[#fff] lg:px-60 px-12 text-center'>
                <UseTitle
                    title={'GAMING PRODUCTS'}
                    colorTitle={'CORNER'}
                    subTitle={'Compete with 100 players on a remote island for winner takes showdown known issue where certain skin strategic'}
                    titleImg={titleImg}
                >

                </UseTitle>
            </div>

            <div className='mt-8'>
            <Slider {...settings}>
                {
                    products.map((product,index) =><div className='px-2' key={product.index}>

                        <div className='bg-[#1E1B20]'>
                             <div className='relative h-full'>
                                <img className='w-full h-full' src={product.image_url} alt="" />
                                <p className='px-4 py-2 bg-[#E4A101] font-medium inline-block text-sm product-name'>{product.name}</p>
                             </div>
                             <div className='py-8 text-white mt-2 px-4'>
                                  <h2 className='text-title text-base font-medium'>{product.title}</h2>
                                  <div className='flex items-center justify-between pt-2 text-[#E4A101] font-bold'>
                                     <p>${product.price}</p>
                                     <p className='px-2 py-2 border bg-[#141217] cursor-pointer hover:bg-[#E4A101] hover:text-[#262626] duration-300 border-[#e4a0011a]'><HiShoppingCart></HiShoppingCart></p>
                                  </div>
                             </div>
                        </div>

                    </div>)
                }
            </Slider>
            </div>
        </div>
    );
};

export default Shop;