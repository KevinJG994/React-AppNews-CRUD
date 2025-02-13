import { Route, Routes } from 'react-router-dom'
import './App.css'
import DashBoardPage from './pages/DashBoardPage'

import Navbar from './components/Navbar'
import NewsDetailsPage from './pages/NewsDetailsPage'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<DashBoardPage />} />
        <Route path='/newsDetailsPage' element={<NewsDetailsPage />} />
        <Route path='/aboutPage' element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
