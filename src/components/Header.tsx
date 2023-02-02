import { TfiReload } from 'react-icons/tfi'

const Header = () => {
    return (
        <header className='font-raleway font-medium text-[#5b5959]  w-full flex justify-end '>
            <div className='group flex items-center cursor-pointer'>
                <h4 className='text-lg mr-[11px] group-hover:text-[#000000]'>random</h4>
                <TfiReload className='scale-x-[-1] w-4 h-[22px] group-hover:text-[#000000] group-hover:rotate-180 transition-transform' />
            </div>
        </header>
    )
}
export default Header
