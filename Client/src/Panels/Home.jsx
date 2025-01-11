import Navbar from "../Components/Navbar"
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <>
    <div className="flex flex-col h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </div>
    
    </>
  )
}

export default Home