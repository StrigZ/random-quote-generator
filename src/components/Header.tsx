import { TfiReload } from 'react-icons/tfi'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { selectRandomQuote } from '../store/quoteSlice'

const Header = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const getNewRandomQuoteHandler = () => {
        if (location.pathname === '/') {
            dispatch(selectRandomQuote())
        } else {
            navigate('/')
        }
    }

    return (
        <header className='font-raleway font-medium text-[#5b5959]  w-full flex justify-end '>
            <div
                className='group flex items-center cursor-pointer'
                onClick={getNewRandomQuoteHandler}
            >
                <h4 className='text-lg mr-[11px] group-hover:text-[#000000]'>random</h4>
                <TfiReload className='scale-x-[-1] w-4 h-[22px] group-hover:text-[#000000] group-hover:rotate-180 transition-transform' />
            </div>
        </header>
    )
}
export default Header
