// src/components/NutritionalPlan.tsx

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { getNutritionalPlan } from '../utils/api'

interface Meal {
  id: string
  name: string
  description: string
  calories: number
}

interface NutritionalPlan {
  id: string
  meals: Meal[]
  totalCalories: number
}

export default function NutritionalPlan() {
  const [plan, setPlan] = useState<NutritionalPlan | null>(null)

  useEffect(() => {
    const fetchNutritionalPlan = async () => {
      try {
        const response = await getNutritionalPlan()
        setPlan(response.data)
      } catch (error) {
        console.error('Failed to fetch nutritional plan:', error)
      }
    }
    fetchNutritionalPlan()
  }, [])

  if (!plan) return <div>Loading...</div>

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Nutritional Plan</h2>
      <Card>
        <CardHeader>
          <CardTitle>Daily Meal Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Total Calories: {plan.totalCalories}</p>
          {plan.meals.map((meal) => (
            <Card key={meal.id} className="mt-4">
              <CardHeader>
                <CardTitle>{meal.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{meal.description}</p>
                <p>Calories: {meal.calories}</p>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
      <Button>Update Plan</Button>
    </div>
  )
}