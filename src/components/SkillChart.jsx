const SkillChart = ({label , percentage}) => {
    const parsedPercentage = parseInt(percentage);
    return (
        <div className="px-12 mb-10">
            <div className="flex justify-between">
                <p className="uppercase text-white tracking-wide">{label}</p>
                <p className="uppercase text-white tracking-wide">{percentage}%</p>
            </div>
            <div className="bg-body mt-7">
                <img style={{ width: `${parsedPercentage}%` }} className={`h-[5px] bg-primary`} src="./strip.svg" alt="" />
            </div>
        </div>           
    )
}

export default SkillChart;