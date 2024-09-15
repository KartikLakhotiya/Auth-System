import { Navigate, Route, Routes } from 'react-router-dom'
import FloatingShape from './components/FloatingShape'
import Signup from './pages/Signup'
import Login from './pages/Login'
import EmailVerificationPage from './pages/EmailVerificationPage'
import { Toaster } from 'react-hot-toast'
import { useAuthStore } from './store/authStore'
import { useEffect } from 'react'
import DashboardPage from './pages/DashboardPage'
import LoadingSpinner from './components/LoadingSpinner'

//protect routes that require authentication
const ProtectedRoutes = ({ children }) => {

  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />
  }

  if (!user.isVerified) {
    return <Navigate to='verify-email' replace />
  }

  return children;
}

//redirect authenticated users to homepage
const RedirectUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (isAuthenticated && user.isVerified) {
    return <Navigate to='/' replace />
  }
  return children;
}
function App() {

  const { isCheckingAuth, checkAuth, isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth])
  console.log("isAuthencticated", isAuthenticated);
  console.log("User", user)

  if (isCheckingAuth) {
    return <LoadingSpinner />
  }
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden'>
      <FloatingShape
        color="bg-green-500"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        color="bg-green-500"
        size="w-48 h-48"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        color="bg-green-500"
        size="w-32 h-32"
        top="-5%"
        left="10%"
        delay={0}
      />

      <Toaster />
      <Routes>
        <Route path='/' element={<ProtectedRoutes><DashboardPage /></ProtectedRoutes>} />
        <Route path='/signup' element={<RedirectUser><Signup /></RedirectUser>} />
        <Route path='/login' element={<RedirectUser><Login /></RedirectUser>} />
        <Route path='/verify-email' element={<EmailVerificationPage />} />
      </Routes>
    </div>
  )
}

export default App
