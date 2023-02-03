import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'
import App from './App'
import AuthorPage from './pages/AuthorPage'
import RandomQuotePage from './pages/RandomQuotePage'
import './index.css'
import { store } from './store/store'

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path='/' element={<RandomQuotePage />} key={1} />,
        <Route path='/:author' element={<AuthorPage />} key={2} />,
    ]),
    { basename: '/random-quote-generator' },
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
)
