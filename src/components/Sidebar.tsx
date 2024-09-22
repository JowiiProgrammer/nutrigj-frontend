import React from 'react'
import { Button } from './ui/Button'
import { Home, Dumbbell, Apple, LineChart, MessageSquare, Users, FileText, BarChart } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  setActiveTab: (tab: string) => void
  isAdmin?: boolean
}

export default function Sidebar({ isOpen, setActiveTab, isAdmin = false }: SidebarProps) {
  const userMenuItems = [
    { name: 'Nutritional Plan', icon: Home, tab: 'nutritional-plan' },
    { name: 'Workouts', icon: Dumbbell, tab: 'workouts' },
    { name: 'Meals', icon: Apple, tab: 'meals' },
    { name: 'Progress', icon: LineChart, tab: 'progress' },
    { name: 'Feedback', icon: MessageSquare, tab: 'feedback' },
  ]

  const adminMenuItems = [
    { name: 'User Management', icon: Users, tab: 'user-management' },
    { name: 'Content Management', icon: FileText, tab: 'content-management' },
    { name: 'Analytics', icon: BarChart, tab: 'analytics' },
  ]

  const menuItems = isAdmin ? adminMenuItems : userMenuItems

  return (
    <aside className={`bg-white w-64 min-h-screen p-4 ${isOpen ? '' : 'hidden'}`}>
      <nav>
        {menuItems.map((item) => (
          <Button
            key={item.tab}
            variant="ghost"
            className="w-full justify-start mb-2"
            onClick={() => setActiveTab(item.tab)}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.name}
          </Button>
        ))}
      </nav>
    </aside>
  )
}