import { configureStore } from '@reduxjs/toolkit'
import getQuotes from '../api/getQuotes'
import quoteSliceReducer, { initialState, saveQuoteList, selectRandomQuote } from './quoteSlice'

const quoteList = JSON.parse(localStorage.getItem('quotes') || 'null')

export const store = configureStore({
    preloadedState: {
        quote: quoteList === null ? initialState : { ...initialState, quoteList: quoteList },
    },
    reducer: {
        quote: quoteSliceReducer,
    },
})

if (!localStorage.getItem('quotes')) {
    getQuotes().then((quotes) => {
        store.dispatch(saveQuoteList(quotes))
        store.dispatch(selectRandomQuote())
    })
} else {
    store.dispatch(selectRandomQuote())
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
