import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { QuoteInterface } from '../../typings'

interface quoteState {
    randomQuote: QuoteInterface
    quoteList: QuoteInterface[]
    filteredList: QuoteInterface[]
}

export const initialState: quoteState = {
    randomQuote: { author: '', text: '' },
    quoteList: [],
    filteredList: [],
}

export const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
        filterByAuthor(state, action: PayloadAction<string>) {
            state.filteredList = state.quoteList.filter((quote) => quote.author === action.payload)
        },
        selectRandomQuote(state) {
            const randomIndex = Math.floor(Math.random() * state.quoteList.length)
            state.randomQuote = state.quoteList[randomIndex]
        },
        saveQuoteList(state, action: PayloadAction<QuoteInterface[]>) {
            state.quoteList = action.payload
        },
    },
})

export const { filterByAuthor, selectRandomQuote, saveQuoteList } = quoteSlice.actions

export const selectQuoteState = (state: RootState) => state.quote

export default quoteSlice.reducer
