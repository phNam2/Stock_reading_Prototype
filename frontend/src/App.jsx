import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './pages';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />


        {/* <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
