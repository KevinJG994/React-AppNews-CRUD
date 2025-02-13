import { Route, Routes } from 'react-router-dom'
import './App.css'
import DashBoardPage from './pages/DashBoardPage'

import Navbar from './components/Navbar'
import NewsDetailsPage from './pages/NewsDetailsPage'

function App() {

  return (
    <>
      <Navbar />
  
      <Routes>
      <Route path='/' element={<DashBoardPage />} />
        <Route path='/newsDetailsPage' element={<NewsDetailsPage />} />
      </Routes>
{/* 
      <Route path="*" element={<NotFoundPage />} /> */}
    </>
  )
}

export default App
