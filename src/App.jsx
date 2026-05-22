import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import CursorGlow from './components/CursorGlow/CursorGlow'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <CursorGlow />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
      </main>

      <footer className="footer">
        <p>© 2026 - Mouhamadou Mouhtada NDIAYE | Mentoré par Antigravity</p>
      </footer>
    </div>
  )
}

export default App
