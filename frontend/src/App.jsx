import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home, Login, Register, NotFound, StockList } from './pages'
import { NavBar } from "./components"
import ProtectedRoute from "./components/ProtectedRoute"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <div className="bg">
          <NavBar/>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
