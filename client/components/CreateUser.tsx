import { useState } from 'react'

const newUserData = {
  username: '',
  email: '',
  avatar_url: '',
}

export default function CreateUser() {
  const [newUser, setNewUser] = useState(newUserData)

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
    console.log(newUser)
  }

  return (
    <>
      <form>
        <label>Username: </label>
        <input
          type="text"
          id="username"
          value={newUsername}
          onChange={handleChange}
        />
        <label>Email: </label>
        <input
          type="text"
          id="username"
          value={newEmail}
          onChange={handleChange}
        />
        <label>Avatar URL: </label>
        <input
          type="text"
          id="username"
          value={newAvatar_url}
          onChange={handleChange}
        />
      </form>
    </>
  )
}
