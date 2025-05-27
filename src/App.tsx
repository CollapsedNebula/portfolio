import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <>
      {/* <Navbar /> */}
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />

          <Route path="/projects/:id" element={<ProjectDetailPage />} /> 
          <Route path="/contact" element={<ContactPage />} /> */}
          

          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default App
