import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import Header from './Header'
import Sidebar from './Sidebar'
import NutritionalPlan from './NutritionalPlan'
import Workouts from './Workouts'
import Meals from './Meals'
import Progress from './Progress'
import Feedback from './Feedback'
import AdminDashboard from './AdminDashboard'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('nutritional-plan')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const { currentUser } = useAuth()

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  if (currentUser?.role === 'admin') {
    return <AdminDashboard />
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} setActiveTab={setActiveTab} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium mb-4">Welcome back, {currentUser?.email}</h3>
            {activeTab === 'nutritional-plan' && <NutritionalPlan />}
            {activeTab === 'workouts' && <Workouts />}
            {activeTab === 'meals' && <Meals />}
            {activeTab === 'progress' && <Progress />}
            {activeTab === 'feedback' && <Feedback />}
          </div>
        </main>
      </div>
    </div>
  )
}