import Button from "./Button";
import { BsInstagram,BsWhatsapp,BsLinkedin,BsSteam,BsDiscord,BsFillCaretRightFill } from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
    return (
        <div className=" md:flex px-10 md:px-[50px] lg:px-[200px]" id="home">

            {/* content */}
            <div className="md:w-1/2 flex items-center">
                <div className="w-full">
                    <div className="md:mt-[200px] flex justify-center ">
                        <div>
                            <p className="text-primary font-semibold mb-5 flex tracking-wide"><img src="./strip.svg" className="w-[30px] me-3" alt="" /> HELLO</p>
                            <h1 className="text-white text-3xl md:text-3xl lg:text-5xl font-bold mb-5">I'm <span className="text-primary">Candra</span> Dharma</h1>
                            <p className=" text-slate-400 font-semibold tracking-wide">This is Candra Dharma, Front-end Programer, Backend  </p>
                            <p className="text-slate-400 font-semibold tracking-wide mb-[80px]">Programer and Photographer</p>
                            <Button url="https://docs.google.com/document/d/1VcKWE-6_w5xHoHDWNy3NcmUfsqj4snZBBP60N18v2SQ/edit?usp=sharing" label="download cv" />
                        </div>
                    </div>
                    <div className="md:flex hidden mt-10 md:mt-[200px] md:pb-[50px] lg:pb-0"> 
                        <a href="https://www.instagram.com/kcandradp/" className="text-slate-400 me-7 hover:text-primary"><BsInstagram/></a>
                        <a href="https://wa.me/6282288880962" className="text-slate-400 me-7 hover:text-primary"><BsWhatsapp/></a>
                        <a href="https://www.linkedin.com/in/candra-dp-49486323b/" className="text-slate-400 me-7 hover:text-primary"><BsLinkedin/></a>
                        <a href="https://steamcommunity.com/id/inoecandra/" className="text-slate-400 me-7 hover:text-primary"><BsSteam/></a>
                        {/* <a href="" className="text-slate-400 me-7 hover:text-primary"><BsDiscord/></a> */}
                    </div>
                </div>
            </div>

            {/* picture */}
            <div className="md:w-1/2 md:flex mt-10 md:mt-0">
                <img src="./DSC03374_3.jpg" className="w-[400px] h-[500px] lg:w-[550px] lg:h-[825px]" alt="" />

               <div className="flex justify-center my-5">
                    <div className="flex md:mt-[200px] md:hidden"> 
                        <a href="https://www.instagram.com/kcandradp/" className="text-slate-400 me-7 hover:text-primary"><BsInstagram/></a>
                        <a href="https://wa.me/6282288880962" className="text-slate-400 me-7 hover:text-primary"><BsWhatsapp/></a>
                        <a href="https://www.linkedin.com/in/candra-dp-49486323b/" className="text-slate-400 me-7 hover:text-primary"><BsLinkedin/></a>
                        <a href="https://steamcommunity.com/id/inoecandra/" className="text-slate-400 me-7 hover:text-primary"><BsSteam/></a>
                        {/* <a href="" className="text-slate-400 me-7 hover:text-primary"><BsDiscord/></a> */}
                    </div>
               </div>

                <div className="flex items-end pb-4 lg:pb-[100px]">
                    <p className="text-primary  tracking-wider font-semibold transform md:rotate-90 lg:h-[30px] flex items-center">SCROLL DOWN <BsFillCaretRightFill className="ms-3"/></p>
                </div>
                
            </div>

        </div>
    )
}

export default Hero;