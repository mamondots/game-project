import UseTitle from '../../Hooks/UseTitle';
import './Article.css'

import titleImg from '../../assets/image/titleimg.png'
import { useState } from 'react';
import { useEffect } from 'react';

import { BiTimeFive } from 'react-icons/bi';
import { MdOutlineLabelImportant } from 'react-icons/md';

const Article = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('article.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <div className='lg:px-20 md:px-16 sm:px-12 px-12 py-8' id="blog">
            <div className='text-[#262626] lg:px-60 px-12 text-center'>
                <UseTitle
                    title={'LATEST NEWS'}
                    colorTitle={'ARTICLES'}
                    subTitle={'Compete with 100 players on a remote island for winner takes showdown known issue where certain skin strategic'}
                    titleImg={titleImg}
                >

                </UseTitle>
            </div>

            <div className='mt-8 grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
                 {
                    products.map((product,index) => <div key={product.index}>

                        <div className='group cursor-pointer'>
                            <div><img className='w-full' src={product.image_url} alt="" /></div>
                            <div className='py-4'>
                                <h2 className='text-title text-xl text-[#262626] font-bold group-hover:text-[#E4A101] duration-300'>{product.title}</h2>
                                <div className='flex items-center space-x-4 text-sm py-2 text-[#6a6969]'>
                                    <p className='flex items-center space-x-1'><span className='text-[#E4A101]'><BiTimeFive></BiTimeFive></span><span>Nov 2, 2023</span></p>
                                    <p>/</p>
                                    <p className='flex items-center space-x-1'><span className='text-[#E4A101]'><MdOutlineLabelImportant></MdOutlineLabelImportant></span><span>Shooter</span></p>
                                </div>
                                <p className='text-[#6a6969]'>{product.text}</p>
                            </div>
                        </div>

                    </div>)
                 }
            </div>
        </div>
    );
};

export default Article;