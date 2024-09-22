import React, { useState, useEffect } from 'react'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/Table'
import { User, Trash2 } from 'lucide-react'

interface User {
  id: string
  email: string
  role: string
}

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([])
  const [newUserEmail, setNewUserEmail] = useState('')
  const [newUserRole, setNewUserRole] = useState('user')

  useEffect(() => {
    // Fetch users from API
    // This is a placeholder, replace with actual API call
    setUsers([
      { id: '1', email: 'user1@example.com', role: 'user' },
      { id: '2', email: 'user2@example.com', role: 'user' },
      { id: '3', email: 'admin@example.com', role: 'admin' },
    ])
  }, [])

  const handleAddUser = () => {
    // Add user logic here
    console.log('Adding user:', newUserEmail, newUserRole)
    setNewUserEmail('')
    setNewUserRole('user')
  }

  const handleDeleteUser = (userId: string) => {
    // Delete user logic here
    console.log('Deleting user:', userId)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <div className="mb-4 flex space-x-2">
        <Input
          type="email"
          placeholder="New user email"
          value={newUserEmail}
          onChange={(e) => setNewUserEmail(e.target.value)}
        />
        <select
          className="border rounded px-2 py-1"
          value={newUserRole}
          onChange={(e) => setNewUserRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <Button onClick={handleAddUser}>Add User</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Button variant="ghost" onClick={() => handleDeleteUser(user.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}