import { useState } from 'react';
import './Search.css'
import { AiOutlineClose } from 'react-icons/ai';

const Search = () => {
    const [toggle, setToggle] = useState(true)
    const handle = () => {
        setToggle(!toggle)
    }
    return (
        <div className="z-10 relative">
            {
                toggle? 
                <><div className=" text-white left-0 top-0 fixed z-10 w-full h-screen bg-[#131014]">
                <div className='absolute right-12 top-12'>
                    <p onClick={handle} className='py-2 px-2 border hover:bg-[red] hover:text-white hover:border-transparent duration-300 inline-block my-2 cursor-pointer'><AiOutlineClose></AiOutlineClose></p>
                </div>
                <from className="flex items-center justify-center w-full  px-80 search">
                    <input className='border-b outline-none py-2 bg-transparent w-full' type="text" placeholder="Search here ..." name="" id="" />
                    <input className='py-2 bg-[#E4A101] cursor-pointer hover:text-[#262626] duration-300 hover:bg-[#eeb83a] text-white px-6 ml-[-98px] text-title' type="submit" value="Search" />
                </from>
            </div></>:<></>
            }
        </div>
    );
};

export default Search;