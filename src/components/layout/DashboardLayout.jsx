import { Outlet } from "react-router"
import Sidebar from "./Sidebar"

const DashboardLayout = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="flex">
                <Sidebar />
                <div className="flex-1 overflow-x-hidden ml-64">
                    <main className="p-6">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout