import { BsXLg } from "react-icons/bs";

const MobileMenu = ({mobileMenu,handleMobileMenu}) => {
    return (
        <div className={`${mobileMenu ? 'block' : 'hidden'} z-50 md:hidden fixed top-25 left-16 bg-bodyLight border-2 border-primary shadow-lg rounded-lg w-4/5 p-5`}>

        <div className="flex justify-end">
            <BsXLg onClick={handleMobileMenu} className="text-primary text-3xl"/>
        </div>

           <div className="flex flex-col">
            
                <a href="" className="font-semibold tracking-wide text-slate-400 uppercase mb-3">Home</a>
                <a href="" className="font-semibold tracking-wide text-slate-400 uppercase mb-3">about me</a>
                <a href="" className="font-semibold tracking-wide text-slate-400 uppercase mb-3">My project</a>
                <a href="" className="font-semibold tracking-wide text-slate-400 uppercase mb-3">Contact</a>
           </div>
           <img src="./strip.svg" className="w-full bg-primary h-[1px] my-4" alt="" />
           <a href="" className="text-primary border-primary border px-6 rounded-full pb-1  md:flex items-center">Login</a>
        </div>
    )
}

export default MobileMenu;