import Author from './components/Author'
// import AuthorPage from './components/AuthorPage/AuthorPage'
import Header from './components/Header'
import Quote from './components/Quote'

const DUMMY_TEXT =
    '“The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.”'

function App() {
    return (
        <>
            <Header />
            <main className='max-w-[615px] mx-auto pt-[160px]'>
                <Quote text={DUMMY_TEXT} />
                <Author />
            </main>
            {/* <AuthorPage quoteList={[DUMMY_TEXT, DUMMY_TEXT, DUMMY_TEXT]} /> */}
        </>
    )
}

export default App
