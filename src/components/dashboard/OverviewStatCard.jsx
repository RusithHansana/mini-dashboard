const OverviewStatCard = ({
    title,
    stat,
    change,
    changeType = "positive"
}) => {
    const changeColorClasses = {
        positive: "text-green-500",
        negative: "text-red-500",
        neutral: "text-gray-500"
    }
    return (
        <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">{stat}</p>
            <p className={`${changeColorClasses[changeType]} text-sm mt-1`}>{change}</p>
        </div>
    )
}

export default OverviewStatCard