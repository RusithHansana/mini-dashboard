import { useState } from "react"

const Tabs = ({ defaultTab, children }) => {
    const [activeTab, setActiveTab] = useState(defaultTab);

    const tabs = children.map(child => ({
        id: child.props.id,
        label: child.props.label,
        content: child.props.children
    }))

    return (
        <>
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab.id
                                ? 'border-blue-500 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>
            <div className="py-4">
                {tabs.find(tab => tab.id === activeTab)?.content}
            </div>
        </>
    )
}

const Tab = ({ id, label, children }) => {
    return <div id={id} label={label} >{children}</div>
}

export { Tabs, Tab }