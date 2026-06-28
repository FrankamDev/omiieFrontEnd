import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
