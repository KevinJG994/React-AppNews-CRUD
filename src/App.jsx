import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import DashBoardPage from './pages/DashBoardPage/DashBoardPage'
import NewsDetailsPage from './pages/NewsDetailsPage/NewsDetailsPage'
import AboutPage from './pages/AboutPage/AboutPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import EditorPage from './pages/EditorPage/EditorPage'
import Form from './components/Form/Form'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<DashBoardPage />} />
        <Route path='/newsDetailsPage/:newId' element={<NewsDetailsPage />} />
        <Route path='/aboutPage' element={<AboutPage />} />
        <Route path='/addForm' element={<Form />} />
        <Route path='/EditForm/:newId' element={<Form />} />
        <Route path='/editorPage/:editorId' element={<EditorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
