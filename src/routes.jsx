import { Routes, Route } from 'react-router-dom'
import { MainTracks } from './pages/main-tracks'
import { Category } from './pages/category'
import { NotFound } from './pages/not-found'
import { Login } from './pages/login'
import { Favorites } from './pages/favorites'
import { Register } from './pages/register'
import { ProtectedRoute } from './components/protected-route'
import AuthPage from './pages/register/authPage'

export const AppRoutes = ({ user, setUser, onAuthButtonClick }) => {
  return (
    <Routes>

      <Route path="/Auth" element={<AuthPage setUser={setUser} />} />

      {/* <Route
        path="/login"
        element={
          <Login
            onAuthButtonClick={onAuthButtonClick}
          />
        }
      /> */}
      {/* <Route path="/register" element={<Register />} /> */}
      {/* <Route path="/login" element={<AuthPage />} /> */}

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<MainTracks />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
