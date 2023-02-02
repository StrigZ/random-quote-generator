import Header from '../Header'
import Quote from '../Quote'
interface Props {
    quoteList: string[]
}

const AuthorPage = ({ quoteList }: Props) => {
    return (
        <>
            <Header />
            <main className='max-w-[615px] mx-auto '>
                <h1 className='font-bold text-4xl text-[#4F4F4F] mb-[140px] mt-12'>Bill Gates</h1>
                {quoteList.map((text) => (
                    <Quote key={text} text={text} />
                ))}
            </main>
        </>
    )
}
export default AuthorPage
