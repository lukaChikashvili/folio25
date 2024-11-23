
import { useContext, useEffect } from "react"
import About from "./components/About"
import CanvasPage from "./components/CanvasPage"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import { UserContext } from "./context/UserContext"


function App() {

  const { darkMode } = useContext(UserContext);

  useEffect(() => {

    


    document.body.style.background = darkMode
    ? ` linear-gradient(
      to right,
      #606c88,#3f4c6b
    )`
    : `linear-gradient(130deg, #000000, #2c003e)`;

    

   
  }, [darkMode]);

  return (
    <>
    

    <Header />
    <CanvasPage />
     <Home />
     <About />
     <Skills />
     <Projects />
     <Contact />
     <Footer />
 
    </>
  )
}

export default App
