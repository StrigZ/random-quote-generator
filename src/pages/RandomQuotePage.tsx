import { useSelector } from 'react-redux'
import { selectQuoteState } from '../store/quoteSlice'
import Author from '../components/Author'
import Quote from '../components/Quote'
import Header from '../components/Header'

const RandomQuotePage = () => {
    const quoteState = useSelector(selectQuoteState)

    const randomQuote = quoteState.randomQuote

    return (
        <>
            <Header />
            <main className='max-w-[615px] mx-auto pt-[160px] flex flex-col '>
                {randomQuote ? (
                    <>
                        <Quote quoteText={randomQuote.text} />
                        <Author quoteAuthor={randomQuote.author} />
                    </>
                ) : (
                    <p className='font-bold text-4xl text-[#4F4F4F]  before:absolute before:-left-[100px]  before:w-2 before:h-full before:bg-[#F7DF94] '>
                        Loading quote...
                    </p>
                )}
            </main>
        </>
    )
}
export default RandomQuotePage
