import { GiAbstract102 } from 'react-icons/gi';

const Contact = () => {
    return (
        <div className="lg:px-20 md:px-16 sm:px-12 px-12 py-16" id="contact">
            <div className="grid lg:grid-cols-2 gap-6">

                <div className='flex flex-col justify-center items-center lg:items-start text-center lg:text-left'>
                    <h2 className="text-title text-5xl font-extrabold leading-tight">CONTACT US AND FIND <span className="text-[#E4A101]">YOUR GAME</span></h2>
                    <p className="py-2 text-[#5d5d5d] font-medium">
                        Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor
                    </p>

                    <div className='py-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left'>
                        <h2 className='flex items-center text-xl font-semibold text-[#E4A101]'><GiAbstract102></GiAbstract102><span className='px-2 text-title text-[#262626]'>INFORMATION</span></h2>
                        <div className='pt-8 space-y-2 font-medium text-[#5d5d5d]'>
                            <p>+8801746770324</p>
                            <p>mamonrabin@gmail.com</p>
                            <p>Mirpur-1,House No-20,Dhaka,Bangladesh</p>
                        </div>
                    </div>
                </div>

                <div className='lg:mt-4'>
                    <form className='w-full flex flex-col gap-6'>
                        <div className='w-full flex items-center space-x-4'>
                            <input className='py-2 px-4 w-full border border-[#787878] outline-none' type="text" placeholder='Name *' />
                            <input className='py-2 px-4 w-full border border-[#787878] outline-none' type="text" placeholder='Email *' />
                        </div>
                        <textarea className='py-2 px-4 w-full border border-[#787878] outline-none' placeholder='Enter your message' cols="30" rows="6"></textarea>
                        <div className="py-2">
                            <button className="bg-[#E4A101] text-[#1C1421] px-6 py-3 font-semibold banner-btn text-title">SUBMIT NOW</button>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;