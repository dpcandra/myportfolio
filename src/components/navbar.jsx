import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = ({handleMobileMenu}) => {

    return(
        <div className="z-50 flex justify-between px-7 md:px-[100px] py-9 sticky top-0 bg-body">
            <h1 className=" text-primary text-xl md:text-3xl font-bold">Dpcandra</h1>

            <div className="hidden md:flex">
                <a href="#home" className=" text-slate-400 font-semibold text-sm ms-8 uppercase tracking-wide hover:text-primary">Home</a>
                <a href="#about" className=" text-slate-400 font-semibold text-sm ms-8 uppercase tracking-wide hover:text-primary">About Me</a>
                <a href="#project" className=" text-slate-400 font-semibold text-sm ms-8 uppercase tracking-wide hover:text-primary">My Project</a>
                <a href="#about" className=" text-slate-400 font-semibold text-sm ms-8 uppercase tracking-wide hover:text-primary">Contact</a>
            </div>

            {/* <a href="" className="text-primary border-primary border px-5 rounded-full pb-1 hidden md:flex items-center">Login</a> */}
            <div className="md:hidden">
                <HiMenuAlt2 onClick={handleMobileMenu} className="text-primary text-3xl"/>
            </div>
        </div>
    )
}

export default Navbar;