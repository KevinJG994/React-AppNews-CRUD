import { Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import DashBoardPage from './pages/DashBoardPage/DashBoardPage'
import NewsDetailsPage from './pages/NewsDetailsPage/NewsDetailsPage'
import AboutPage from './pages/AboutPage/AboutPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import AddForm from './components/AddForm/AddForm'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<DashBoardPage />} />
        <Route path='/newsDetailsPage' element={<NewsDetailsPage />} />
        <Route path='/aboutPage' element={<AboutPage />} />
        <Route path='/addForm' element={<AddForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />  
    </>
  )
}

export default App
