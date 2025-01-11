import {BrowserRouter , Routes , Route} from "react-router-dom"
import './App.css'

import Home from "./Panels/Home"
import Login from "./Pages/Login"
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

