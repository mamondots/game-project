import './Team.css'
import titleImg from '../../assets/image/titleimg.png'
import UseTitle from '../../Hooks/UseTitle';
import { useEffect, useState } from 'react';
const Team = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('teams.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <div className='lg:px-20 md:px-16 sm:px-12 px-12 py-12 bg-[#0C0F14]'>
            <div className='text-[#fff] lg:px-60 px-12 text-center'>
                <UseTitle
                    title={'ACTIVE TEAM'}
                    colorTitle={'MEMBERS'}
                    subTitle={'Compete with 100 players on a remote island for winner takes showdown known issue where certain skin strategic'}
                    titleImg={titleImg}
                >

                </UseTitle>
            </div>

            <div className='mt-8 grid lg:grid-cols-4 md:grid-cols-2 gap-6 pb-28'>
                {
                    products.map((product, index) => <div key={product.index}>
                        <div className='bg-[#1C242F] relative flex items-center justify-center py-8 cursor-pointer hover:translate-y-3 duration-300'>
                            <div className='label-box'></div>
                            <div className='z-10 relative'>
                                <img className='border-4 rounded-full' src={product.image_url} alt="" />
                                <div className='pt-4 text-center'>
                                    <h2 className='text-xl font-bold text-white text-title'>{product.title}</h2>
                                    <p className='py-1 text-[#E4A101]'>{product.position}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    )}
            </div>
        </div>
    );
};

export default Team;