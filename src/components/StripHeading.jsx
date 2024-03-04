const StripHeading = ({children}) => {
    return (
        <>
            <h1 className="flex text-2xl md:text-3xl font-bold text-primary"><img src="/strip.svg" className="w-[30px] me-3" alt="" />{children}</h1>
        </>
    )
}

export default StripHeading;