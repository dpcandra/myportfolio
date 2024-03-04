import Text from "./Text";
import StripHeading from "./StripHeading";
import Button from "./Button";
import SkillChart from "./SkillChart";


const About = () => {
    return(
        <div id="about" className="bg-bodyLight py-[100px] px-10 md:px-[50px] lg:px-[200px]">
           {/* about */}
           <div className="md:flex w-full">

                <div className="md:w-1/2 flex justify-center w-full">
                    <div className="flex w-full justify-center">
                        <img className="w-[150px] h-[225px] lg:w-[230px] lg:h-[345px] shadow-lg" src="./DSC03405.jpg" alt="" />
                        <img className="w-[150px] h-[225px] lg:w-[230px] lg:h-[345px] ms-4 shadow-lg" src="./DSC03404.jpg" alt="" />
                    </div>
                </div>

                <div className="md:w-1/2 w-full mt-5 md:mt-0">
                    <StripHeading>About Me</StripHeading>
                    <div className="w-4/5">
                       <div className="mt-3"> <Text>Passionate individual with a love for technology web developing. Aspiring to make a positive impact by combining creativity and technical expertise in the ever-evolving digital landscape.</Text></div>
                       <div className="mt-8"><Text>Driven by curiosity, I explore new possibilities, seeking growth in every challenge.</Text></div>
                    </div>
                    <div className="mt-3">
                        <StripHeading>Contact</StripHeading>
                        <div className=" mt-4">
                            <a href="" className="flex mb-2">
                                <img className="w-[20px] me-3 fill-primary" src="./envelope-regular.svg" alt="" />
                                <Text>dpcandra@gmail.com</Text>
                            </a>
                            <a href="https://wa.me/6282288880962" className="flex mb-2">
                                <img className="w-[20px] me-3 fill-primary" src="./whatsapp.svg" alt="" />
                                <Text>0822 8888 0962</Text>
                            </a>
                            <a href="https://www.linkedin.com/in/candra-dp-49486323b/" className="flex mb-2">
                                <img className="w-[20px] me-3 fill-primary" src="./linkedin.svg" alt="" />
                                <Text>https://www.linkedin.com/in/candra-dp-49486323b/</Text>
                            </a>
                            <a href="https://www.instagram.com/kcandradp/" className="flex mb-2">
                                <img className="w-[20px] me-3 fill-primary" src="./instagram.svg" alt="" />
                                <Text>kcandradp</Text>
                            </a>
                        </div>
                    </div>
                </div>

           </div>


           <div className="md:hidden my-10">
                <StripHeading>My Skill</StripHeading>
            </div>

           {/* my skill */}
           <div className="md:mt-[100px] md:flex">
                <div className="w-1/7 me-5 hidden md:block">
                   <div className="transform -rotate-90 relative left-20 top-20">
                        <StripHeading>My Skill</StripHeading>
                   </div>
                </div>
                
                <div className="w-full md:w-2/5">
                    <SkillChart label="Front-end Web" percentage={83}/>
                    <SkillChart label="Back-end" percentage={67}/>
                </div>
                <div className="w-full md:w-2/5">
                    <SkillChart label="Photography" percentage={85}/>
                    <SkillChart label="Photo Editing" percentage={75}/>
                </div>
           </div>
        </div>
    )
}

export default About;