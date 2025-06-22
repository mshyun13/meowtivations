import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useUser } from '../hooks/useUser'
import { Button } from './Button'
import { useNavigate } from 'react-router'

const newUserData = {
  username: '',
  email: '',
  avatar_url: '',
}

export default function CreateUser() {
  const [newUser, setNewUser] = useState(newUserData)
  const { getAccessTokenSilently } = useAuth0()
  const user = useUser()
  const navigate = useNavigate()

  const {
    username: newUsername,
    email: newEmail,
    avatar_url: newAvatar_url,
  } = newUser

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.target
    setNewUser({
      ...newUser,
      [id]: value,
    })
  }

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    const token = await getAccessTokenSilently()
    evt.preventDefault()
    user.add.mutate({ newUser, token })
    navigate('/')
  }

  return (
    <div className="justify-items-center bg-gray-200 rounded-2xl">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-96 justify-center"
      >
        <label htmlFor="username" className="text-center p-8 -m-4">
          Username:{' '}
        </label>
        <input
          type="text"
          id="username"
          value={newUsername}
          onChange={handleChange}
          className="border-green border-2"
        />
        <label htmlFor="email" className="text-center p-8 -m-4">
          Email:{' '}
        </label>
        <input
          type="text"
          id="email"
          value={newEmail}
          onChange={handleChange}
          className="border-green border-2"
        />
        <label htmlFor="avatar_url" className="text-center p-8 -m-4">
          Avatar URL:{' '}
        </label>
        <input
          type="text"
          id="avatar_url"
          value={newAvatar_url}
          onChange={handleChange}
          className="border-green border-2"
        />
        <br />
        <Button type="submit">Submit New User</Button>
        <br />
      </form>
    </div>
  )
}
