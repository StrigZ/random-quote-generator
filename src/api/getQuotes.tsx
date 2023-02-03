const getQuotes = async () => {
    const res = await fetch('https://type.fit/api/quotes')
    const data = res.json()
    localStorage.setItem('quotes', JSON.stringify(data))
    return data
}

export default getQuotes
