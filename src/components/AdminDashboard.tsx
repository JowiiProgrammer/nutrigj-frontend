import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import Header from './Header'
import Sidebar from './Sidebar'
import UserManagement from './UserManagement'
import ContentManagement from './ContentManagement'
import Analytics from './Analytics'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('user-management')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const { currentUser } = useAuth()

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} setActiveTab={setActiveTab} isAdmin={true} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium mb-4">Admin Dashboard</h3>
            {activeTab === 'user-management' && <UserManagement />}
            {activeTab === 'content-management' && <ContentManagement />}
            {activeTab === 'analytics' && <Analytics />}
          </div>
        </main>
      </div>
    </div>
  )
}