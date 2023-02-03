interface Props {
    quoteText: string
}

const Quote = ({ quoteText }: Props) => {
    return (
        <section className='md:h-[100px] mb-[159px]  font-raleway font-medium text-4xl  before:absolute before:-left-[100px]  before:w-2 before:h-[50%] before:bg-[#F7DF94]'>
            {quoteText}
        </section>
    )
}
export default Quote
