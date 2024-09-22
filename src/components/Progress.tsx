// src/components/Progress.tsx

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { getProgress } from '../utils/api'

interface ProgressEntry {
  id: string
  date: string
  weight: number
  bodyFatPercentage: number
}

export default function Progress() {
  const [progressEntries, setProgressEntries] = useState<ProgressEntry[]>([])

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await getProgress()
        setProgressEntries(response.data)
      } catch (error) {
        console.error('Failed to fetch progress:', error)
      }
    }
    fetchProgress()
  }, [])

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Progress Tracker</h2>
      {progressEntries.map((entry) => (
        <Card key={entry.id}>
          <CardHeader>
            <CardTitle>{entry.date}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Weight: {entry.weight} kg</p>
            <p>Body Fat: {entry.bodyFatPercentage}%</p>
          </CardContent>
        </Card>
      ))}
      <Button>Add New Entry</Button>
    </div>
  )
}