import { useDispatch, useSelector } from 'react-redux'
import { selectQuoteState, filterByAuthor } from '../store/quoteSlice'
import Header from '../components/Header'
import Quote from '../components/Quote'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const AuthorPage = () => {
    const quoteState = useSelector(selectQuoteState)
    const { author } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        if (author) dispatch(filterByAuthor(author))
    }, [])
    return (
        <>
            <Header />
            <main className='max-w-[615px] mx-auto '>
                <h1 className='font-bold text-4xl text-[#4F4F4F] mb-[140px] mt-12'>{author}</h1>
                {quoteState.filteredList.map((quotes) => (
                    <Quote key={quotes.text} quoteText={quotes.text} />
                ))}
            </main>
        </>
    )
}
export default AuthorPage
