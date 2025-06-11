
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AlbumRevealPage from './pages/AlbumRevealPage/AlbumRevealPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/album-reveal" element={<AlbumRevealPage />} />
      </Routes>
    </BrowserRouter>)
}

export default App
