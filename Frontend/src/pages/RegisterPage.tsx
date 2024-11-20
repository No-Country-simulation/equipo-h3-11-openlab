import Register from "../components/Register"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RegisterPage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="main-content flex-grow">
        <Register />
      </div>
      
      {/* Footer */}
      <Footer />
    </>
  )
}

export default RegisterPage