import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserProfile from "./pages/UserProfile";
import Initiatives from "./pages/Initiatives";
import WalletPage from "./pages/walletPage";
import Market from "./pages/Market";
import Settings from "./pages/Settings";
import MintTokens from "./utils/scripts/MintTokens";
//import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="main-content flex flex-col min-h-screen">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/userhome" element={<UserProfile />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/market" element={<Market />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/mint" element={<MintTokens />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
