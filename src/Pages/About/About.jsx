import './About.css'
import titleImg from '../../assets/image/titleimg.png'
import IMG01 from '../../assets/image/about01.png'
import IMG02 from '../../assets/image/about02.png'
import IMG03 from '../../assets/image/about03.png'
const About = () => {
    return (
        <div className='lg:px-20 md:px-16 sm:px-12 px-12 py-16' id="about">
            <div className='grid lg:grid-cols-2 lg:gap-8 gap-6'>

                <div>
                    <div className="flex flex-col items-center lg:items-start justify-center text-[#262626] text-center lg:text-left">
                        <h2 className="text-title text-3xl font-extrabold py-2">ABOUT <span className="text-[#E4A101]">STORY</span></h2>
                        <img className="py-2" src={titleImg} alt="" />
                        <h2 className="text-[#E4A101] text-xl font-bold py-3 pb-3">Monica Global Publishing for Marketing</h2>

                        <p className='text-[#6c6c6c] font-medium text-[15px] py-4'>
                            Compete with 100 players on a remote Lorem Ipsn gravida. Pro ain gravida nibh vel velit an auctor aliqueenean ollicitudin ain gravida nibh vel version an ipsum.
                        </p>
                        <p className='text-[#6c6c6c] font-medium text-[15px]'>
                            Lorem Ipsn gravida. Pro ain gravida nibh vevelit auctor aliqueenean ollicitudin ain gravida nibh vel version an ipsum.
                        </p>

                        <div className="py-8">
                                    <button className="bg-[#E4A101] text-[#1C1421] px-6 py-3 font-semibold banner-btn">ABOUT MORE</button>

                                </div>

                    </div>
                </div>

                <div className='relative'>
                        <div className='flex items-center justify-center'><img src={IMG01} alt="" /></div>
                        <div className='absolute top-[160px] hidden lg:block'><img src={IMG02} alt="" /></div>
                        <div className='absolute right-28 bottom-0 hidden lg:block'><img src={IMG03} alt="" /></div>
                </div>

            </div>
        </div>
    );
};

export default About;