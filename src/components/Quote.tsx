interface Props {
    quoteText: string
}

const Quote = ({ quoteText }: Props) => {
    return (
        <section className='font-raleway font-medium text-4xl relative before:absolute before:-left-[100px]  before:w-2 md:before:h-full before:bg-[#F7DF94] flex-1  mb-[110px]'>
            {quoteText}
        </section>
    )
}
export default Quote
