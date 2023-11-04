import './Footer.css'

import logo from '../../../assets/image/projectlogo.png'
import { BiMap } from 'react-icons/bi';
import { BsHeadphones } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaFacebookF,FaInstagram,FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='lg:px-20 md:px-16 sm:px-12 px-12 relative'>
            <div className='py-8 w-[85%] bg-[#fff] rounded-full box-rounded px-8 flex items-center lg:justify-between flex-wrap lg:flex-nowrap justify-center lg:gap-0 gap-4'>
                <div>
                    <h2 className='text-title text-xl font-medium text-[#E4A101]'>OUR NEWSLETTER</h2>
                </div>
                <div>
                    <form className='flex  space-x-2 items-center w-full'>
                        <input className='place lg:w-[70vh] border border-[#E4A101] py-2 px-4 w-full outline-none' type="text" placeholder='Enter your email..' />
                        <button className='bg-[#E4A101] py-2 px-4 text-title hover:bg-[#1C242F] hover:text-white duration-300'>SUBSCRIBE</button>
                    </form>
                </div>
            </div>

            <div className='pt-16'>

                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 py-12 footer-part'>

                    <div>
                        <div className='flex items-center space-x-2'>
                            <img src={logo} alt="" />
                            <h2 className='text-xl font-extrabold text-title'>SYDUR <span className='text-[#E4A101]'>RAHMAN</span></h2>
                        </div>
                        <div className='py-6 space-y-3'>
                            <p className='text-[#6a6a6a]'>Gemas marketplace the relase etras thats sheets continig passag.</p>
                            <p className='flex text-[#6a6a6a] items-center space-x-1'><span><BiMap></BiMap></span><span>address : PO Box W75 Street lan</span></p>
                            <p className='flex text-[#6a6a6a] items-center space-x-1'><span><BsHeadphones></BsHeadphones></span><span>Phone : +24 1245 654 235</span></p>
                            <p className='flex text-[#6a6a6a] items-center space-x-1'><span><MdEmail></MdEmail></span><span>Email : info@exemple.com</span></p>

                        </div>
                    </div>

                    <div className='pt-2 lg:ml-8'>
                        <h2 className='text-xl footer-head text-title font-bold text-[#262626]'>PRODUCTS</h2>
                        <ul className='py-6 space-y-3 text-[#6a6a6a]'>
                            <li><a href="">Graphics (26)</a></li>
                            <li><a href="">Backgrounds (11)</a></li>
                            <li><a href="">Fonts (9)</a></li>
                            <li><a href="">Music (3)</a></li>
                            <li><a href="">Photography (3)</a></li>
                        </ul>
                    </div>

                    <div className='pt-2'>
                        <h2 className='text-xl footer-head text-title font-bold text-[#262626]'>NEED HELP?</h2>
                        <ul className='py-6 space-y-3 text-[#6a6a6a]'>
                            <li><a href="">Terms & Conditions</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Refund Policy</a></li>
                            <li><a href="">Affiliate</a></li>
                            <li><a href="">FAQUse Cases</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-xl footer-head text-title font-bold text-[#262626]'>FOLLOW US</h2>
                        <div className='py-6'>
                            <div className='flex items-center space-x-2'>
                                <p className='px-2 text-lg rounded py-2 bg-[#3B5998] text-white'><FaFacebookF></FaFacebookF></p>
                                <p className='px-2 text-lg rounded py-2 bg-[#55ACEE] text-white'><FaTwitter></FaTwitter></p>
                                <p className='px-2 text-lg rounded py-2 bg-[#D71E18] text-white'><FaYoutube></FaYoutube></p>
                                <p className='px-2 text-lg rounded py-2 bg-[#1565C0] text-white'><FaInstagram></FaInstagram></p>
                            </div>
                            <div>
                                 <p className='text-[#6a6a6a] pt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Footer;