import img from '../../assets/image/cart_p01.jpg'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const Cart = () => {
    const [toggle, setToggle] = useState(false)
    const handle = () => {
        setToggle(!toggle)
    }
    return (
        <div className='text-white absolute right-12 top-[20%] z-10'>
            {toggle?
                <></>:<><div className="bg-[#131014] py-4 px-4 relative">
                <p onClick={handle} className='py-2 px-2 border hover:bg-[red] hover:text-white hover:border-transparent duration-300 inline-block my-2 cursor-pointer'><AiOutlineClose></AiOutlineClose></p>
                <div className='flex space-x-6 border-b-2 pb-4 border-b-[#291B35]'>
                    <div className='w-1/4'>
                        <img className='' src={img} alt="" />
                    </div>
                    <div className='w-2/3 flex justify-between'>
                        <div>
                            <h2 className='text-xl'>Xbox One Controller</h2>
                            <p className='py-2'>$229.9 <del className='text-[#959595] px-2'>$229.9</del></p>

                        </div>
                        <div className='text-2xl cursor-pointer hover:text-[red] duration-300'>
                            <p><RiDeleteBin6Line></RiDeleteBin6Line></p>
                        </div>
                    </div>
                </div>

                <div className='py-2'>
                    <div className='flex items-center justify-between font-semibold text-[#bbb]'>
                        <p>Total:</p>
                        <p>$239.9</p>
                    </div>

                    <div className='py-4 space-y-2 cursor-pointer'>
                         <p className='text-center py-2 bg-[#E4A101] text-[#262626] font-medium'>SHOPPING CART</p>
                         <p className='text-center py-2 bg-[#291B35] text-[#fff] '>C H E C K O U T</p>
                    </div>
                </div>
            </div></>
            }
        </div>
    );
};

export default Cart;