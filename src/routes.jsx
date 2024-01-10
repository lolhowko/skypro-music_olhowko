import { Routes, Route } from 'react-router-dom'
import { MainTracks } from './pages/main-tracks'
import { Category } from './pages/category'
import { NotFound } from './pages/not-found'
import { Favorites } from './pages/favorites'
import { ProtectedRoute } from './components/protected-route'
import AuthPage from './pages/register/authPage'
import { Layout } from './components/pageLayout/pageLayout'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Auth" element={<AuthPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainTracks />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
