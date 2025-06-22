import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { Button } from './Button.tsx'
import { useAuth0 } from '@auth0/auth0-react'

export default function LoginButton() {
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect({
      authorizationParams: {
        redirectUri: `${window.location.origin}/register`,
      },
    })
  }

  return (
    <div>
      <IfAuthenticated>
        <Button onClick={handleSignOut}>Sign out</Button>
        {user && <p>Signed in as: {user?.nickname}</p>}
      </IfAuthenticated>
      <IfNotAuthenticated>
        <Button onClick={handleSignIn}>Sign in</Button>
      </IfNotAuthenticated>
    </div>
  )
}
