import { Routes, Route } from 'react-router-dom'
import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'
import { SendEmail } from '../pages/SendEmail'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/sendemail" element={<SendEmail />} />
    </Routes>
  )
}