import Header from '../components/Header.tsx';
import Sidebar from '../components/Sidebar.tsx';
import Footer from '../components/Footer.tsx';
import User from '../components/Userprofile/User.tsx';
//import './style.css'


const UserProfile = () => {
  return (
    <>
      <Header />
      <div className="main-content flex-grow relative bg-slate-50">
          <Sidebar />
          <User />
      </div>
      <Footer />
    </>
  )
}

export default UserProfile