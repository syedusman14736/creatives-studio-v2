import Home from "./pages/client/home/Home"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
    });
  }, [])
  return (
    <>
      <Home />
    </>

  )
}

export default App
