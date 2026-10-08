import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Certifications from "./components/Certifications"
import Honors from "./components/Honors"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Education />
        <Certifications />
        <Honors />
      </main>

      <Footer />
    </div>
  )
}

export default App