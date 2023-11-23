import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {

    const { totalProducts } = useSelector((state: any) => state.cartReducer)

    return (
        <div className='flex justify-between shadow-xl p-6 sticky z-50 bg-white top-0'>
            <div>
            <Link to="/"><span> Ecomerce Cart</span> </Link></div>
            <Link to="/cart"> <div className='flex flex-row gap-2 items-center'>
              {totalProducts > 0 &&  <span className='shadow-lg rounded-2xl px-2 py-1 text-lg'>{totalProducts}</span> } 
                <FaCartArrowDown className='cursor-pointer' size={35}/>
            </div>
            </Link>
        </div>
    );
}

export default Header;
