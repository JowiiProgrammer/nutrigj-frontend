// src/components/Feedback.tsx

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { submitFeedback } from '../utils/api'

export default function Feedback() {
  const [feedback, setFeedback] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await submitFeedback(feedback)
      setMessage('Feedback submitted successfully!')
      setFeedback('')
    } catch (error) {
      setMessage('Failed to submit feedback. Please try again.')
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Provide Feedback</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter your feedback here"
            required
          />
          <Button type="submit">Submit Feedback</Button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </CardContent>
    </Card>
  )
}