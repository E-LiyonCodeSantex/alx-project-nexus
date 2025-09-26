
import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
    return (
        <div className="w-full flex justify-center items-center">
            <div className='flex justify-center items-center gap-4 w-full max-w-[500px] bg-[#F2F3F2] p-2 rounded-2xl'>
                <FaSearch />
                <input 
                placeholder='Search Store'
                className='w-full bg-[#F2F3F2] outline-none'/>
            </div>
        </div>
    )
}