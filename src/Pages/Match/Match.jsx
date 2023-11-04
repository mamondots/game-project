import UseTitle from '../../Hooks/UseTitle';
import './Match.css'
import titleImg from '../../assets/image/titleimg.png'
import Img1 from '../../assets/image/match01.jpg'
import Img2 from '../../assets/image/match02.jpg'
import Img3 from '../../assets/image/match03.jpg'
import Img4 from '../../assets/image/match04.jpg'

const Match = () => {
    return (
        <div className="match-bg lg:px-20 md:px-16 sm:px-12 px-12 py-16" id="services">
            <div className='text-[#fff] lg:px-60 px-12 text-center'>
                <UseTitle
                    title={'GAMING LATEST'}
                    colorTitle={'MATCHES'}
                    subTitle={'Compete with 100 players on a remote island for winner takes showdown known issue where certain skin strategic'}
                    titleImg={titleImg}
                >

                </UseTitle>
            </div>

            <div className='py-4 grid lg:grid-cols-2 gap-8 mt-4'>

                <div className='bg-[#1C181E] border-8 border-[#211E23] flex space-x-3 text-white'>
                    <div className='h-full'>
                        <img className='h-full' src={Img1} alt="" />
                    </div>
                    <div className='py-6 px-2'>
                        <h2 className='text-title font-bold'>FORZA <span className='text-[#E4A101]'>HORIZON II</span></h2>
                        <p className='text-sm text-[#c6c6c6] py-2'>
                            Find tecology people for digital projects in public There are many variations.
                        </p>
                        <div className='flex items-center space-x-4 text-sm'>
                            <p className='text-[#E4A101] text-title font-medium'>PRICE : <span className='text-[#c6c6c6] '>$125,00</span></p>
                            <p className='bg-[#222225] py-2 px-4 text-sm text-white font-medium border border-dotted border-[#616161] cursor-pointer hover:bg-[#E4A101] hover:text-[#262626] hover:border-transparent duration-300'>JOINING</p>
                        </div>
                    </div>
                </div>


                <div className='bg-[#1C181E] border-8 border-[#211E23] flex space-x-3 text-white'>
                    <div className='h-full'>
                        <img className='h-full' src={Img2} alt="" />
                    </div>
                    <div className='py-6 px-2'>
                        <h2 className='text-title font-bold'>SHOOTING <span className='text-[#E4A101]'>LAND</span></h2>
                        <p className='text-sm text-[#c6c6c6] py-2'>
                            Find tecology people for digital projects in public There are many variations.
                        </p>
                        <div className='flex items-center space-x-4 text-sm'>
                            <p className='text-[#E4A101] text-title font-medium'>PRICE : <span className='text-[#c6c6c6] '>$125,00</span></p>
                            <p className='bg-[#222225] py-2 px-4 text-sm text-white font-medium border border-dotted border-[#616161] cursor-pointer hover:bg-[#E4A101] hover:text-[#262626] hover:border-transparent duration-300'>JOINING</p>
                        </div>
                    </div>
                </div>


                <div className='bg-[#1C181E] border-8 border-[#211E23] flex space-x-3 text-white'>
                    <div className='h-full'>
                        <img className='h-full' src={Img3} alt="" />
                    </div>
                    <div className='py-6 px-2'>
                        <h2 className='text-title font-bold'>THANOS <span className='text-[#E4A101]'>SKY II</span></h2>
                        <p className='text-sm text-[#c6c6c6] py-2'>
                            Find tecology people for digital projects in public There are many variations.
                        </p>
                        <div className='flex items-center space-x-4 text-sm'>
                            <p className='text-[#E4A101] text-title font-medium'>PRICE : <span className='text-[#c6c6c6] '>$125,00</span></p>
                            <p className='bg-[#222225] py-2 px-4 text-sm text-white font-medium border border-dotted border-[#616161] cursor-pointer hover:bg-[#E4A101] hover:text-[#262626] hover:border-transparent duration-300'>JOINING</p>
                        </div>
                    </div>
                </div>


                <div className='bg-[#1C181E] border-8 border-[#211E23] flex space-x-3 text-white'>
                    <div className='h-full'>
                        <img className='h-full' src={Img4} alt="" />
                    </div>
                    <div className='py-6 px-2'>
                        <h2 className='text-title font-bold'>CALL OF <span className='text-[#E4A101]'>DUTY II</span></h2>
                        <p className='text-sm text-[#c6c6c6] py-2'>
                            Find tecology people for digital projects in public There are many variations.
                        </p>
                        <div className='flex items-center space-x-4 text-sm'>
                            <p className='text-[#E4A101] text-title font-medium'>PRICE : <span className='text-[#c6c6c6] '>$125,00</span></p>
                            <p className='bg-[#222225] py-2 px-4 text-sm text-white font-medium border border-dotted border-[#616161] cursor-pointer hover:bg-[#E4A101] hover:text-[#262626] hover:border-transparent duration-300'>JOINING</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Match;