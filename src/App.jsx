import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
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
        <Route path="/photography/:id" element={<ProjectDetail />} />
        <Route path="/film" element={<CategoryPage category="film" />} />
        <Route path="/film/:id" element={<ProjectDetail />} />
        <Route path="/articles" element={<CategoryPage category="articles" />} />
        <Route path="/articles/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
