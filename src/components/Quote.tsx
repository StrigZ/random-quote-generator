interface Props {
    text: string
}

const Quote = ({ text }: Props) => {
    return (
        <section className=' mb-[159px]  font-raleway font-medium text-4xl relative before:absolute before:-left-[100px]  before:w-2 before:h-full before:bg-[#F7DF94]'>
            {text}
        </section>
    )
}
export default Quote
