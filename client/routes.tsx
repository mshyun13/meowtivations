import { Route, createRoutesFromElements } from 'react-router'

import App from '@/components/layout/App'
import Home from '@/pages/Home'
import Random from '@/pages/RandomMeowtivation'
import Meowtivation from '@/pages/Meowtivation'
import Gallery from '@/pages/Gallery'
import NotFound from '@/pages/NotFound'
import Create from '@/pages/Create'
import Profile from '@/pages/Profile'

import Registration from './pages/Registration'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/meowtivations/:id" element={<Meowtivation />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/random" element={<Random />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/create" element={<Create />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="*" element={<NotFound />} />
  </Route>,
)
