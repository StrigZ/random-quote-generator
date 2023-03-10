import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
interface Props {
    quoteAuthor: string
}
const Author = ({ quoteAuthor }: Props) => {
    const navigate = useNavigate()
    return (
        <div
            className='flex items-center justify-between font-raleway group hover:bg-[#333333] py-[50px] pl-[30px] -ml-[30px] pr-[40px] after:absolute after:contents cursor-pointer transition-all select-none'
            onClick={() => navigate(`/${quoteAuthor}`)}
        >
            <div>
                <h2 className='font-bold text-2xl text-[#4F4F4F] mb-2 group-hover:text-[#F2F2F2]'>
                    {quoteAuthor ? quoteAuthor : 'Anonymous'}
                </h2>
            </div>
            <MdOutlineArrowRightAlt className='hidden group-hover:flex text-2xl text-[#F2F2F2]' />
        </div>
    )
}
export default Author
