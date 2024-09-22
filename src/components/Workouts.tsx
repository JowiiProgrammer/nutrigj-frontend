// src/components/Workouts.tsx

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { getWorkouts } from '../utils/api'

interface Exercise {
  id: string
  name: string
  sets: number
  reps: number
}

interface Workout {
  id: string
  name: string
  exercises: Exercise[]
}

export default function Workouts() {
  const [workouts, setWorkouts] = useState<Workout[]>([])

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await getWorkouts()
        setWorkouts(response.data)
      } catch (error) {
        console.error('Failed to fetch workouts:', error)
      }
    }
    fetchWorkouts()
  }, [])

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Workouts</h2>
      {workouts.map((workout) => (
        <Card key={workout.id}>
          <CardHeader>
            <CardTitle>{workout.name}</CardTitle>
          </CardHeader>
          <CardContent>
            {workout.exercises.map((exercise) => (
              <div key={exercise.id} className="mb-2">
                <p>{exercise.name}</p>
                <p>Sets: {exercise.sets}, Reps: {exercise.reps}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
      <Button>Add New Workout</Button>
    </div>
  )
}