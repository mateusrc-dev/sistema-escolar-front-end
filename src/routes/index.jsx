import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
import { useAuth } from '../hooks/auth'

export function Routes() {
  const { user } = useAuth()
  if (user) {
    return (
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    )
  } else {
    return (
      <BrowserRouter>
        <AuthRoutes />
      </BrowserRouter>
    )
  }
}