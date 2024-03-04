const Button = ({ url,label }) => {
    return (
        <>
            <a href={url} className="text-body uppercase bg-primary px-5 py-2 md:px-7 md:py-3 font-semibold tracking-wide rounded-sm hover:bg-primaryHighlight">{label}</a>
        </>
    )
}

export default Button;