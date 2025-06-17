import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Auth0Provider } from '@auth0/auth0-react'

import { routes } from '@/routes'

const router = createBrowserRouter(routes)

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="kahikatea-2025-eric.au.auth0.com"
      clientId="UBdSAaGDeCam4uaVCWaH17yiSp9hs96m"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://meows/api',
      }}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
      ,
    </Auth0Provider>,
  )
})
