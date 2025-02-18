import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AddForm from './components/AddForm/AddForm'
import UpdateForm from './components/UpdateForm/UpdateForm'

import DashBoardPage from './pages/DashBoardPage/DashBoardPage'
import NewsDetailsPage from './pages/NewsDetailsPage/NewsDetailsPage'
import AboutPage from './pages/AboutPage/AboutPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

function App() {
  const [counter, setCounter] = useState(10)

  const addCounter = () => {
    setCounter(counter => counter + 1)
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<DashBoardPage />} />
        <Route path='/newsDetailsPage/:newId' element={<NewsDetailsPage />} />
        <Route path='/aboutPage' element={<AboutPage />} />
        <Route path='/addForm' element={<AddForm counter={addCounter} />} />
        <Route path='/EditForm/:newId' element={<UpdateForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
