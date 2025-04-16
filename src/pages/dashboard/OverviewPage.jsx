import { Tabs, Tab } from '../../components/common/Tabs'
import Button from '../../components/common/Button'
import OverviewStatCard from '../../components/dashboard/OverviewStatCard'

const OverviewPage = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold text-gray-800 mb-6'>Dashboard Overview</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
                <OverviewStatCard
                    title="Total Users"
                    stat="1,234"
                    change="+12% from last month"
                    changeType="positive"
                />
                <OverviewStatCard
                    title="Revenue"
                    stat="$34,000"
                    change="+8% from last month"
                    changeType="positive"
                />
                <OverviewStatCard
                    title="Active Products"
                    stat="256"
                    change="-3% from last month"
                    changeType="negative"
                />
                <OverviewStatCard
                    title="Conversion Rate"
                    stat="3.2%"
                    change="+0.5% from last month"
                    changeType="positive"
                />
            </div>

            <Tabs defaultTab="recentActivity">
                <Tab id="recentActivity" label="Recent Activity">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <p>Recent Activities will be displayed here.</p>
                    </div>
                </Tab>
                <Tab id="statistics" label="Statistics">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <p>Statistics will be displayed here.</p>
                    </div>
                </Tab>
                <Tab id="quickActions" label="Quick Actions">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex space-x-4">
                            <Button variant="primary">Generate Report</Button>
                            <Button variant="secondary">Export Data</Button>
                            <Button variant="danger">Reset Dashboard</Button>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default OverviewPage