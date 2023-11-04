import logo from '../../assets/image/projectlogo.png'
import { FaShoppingBasket } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import './Navbar.css'

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from 'react';
import Cart from '../../components/Cart/Cart';
import Search from '../../components/Search/Search';
import { Link } from 'react-scroll';




const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [toggle, setToggle] = useState(false)
    const handle = () => {
        setToggle(!toggle)
    }

    const [sToggle, setSToggle] = useState(false)
    const sHandle = () => {
        setSToggle(!sToggle)
    }

    const [changeColor, setChangeColor] = useState()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 90) setChangeColor(true);
            else setChangeColor(false);
        })
    }, [])
    return (
        
            <div className='fixed top-0 z-20 w-full'>
                <div className={`lg:px-20 md:px-16 sm:px-12 px-12 py-8  navbg duration-200 ${changeColor ? "bg-[#1E1624] border-b border-[#ffffff44]" : ""}`}>
                    <div className='text-white flex items-center justify-between'>

                        <Link to="home" smooth={true} duration={1000}>
                        <div className='flex items-center space-x-1 text-title text-xl font-bold z-10 cursor-pointer'>
                            <img src={logo} alt="" />
                            <p className='lg:text-xl md:text-xl sm:text-xl text-lg'>SYDUR RAHMAN</p>
                        </div>
                        </Link>

                        <div className='menu-link relative'>
                            <ul className='lg:flex hidden items-center space-x-6 text-base text-title relative z-10 capitalize'>
                                <Link to="home" smooth={true} duration={1000}><li><a href="">Home</a></li></Link>

                                <Link to="about" smooth={true} duration={1000}  offset={-100} ><li><a href="">about us</a></li></Link>

                                <Link to="game" smooth={true} duration={1000} offset={-100} ><li><a href="">Games</a></li></Link>

                                <Link to="services" smooth={true} duration={1000} offset={-100} ><li><a href="">Services</a></li></Link>

                                <Link to="products" smooth={true} duration={1000} offset={-100} ><li><a href="">products</a></li></Link>

                                <Link to="blog" smooth={true} duration={1000} offset={-100} ><li><a href="">Blogs</a></li></Link>

                                <Link to="contact" smooth={true} duration={1000} offset={-100} ><li><a href="">contact</a></li></Link>

                                <p onClick={handle} className=' cursor-pointer px-2 py-2 border-[#e9a3017b] border text-[#E9A401] hover:bg-[#E9A401] hover:text-white duration-300'><FaShoppingBasket></FaShoppingBasket></p>
                                <p onClick={sHandle} className=' cursor-pointer px-2 py-2 border-[#e9a3017b] border text-[#E9A401] hover:bg-[#E9A401] hover:text-white duration-300'><BiSearch></BiSearch></p>
                            </ul>
                            <div onClick={() => setIsOpen(true)} className="lg:hidden text-2xl py-1 px-2 border border-[#E9A401] hover:bg-[#E9A401] hover:text-white duration-300 text-[#E9A401]">
                                <HiOutlineMenuAlt4></HiOutlineMenuAlt4>
                            </div>
                        </div>

                    </div>


                    {/* small device */}

                    <div className={`lg:hidden fixed top-0 bg-[#0A0C4C] w-full h-full z-50 p-5 duration-500 space-y-5 overflow-y-auto ${isOpen ? "left-0" : "left-[-100%]"
                        }`}>

                        <div className="flex justify-between items-center text-white lg:px-20 md:px-16 sm:px-12 px-12 py-8">
                            <div className='flex items-center space-x-1 text-title text-xl font-bold'>
                                <img src={logo} alt="" />
                                <p className='lg:text-xl md:text-xl sm:text-xl text-lg'>SYDUR RAHMAN</p>
                            </div>

                            <div onClick={() => setIsOpen(false)} className="text-xl py-2 px-2 border">
                                <AiOutlineClose></AiOutlineClose>
                            </div>
                        </div>



                        <div className='relative px-28'>
                            <ul className='flex flex-col  text-lg text-title relative z-10 text-white space-y-4'>
                                <li><a href="">Home</a></li>
                                <li><a href="">about us</a></li>
                                <li><a href="">Games</a></li>
                                <li><a href="">Services</a></li>
                                <li><a href="">products</a></li>
                                <li><a href="">Blogs</a></li>
                                <li><a href="">contact</a></li>
                                <li ><a className='inline-block' href=""><FaShoppingBasket></FaShoppingBasket></a></li>
                                <li><a className='inline-block' href=""><BiSearch></BiSearch></a></li>
                            </ul>

                        </div>

                    </div>


                    <div>
                        {
                            toggle ? <><Cart></Cart> </> : <></>
                        }

                    </div>

                    <div>
                        {
                            sToggle ? <><Search></Search> </> : <></>
                        }

                    </div>

                </div>
            </div>
       

    );
};

export default Navbar;