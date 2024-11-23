import Home from "../components/Home"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />

      <div className="main-content flex-grow">
        <Home />
      </div>
      
      <Footer />
    </>
  )
}

export default HomePage