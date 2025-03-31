import { Link } from 'react-router'

function Nav() {
  return (
    <nav className="flex gap-4 p-4">
      <Link to="/">Home</Link>
      <Link to="/random">Random</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/create">Create</Link>
      <Link to="/users/user1">Example User</Link>
    </nav>
  )
}

export default Nav
