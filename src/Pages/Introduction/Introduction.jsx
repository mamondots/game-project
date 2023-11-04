
import titleImg from '../../assets/image/titleimg.png'

import mask from '../../assets/image/mask.png'
import likeMan from '../../assets/image/man.png'
import fire from '../../assets/image/gamefire.png'
import gameC from '../../assets/image/gameCaractar.png'
import map from '../../assets/image/map.png'

import './Introduction.css'

const Introduction = () => {
    return (
        <div className="lg:px-20 md:px-16 sm:px-12 px-12 py-16 bg-[#26122A] overflow-hidden relative">
            <div className="flex flex-wrap lg:flex-nowrap w-full">

                <div className="lg:w-2/3 w-full">
                    <div className="flex flex-col items-center lg:items-start justify-center text-white text-center lg:text-left">
                        <h2  className="text-title text-3xl font-bold py-2">JUST FOR <span className="text-[#E4A101]">GAMERS</span></h2>
                        <p className="font-medium text-[#d2d2d2]">Compete with 100 player on a remote island for winner known issue where certain strategic</p>
                        <img className="py-6" src={titleImg} alt="" />
                    </div>
                    

                    <div className="py-4 flex flex-col items-center lg:items-start justify-center text-center lg:space-y-8 lg:gap-0 gap-8">
                        <div className="flex lg:flex-row flex-col items-center lg:items-start justify-center text-center lg:text-left lg:space-x-4 lg:gap-0 gap-4 text-white group cursor-pointer">
                            <div className="py-3 px-6 bg-[#2E3440] inline-block border-8 border-[#333240] group-hover:border-[#EAA400] duration-300">
                                <img src={mask} alt="" />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold">VR Development</h2>
                                <p className="text-[#aaa9a9]">See how well critics rating new video game release with 100 players</p>
                            </div>
                        </div>

                        <div className="flex lg:flex-row flex-col items-center lg:items-start justify-center text-center lg:text-left lg:space-x-4 lg:gap-0 gap-4 text-white group cursor-pointer">
                            <div className="py-3 px-6 bg-[#2E3440] inline-block border-8 border-[#333240] group-hover:border-[#EAA400] duration-300">
                                <img src={likeMan} alt="" />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold">Design & Strategy</h2>
                                <p className="text-[#aaa9a9]">Village and the subline of her own road, the Line Lane. Pityful a rethoric question</p>
                            </div>
                        </div>

                        <div className="flex lg:flex-row flex-col items-center lg:items-start justify-center text-center lg:text-left lg:space-x-4 lg:gap-0 gap-4 text-white group cursor-pointer">
                            <div className="py-3 px-6 bg-[#2E3440] inline-block border-8 border-[#333240] group-hover:border-[#EAA400] duration-300">
                                <img src={fire} alt="" />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold">Jungle Pharaoh</h2>
                                <p className="text-[#aaa9a9]">Village and the subline of her own road, the Line Lane. Pityful a rethoric question</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="w-1/3 hidden lg:block">
                    
                    <div className="z-10 absolute ">
                         <img className="z-10 relative left-[110px] w-[70%]" src={gameC} alt="" />
                    </div>
                    <div className="white-space hidden lg:block"></div>
                    <div className="white-space2 hidden lg:block"></div>
                </div>

                <div className="w-2/3 hidden lg:block">
                    <div className="lg:ml-[96px] mt-20">
                         <img src={map} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Introduction;