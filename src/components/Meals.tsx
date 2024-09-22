// src/components/Meals.tsx

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { getMeals } from '../utils/api'

interface Meal {
  id: string
  name: string
  description: string
  calories: number
}

export default function Meals() {
  const [meals, setMeals] = useState<Meal[]>([])

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await getMeals()
        setMeals(response.data)
      } catch (error) {
        console.error('Failed to fetch meals:', error)
      }
    }
    fetchMeals()
  }, [])

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Meals</h2>
      {meals.map((meal) => (
        <Card key={meal.id}>
          <CardHeader>
            <CardTitle>{meal.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{meal.description}</p>
            <p>Calories: {meal.calories}</p>
          </CardContent>
        </Card>
      ))}
      <Button>Add New Meal</Button>
    </div>
  )
}