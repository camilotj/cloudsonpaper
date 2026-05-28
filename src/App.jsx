import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import './styles/global.css'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photography" element={<CategoryPage category="photography" />} />
        <Route path="/photography/:slug" element={<ProjectDetail type="photography" />} />
        <Route path="/film" element={<CategoryPage category="film" />} />
        <Route path="/film/:slug" element={<ProjectDetail type="film" />} />
        <Route path="/writing" element={<CategoryPage category="writing" />} />
        <Route path="/writing/:slug" element={<ProjectDetail type="article" />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

