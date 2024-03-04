import Text from "./Text";

const Project = () => {
    return (
        <div id="project" className="py-[100px] px-10 md:px-[50px] lg:px-[200px]">
            <h1 className="text-3xl mb-5 font-bold text-center text-primary">Featured Project</h1>
            <div className="mb-10">
                <p className="text-slate-400 font-semibold tracking-wide text-center">Explore my showcase of innovative projects, highlighting creativity and </p>
                <p className="text-slate-400 font-semibold tracking-wide text-center">expertise in web development.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* <!-- Picture 1 --> */}
            <div className="w-full">
                <img src="./A1.jpg" alt="Image 1" className="w-full h-full object-cover rounded-lg" />
            </div>

            {/* <!-- Picture 2 --> */}
            <div className="w-full">
                <img src="./B1.jpg" alt="Image 2" className="w-full h-full object-cover rounded-lg" />
            </div>

            {/* <!-- Picture 3 --> */}
            <div className="w-full">
                <img src="./C1.jpg" alt="Image 3" className="w-full h-full object-cover rounded-lg" />
            </div>

            {/* <!-- Picture 4 --> */}
            <div className="w-full">
                <img src="./A2.jpg" alt="Image 4" className="w-full h-full object-cover rounded-lg" />
            </div>

            {/* <!-- Picture 5 --> */}
            <div className="w-full">
                <img src="./B2.jpg" alt="Image 5" className="w-full h-full object-cover rounded-lg" />
            </div>

            {/* <!-- Picture 6 --> */}
            <div className="w-full">
                <img src="./C2.jpg" alt="Image 6" className="w-full h-full object-cover" />
            </div>
            </div>

        </div>
    )
}

export default Project;