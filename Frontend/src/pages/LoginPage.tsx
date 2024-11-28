import Login from "../components/Login"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LoginPage = () => {
  return (
    <>
      <Navbar />

      <div className="main-content flex-grow">
        <Login />
      </div>

      <Footer />
    </>
  )
}

export default LoginPage