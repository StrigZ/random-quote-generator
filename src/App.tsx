import Header from './components/Header'
import RandomQuotePage from './pages/RandomQuotePage'

function App() {
    return (
        <>
            <Header />
            <RandomQuotePage />
            {/* TODO: Add routing
             <AuthorPage quoteList={[DUMMY_TEXT, DUMMY_TEXT, DUMMY_TEXT]} /> */}
        </>
    )
}

export default App
