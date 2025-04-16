import { useState } from "react";
import DataTable from "../../components/common/DataTable";
import Modal from "../../components/common/Modal"
import Button from "../../components/common/Button";


const UsersPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
    ];

    const columns = [
        { key: 'name', title: 'Name' },
        { key: 'email', title: 'Email' },
        { key: 'role', title: 'Role' },
        {
            key: 'status',
            title: 'Status',
            render: (value) => (
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${value === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                    {value}
                </span>
            )
        },
    ];

    const handleRowClick = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Users</h2>
                <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                    Add User
                </Button>
            </div>

            <DataTable
                columns={columns}
                data={users}
                onRowClick={handleRowClick}
            />

            <Modal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setSelectedUser(null);
                }}
                title={selectedUser ? `User Details` : 'Add New User'}
            >
                {
                    selectedUser ? (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <p className="mt-1 text-sm text-gray-900">{selectedUser.name}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <p className="mt-1 text-sm text-gray-900">{selectedUser.email}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Role</label>
                                <p className="mt-1 text-sm text-gray-900">{selectedUser.role}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Status</label>
                                <p className="mt-1 text-sm text-gray-900">{selectedUser.status}</p>
                            </div>
                        </div>
                    ) : (
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                                    Role
                                </label>
                                <select
                                    id="role"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>
                            </div>
                        </form>
                    )
                }
            </Modal>
        </div>
    )
}

export default UsersPage