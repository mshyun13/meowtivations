import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
// import { Button } from './Button.tsx'
// import { NavGroup, NavButton } from './Styled.tsx'
import { useAuth0 } from '@auth0/auth0-react'

export default function LoginButton() {
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <div>
      <IfAuthenticated>
        <button onClick={handleSignOut}>Sign out</button>
        {user && <p>Signed in as: {user?.nickname}</p>}
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button onClick={handleSignIn}>Sign in</button>
      </IfNotAuthenticated>
    </div>
  )
}
