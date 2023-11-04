import './Meet.css'
import img from '../../assets/image/cta_img.png'
import titleImg from '../../assets/image/titleimg.png'
import img2 from '../../assets/image/cta_icon.png'

const Meet = () => {
    return (
        <div className='meet-bg py-20'>
            <div className='lg:px-20 md:px-16 sm:px-12 px-12'>
                <div className='grid lg:grid-cols-2 lg:gap-8 gap-4'>

                    <div>
                        <img src={img} alt="" />
                    </div>

                    <div>

                        <div className="py-20 flex items-center justify-center flex-col text-center lg:text-left lg:items-start">
                            <img className='py-2' src={img2} alt="" />
                            <h2 className="text-5xl font-extrabold text-title text-white">WORLDS MEET <span className="text-[#E4A101]">REAL</span></h2>
                            <p className="py-4 text-[#c7c5c5]">Compete with 100 player on a remote island for winner known issue where certain strategic</p>
                            <img className='py-2 pb-6' src={titleImg} alt="" />
                            <div className="py-2">
                                <button className="bg-[#E4A101] text-[#1C1421] px-6 py-3 font-semibold banner-btn">VIEW SCHEDULE</button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Meet;