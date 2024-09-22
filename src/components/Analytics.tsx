import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', users: 400, meals: 240, workouts: 200 },
  { name: 'Feb', users: 300, meals: 139, workouts: 221 },
  { name: 'Mar', users: 200, meals: 980, workouts: 229 },
  { name: 'Apr', users: 278, meals: 390, workouts: 200 },
  { name: 'May', users: 189, meals: 480, workouts: 218 },
  { name: 'Jun', users: 239, meals: 380, workouts: 250 },
]

export default function Analytics() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Analytics</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="users" fill="#8884d8" />
          <Bar dataKey="meals" fill="#82ca9d" />
          <Bar dataKey="workouts" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}